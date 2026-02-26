


const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");

dotenv.config();

// pdf-parse fix: some versions export the function as .default, others directly
const pdfParseLib = require("pdf-parse");
const pdfParse = typeof pdfParseLib === "function" ? pdfParseLib : pdfParseLib.default;

const askai = express();
askai.use(express.json({ limit: "10mb" }));

/* ------------------------------
   MULTER CONFIG (MEMORY)
--------------------------------*/
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are supported"));
    }
  },
});

/* ------------------------------
   GEMINI CONFIG
--------------------------------*/
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

/* ------------------------------
   POST /askai
--------------------------------*/
askai.post("/askai", upload.single("resume"), async (req, res) => {
  try {
    const mode = req.body?.mode || "chat";
    const prompt = req.body?.prompt || "";
    const jobTitle = req.body?.jobTitle || "";

    /* ---------- CHAT MODE ---------- */
    if (mode === "chat") {
      if (!prompt.trim()) {
        return res.status(400).json({ message: "Prompt is required" });
      }

      const response = await callGemini(`
You are a concise technical assistant.
Use bullet points where helpful.
Avoid unnecessary verbosity.

QUESTION:
${prompt}
      `);

      return res.json({ text: response });
    }

    /* ---------- RESUME MODE ---------- */
    if (mode === "resume") {
      if (!req.file) {
        return res.status(400).json({ message: "Resume PDF file is required" });
      }

      // Verify pdfParse loaded correctly
      if (typeof pdfParse !== "function") {
        console.error("pdfParse is not a function. Value:", pdfParse);
        return res.status(500).json({ message: "PDF parser failed to initialize on server." });
      }

      let resumeText = "";

      try {
        console.log("Parsing PDF, buffer size:", req.file.buffer.length);
        const parsed = await pdfParse(req.file.buffer);
        resumeText = parsed.text;
        console.log(`Extracted ${resumeText.length} characters from PDF`);
      } catch (parseErr) {
        console.error("PDF parse error:", parseErr);
        return res.status(422).json({
          message: "Failed to parse PDF. Make sure it is a text-based PDF, not a scanned image.",
        });
      }

      if (!resumeText.trim()) {
        return res.status(422).json({
          message: "No text could be extracted. The PDF may be image-only.",
        });
      }

      const response = await callGemini(`
You are an expert ATS resume reviewer and career coach.

REVIEW RULES:
- Resumes should be one page
- No tables, icons, or fancy formatting — pure text only
- Use strong action verbs (Led, Built, Reduced, Improved, Launched, etc.)
- Quantify achievements where possible (%, $, time saved)
- Optimize for ATS keyword scanning
- Target job title: ${jobTitle || "Not specified"}

YOUR TASKS:
1. **Overall ATS Score** — Give a score out of 10 with a one-line verdict
2. **Key Weaknesses** — List the top 3–5 issues
3. **Missing Keywords** — List important keywords/skills likely missing for this role
4. **Improved Bullet Points** — Rewrite the 3 weakest bullet points from the resume
5. **ATS-Optimized Resume** — Rewrite the full resume in clean plain text, ATS-friendly format

RESUME TEXT:
${resumeText}
      `);

      return res.json({ text: response });
    }

    return res.status(400).json({ message: `Invalid mode: "${mode}". Use "chat" or "resume".` });

  } catch (err) {
    console.error("Route error:", err);

    if (err.message === "Only PDF files are supported") {
      return res.status(400).json({ error: err.message });
    }

    res.status(500).json({ error: "Internal server error" });
  }
});

/* ------------------------------
   GEMINI CALL FUNCTION
--------------------------------*/
async function callGemini(text) {
  const response = await fetch(GEMINI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192,
      },
    }),
  });

  if (!response.ok) {
    const errData = await response.json();
    console.error("Gemini API error:", errData);
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";
}

module.exports = askai;