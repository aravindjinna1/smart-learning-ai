
"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

type Message = { role: "user" | "ai"; content: string };

const PROMPT_PRESETS = [
  "Build an ATS-friendly single page resume",
  "How to learn Python step by step",
  "What is state in React?",
  "Explain Express.js simply",
];

export default function AskiAi() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingText, setTypingText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");

  const [token, setToken] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }

  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingText]);

  /* ---------------- Typing Effect ---------------- */
  const startTyping = (text: string, done?: () => void) => {
    setTypingText("");
    let i = 0;
    const interval = setInterval(() => {
      setTypingText((p) => p + (text[i] ?? ""));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        done?.();
      }
    }, 12);
  };

  /* ---------------- File Upload ---------------- */
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
      setPrompt(""); // clear chat prompt when file is selected
    }
  };

  const clearFile = () => {
    setResumeFile(null);
  };

  /* ---------------- Submit ---------------- */
  const handleSubmit = async () => {
    if (loading) return;

    const isResumeMode = !!resumeFile;

    // Capture prompt BEFORE clearing it
    const currentPrompt = prompt.trim();

    if (!isResumeMode && !currentPrompt) return;

    const userMessage = isResumeMode
      ? `📄 Resume uploaded${jobTitle ? ` — Target role: **${jobTitle}**` : ""}`
      : currentPrompt;

    setMessages((p) => [...p, { role: "user", content: userMessage }]);
    setPrompt("");
    setLoading(true);
    setError(null);

    try {
      let res: Response;

      /* -------- RESUME MODE -------- */
      if (isResumeMode) {
        const formData = new FormData();
        formData.append("mode", "resume"); // ✅ THIS WAS THE BUG — was missing
        formData.append("resume", resumeFile as File);
        formData.append("jobTitle", jobTitle);

        res = await fetch(
          "https://smart-learning-ai-c3ed.onrender.com/api/app/ai/askai",
          {
            method: "POST",
            body: formData,
            // ❗ Do NOT set Content-Type header — browser sets it with boundary automatically
          },
        );
      } else {
        /* -------- CHAT MODE -------- */
        res = await fetch(
          "https://smart-learning-ai-c3ed.onrender.com/api/app/ai/askai",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              mode: "chat",
              prompt: currentPrompt, // ✅ use captured value, not stale state
            }),
          },
        );
      }

      const raw = await res.text();
      const data = JSON.parse(raw);

      if (!res.ok)
        throw new Error(data?.error || data?.message || "Server error");

      const aiText = data.text || "No response";

      startTyping(aiText, () => {
        setMessages((p) => [...p, { role: "ai", content: aiText }]);
        setTypingText("");
        setLoading(false);
        if (isResumeMode) setResumeFile(null); // clear file after analysis
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error";
      setError(message);
      setLoading(false);
    }
  };

  /* ---------------- Key Handler ---------------- */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] flex justify-center">
      <section className="w-full max-w-3xl px-4 py-6 flex flex-col gap-4">
        <h1 className="text-white text-3xl font-bold text-center">
          AI Resume & Career Assistant
        </h1>

        {!token ? (
          <div className="flex flex-col items-center gap-4 mt-20">
            <p className="text-white text-2xl font-bold">🔒 Access Denied</p>
            <p className="text-gray-400">
              You need to login to use this feature
            </p>
            <a
              href="/Auth/Login"
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
            >
              Go to Login
            </a>
          </div>
        ) : (
          <>
            {/* Presets */}
            <div className="flex flex-wrap gap-2">
              {PROMPT_PRESETS.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPrompt(p);
                    setResumeFile(null);
                  }}
                  className="bg-gray-800 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-900 text-white p-3 rounded flex justify-between items-center">
                <span>{error}</span>
                <button
                  onClick={() => setError(null)}
                  className="ml-2 text-red-300 hover:text-white"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Messages */}
            <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-1">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl max-w-[85%] text-white ${
                    m.role === "user"
                      ? "bg-blue-600 self-end"
                      : "bg-gray-900 self-start"
                  }`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {m.content}
                  </ReactMarkdown>
                </div>
              ))}

              {typingText && (
                <div className="bg-gray-900 text-white p-4 rounded-xl self-start max-w-[85%]">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {typingText}
                  </ReactMarkdown>
                </div>
              )}

              {loading && !typingText && (
                <div className="bg-gray-900 text-gray-400 p-4 rounded-xl self-start">
                  <span className="animate-pulse">Analyzing...</span>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* File Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm font-medium">
                Upload Resume (PDF only)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  accept=".pdf,.docx,.doc,.txt"
                  onChange={handleFileUpload}
                  className=" text-white text-sm file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-700 file:text-white hover:file:bg-gray-600 cursor-pointer"
                />
                {resumeFile && (
                  <div className="flex items-center gap-2 bg-green-900/50 border border-green-700 px-3 py-1 rounded-full text-green-300 text-sm">
                    <span>✓ {resumeFile.name}</span>
                    <button
                      onClick={clearFile}
                      className="text-green-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Job Title */}
            <input
              type="text"
              placeholder="Target Job Title (optional — e.g. Senior Frontend Engineer)"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="bg-[#313133] text-white p-2 rounded placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500"
            />

            {/* Chat Input — disabled when file is selected */}
            {!resumeFile && (
              <textarea
                className="bg-[#313133] text-white p-3 rounded resize-none placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500"
                rows={3}
                placeholder="Ask anything... (Shift+Enter for new line, Enter to send)"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            )}

            <button
              onClick={handleSubmit}
              disabled={loading || (!resumeFile && !prompt.trim())}
              className="
    relative
    bg-gradient-to-l from-[#0ADEFA] to-[#EA05FF]
    text-black font-semibold rounded-xl px-4 py-2
    cursor-pointer
    border border-transparent
    transition-all duration-300
    disabled:opacity-40 disabled:cursor-not-allowed
    hover:bg-gray-200
    hover:shadow-[0_0_5px_#0ADEFA,0_0_10px_#EA05FF]
  "
            >
              {loading
                ? "Thinking..."
                : resumeFile
                  ? "Analyze Resume"
                  : "Ask AI"}
            </button>
          </>
        )}
      </section>
    </main>
  );
}
