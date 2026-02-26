  // "use client";

  // import { useEffect, useRef, useState } from "react";
  // import ReactMarkdown from "react-markdown";
  // import remarkGfm from "remark-gfm";
  // import rehypeHighlight from "rehype-highlight";
  // import "highlight.js/styles/github-dark.css";

  // type Message = { role: "user" | "ai"; content: string };

  // export default function AskiAi() {
  //   const [prompt, setPrompt] = useState<string>("");
  //   const [messages, setMessages] = useState<Message[]>([]);
  //   const [typingText, setTypingText] = useState<string>("");
  //   const [loading, setLoading] = useState<boolean>(false);
  //   const [error, setError] = useState<string | null>(null);

  //   const bottomRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }, [messages, typingText]);



  //   // Safe startTyping: receives a real string
  //   const startTyping = (fullText: string, onComplete?: () => void) => {
  //     if (typeof fullText !== "string") {
  //       console.error("startTyping called with non-string:", fullText);
  //       onComplete?.();
  //       return;
  //     }
  //     setTypingText("");
  //     let i = 0;
  //     const interval = setInterval(() => {
  //       setTypingText((prev) => prev + (fullText[i] ?? ""));
  //       i++;
  //       if (i >= fullText.length) {
  //         clearInterval(interval);
  //         onComplete?.();
  //       }
  //     }, 12);
  //   };



  //   // Markdown code block (fenced) renderer
  //   const PreBlock = ({ children }: { children?: React.ReactNode }) => {
  //     const code =
  //       typeof children === "string"
  //         ? children
  //         : Array.isArray(children)
  //         ? children.join("")
  //         : "";
      
  //     return (
  //       <div className="relative my-4">
  //         <button
  //           onClick={() => navigator.clipboard.writeText(code)}
  //           className="absolute right-2 top-2 text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
  //         >
  //           Copy
  //         </button>
  //         <pre className="bg-black p-4 rounded-lg overflow-x-auto">{children}</pre>
  //       </div>
  //     );
  //   };

  //   const InlineCode = ({ children }: { children?: React.ReactNode }) => (
  //     <code className="bg-gray-800 px-1 rounded text-yellow-300">{children}</code>
  //   );

  //   // MAIN submit handler with robust debugging and error UI
  //   const HandleSubmit = async () => {
  //     if (!prompt.trim() || loading) return;

  //     setError(null);
  //     const userMessage: Message = { role: "user", content: prompt };
  //     setMessages((prev) => [...prev, userMessage]); // append user
  //     setPrompt("");
  //     setLoading(true);

  //     try {
  //       // Build minimal serializable history to send to backend
  //       const history = [...messages, userMessage].map((m) => ({
  //         role: m.role,
  //         content: m.content,
  //       }));

  //       console.log("Sending messages to backend:", history);

  //       const combinedPrompt = history
  //   .map(m =>
  //     m.role === "user"
  //       ? `User: ${m.content}`
  //       : `AI: ${m.content}`
  //   )
  //   .join("\n");

  // const res = await fetch("http://localhost:5000/api/app/ai/askai", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ prompt: combinedPrompt }), // ✅ backend satisfied
  // });


  //       // Debug: status + headers
  //       console.log("Backend response status:", res.status, res.statusText);

  //       // Always read raw text for debugging first
  //       const raw = await res.text();
  //       console.log("Raw backend response text:", raw.slice(0, 500)); // truncated

  //       // If the response is JSON, parse it. If not, show raw.
  //       let data: any = null;
  //       try {
  //         data = raw ? JSON.parse(raw) : null;
  //       } catch (parseErr) {
  //         console.warn("Response is not JSON, using raw text as error/body", parseErr);
  //       }

  //       // handle HTTP error statuses
  //       if (!res.ok) {
  //         const message =
  //           (data && (data.error?.message || data.message || JSON.stringify(data))) ||
  //           raw ||
  //           `HTTP error ${res.status}`;
  //         console.error("Backend returned error:", message);
  //         setError(`Server error: ${message}`);
  //         setLoading(false);
  //         return;
  //       }

  //       // Prefer data.text if present, else search for reasonable fallback
  //       const aiText = (data && (data.text || data.answer || data.result)) ?? raw ?? "";

  //       if (!aiText || String(aiText).trim().length === 0) {
  //         console.error("Empty AI response. data:", data, "raw:", raw);
  //         setError("AI returned an empty response.");
  //         setLoading(false);
  //         return;
  //       }

  //       // Start typing from the actual string value
  //       const aiString = String(aiText);
  //       console.log("Starting typing with length:", aiString.length);

  //       startTyping(aiString, () => {
  //         // push final AI message when typing completes
  //         setMessages((prev) => [...prev, { role: "ai", content: aiString }]);
  //         setTypingText("");
  //         setLoading(false);
  //       });
  //     } catch (err: any) {
  //       console.error("Fetch failed:", err);
  //       setError("Network error: " + (err?.message || String(err)));
  //       setLoading(false);
  //     }
  //   };

  //   return (
  //     <main className="min-h-screen bg-[#0f0f0f] flex justify-center">
  //       <section className="w-full max-w-3xl px-4 py-6 flex flex-col gap-4">
  //         <h1 className="text-white text-3xl font-bold text-center">Ask AI anything</h1>

  //         {/* Error box */}
  //         {error && (
  //           <div className="bg-red-900 text-white p-3 rounded">
  //             <strong>Error:</strong> <span>{error}</span>
  //             <div className="text-xs text-gray-300 mt-1">Check console & network tab for details.</div>
  //           </div>
  //         )}

  //         {/* chat messages */}
  //         <div className="flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: "60vh" }}>
  //           {messages.map((msg, i) => (
  //             <div
  //               key={i}
  //               className={`max-w-[85%] p-4 rounded-xl ${msg.role === "user" ? "bg-blue-600 text-white self-end" : "bg-gray-900 text-white self-start"}`}
  //             >
  //               <ReactMarkdown
  //                 remarkPlugins={[remarkGfm]}
  //                 rehypePlugins={[rehypeHighlight]}
  //                 components={{
  //                   pre: PreBlock,
  //                   code: InlineCode,
  //                   p: ({ children }) => <div className="mb-3 leading-relaxed">{children}</div>,
  //                   li: ({ children }) => <li className="ml-5 list-disc mb-2">{children}</li>,
  //                 }}
  //               >
  //                 {msg.content}
  //               </ReactMarkdown>
  //             </div>
  //           ))}

  //           {/* typing bubble */}
  //           {typingText && (
  //             <div className="bg-gray-900 text-white p-4 rounded-xl self-start max-w-[85%]">
  //               <ReactMarkdown remarkPlugins={[remarkGfm]}>{typingText}</ReactMarkdown>
  //             </div>
  //           )}

  //           <div ref={bottomRef} />
  //         </div>

  //         {/* input */}
          
  //         <textarea
  //           className="bg-[#313133] text-white rounded-xl p-3 resize-none focus:outline-none"
  //           rows={3}
  //           placeholder="Ask anything..."
  //           value={prompt}
  //           onChange={(e) => setPrompt(e.target.value)}
  //         />
          
  //         <input type="file"  onChange={(e) => setPrompt(e.target.value)}  placeholder="Select your Resume" className="text-white"/>



  //         <div className="flex gap-2">

  //           <button onClick={HandleSubmit} className="bg-white text-black font-semibold rounded-xl p-2" disabled={loading}>
  //             {loading ? "Thinking..." : "Ask AI"}
  //           </button>

  //           <button
  //             onClick={() => {
  //               console.clear();
  //               setError(null);
  //             }}
  //             className="bg-gray-700 text-white rounded-xl p-2"
  //           >
  //             Clear console & errors
  //           </button>
  //         </div>
  //       </section>
  //     </main>
  //   );
  // }






  
// "use client";

// import { useEffect, useRef, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";

// type Message = { role: "user" | "ai"; content: string };

// const PROMPT_PRESETS = [
//   "Build an ATS-friendly single page resume",
//   "How to learn Python step by step",
//   "What is state in React?",
//   "Explain Express.js simply"
// ];

// export default function AskiAi() {
//   const [prompt, setPrompt] = useState("");
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [typingText, setTypingText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const [resumeText, setResumeText] = useState<string | null>(null);
//   const [jobTitle, setJobTitle] = useState("");

//   const bottomRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, typingText]);

//   /* ------------------ Typing Effect ------------------ */
//   const startTyping = (fullText: string, onComplete?: () => void) => {
//     if (typeof fullText !== "string") {
//       onComplete?.();
//       return;
//     }
//     setTypingText("");
//     let i = 0;
//     const interval = setInterval(() => {
//       setTypingText(prev => prev + (fullText[i] ?? ""));
//       i++;
//       if (i >= fullText.length) {
//         clearInterval(interval);
//         onComplete?.();
//       }
//     }, 12);
//   };

//   /* ------------------ Markdown Renderers ------------------ */
//   const PreBlock = ({ children }: { children?: React.ReactNode }) => {
//     const code =
//       typeof children === "string"
//         ? children
//         : Array.isArray(children)
//         ? children.join("")
//         : "";

//     return (
//       <div className="relative my-4">
//         <button
//           onClick={() => navigator.clipboard.writeText(code)}
//           className="absolute right-2 top-2 text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
//         >
//           Copy
//         </button>
//         <pre className="bg-black p-4 rounded-lg overflow-x-auto">{children}</pre>
//       </div>
//     );
//   };

//   const InlineCode = ({ children }: { children?: React.ReactNode }) => (
//     <code className="bg-gray-800 px-1 rounded text-yellow-300">{children}</code>
//   );

//   /* ------------------ File Upload (Resume) ------------------ */
//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = () => {
//       setResumeText(reader.result as string);
//     };
//     reader.readAsText(file);
//   };

//   /* ------------------ Submit ------------------ */
//   const HandleSubmit = async () => {
//     if (loading) return;

//     const isResumeMode = !!resumeText;
//     const userContent = isResumeMode
//       ? "Uploaded resume for analysis"
//       : prompt.trim();

//     if (!userContent) return;

//     setError(null);
//     setMessages(prev => [...prev, { role: "user", content: userContent }]);
//     setPrompt("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/app/ai/askai", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           mode: isResumeMode ? "resume" : "chat",
//           prompt,
//           resumeText,
//           jobTitle
//         })
//       });

//       const raw = await res.text();

//       let data: any = null;
//       try {
//         data = raw ? JSON.parse(raw) : null;
//       } catch {
//         data = { text: raw };
//       }

//       if (!res.ok) {
//         throw new Error(data?.message || "Server error");
//       }

//       const aiText =
//         data?.text || data?.answer || data?.result || "No response";

//       startTyping(String(aiText), () => {
//         setMessages(prev => [...prev, { role: "ai", content: String(aiText) }]);
//         setTypingText("");
//         setLoading(false);
//       });
//     } catch (err: any) {
//       setError(err.message || "Network error");
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#0f0f0f] flex justify-center">
//       <section className="w-full max-w-3xl px-4 py-6 flex flex-col gap-4">

//         <h1 className="text-white text-3xl font-bold text-center">
//           AI Resume & Career Assistant
//         </h1>

//         {/* Preset Prompts */}
//         <div className="flex flex-wrap gap-2">
//           {PROMPT_PRESETS.map(p => (
//             <button
//               key={p}
//               onClick={() => setPrompt(p)}
//               className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full hover:bg-gray-700"
//             >
//               {p}
//             </button>
//           ))}
//         </div>

//         {/* Error */}
//         {error && (
//           <div className="bg-red-900 text-white p-3 rounded">
//             <strong>Error:</strong> {error}
//           </div>
//         )}

//         {/* Messages */}
//         <div className="flex flex-col gap-4 overflow-y-auto max-h-[60vh]">
//           {messages.map((msg, i) => (
//             <div
//               key={i}
//               className={`max-w-[85%] p-4 rounded-xl ${
//                 msg.role === "user"
//                   ? "bg-blue-600 self-end"
//                   : "bg-gray-900 self-start"
//               }`}
//             >
//               <ReactMarkdown
//                 remarkPlugins={[remarkGfm]}
//                 rehypePlugins={[rehypeHighlight]}
//                 components={{
//                   pre: PreBlock,
//                   code: InlineCode
//                 }}
//               >
//                 {msg.content}
//               </ReactMarkdown>
//             </div>
//           ))}

//           {typingText && (
//             <div className="bg-gray-900 text-white p-4 rounded-xl self-start max-w-[85%]">
//               <ReactMarkdown>{typingText}</ReactMarkdown>
//             </div>
//           )}

//           <div ref={bottomRef} />
//         </div>

//         {/* Resume Inputs */}
//         <input
//           type="file"
//           accept=".txt,.pdf,.docx,.doc"
//           onChange={handleFileUpload}
//           className="text-white"
//         />

//         <input
//           type="text"
//           placeholder="Target Job Title (optional)"
//           value={jobTitle}
//           onChange={e => setJobTitle(e.target.value)}
//           className="bg-[#313133] text-white p-2 rounded"
//         />

//         <textarea
//           className="bg-[#313133] text-white rounded-xl p-3 resize-none"
//           rows={3}
//           placeholder="Ask anything..."
//           value={prompt}
//           onChange={e => setPrompt(e.target.value)}
//         />

//         <button
//           onClick={HandleSubmit}
//           disabled={loading}
//           className="bg-white text-black font-semibold rounded-xl p-2"
//         >
//           {loading ? "Thinking..." : "Ask AI"}
//         </button>
//       </section>
//     </main>
//   );
// }











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

  const bottomRef = useRef<HTMLDivElement | null>(null);

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
        formData.append("mode", "resume");          // ✅ THIS WAS THE BUG — was missing
        formData.append("resume", resumeFile as File);
        formData.append("jobTitle", jobTitle);

        res = await fetch("https://smart-learning-ai-c3ed.onrender.com/api/app/ai/askai", {
          method: "POST",
          body: formData,
          // ❗ Do NOT set Content-Type header — browser sets it with boundary automatically
        });
      }

      /* -------- CHAT MODE -------- */
      else {
        res = await fetch("https://smart-learning-ai-c3ed.onrender.com/api/app/ai/askai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode: "chat",
            prompt: currentPrompt,   // ✅ use captured value, not stale state
          }),
        });
      }

      const raw = await res.text();
      const data = JSON.parse(raw);

      if (!res.ok) throw new Error(data?.error || data?.message || "Server error");

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

        {/* Presets */}
        <div className="flex flex-wrap gap-2">
          {PROMPT_PRESETS.map((p) => (
            <button
              key={p}
              onClick={() => { setPrompt(p); setResumeFile(null); }}
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
            <button onClick={() => setError(null)} className="ml-2 text-red-300 hover:text-white">✕</button>
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
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{typingText}</ReactMarkdown>
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
                <button onClick={clearFile} className="text-green-400 hover:text-white">✕</button>
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
      </section>
    </main>
  );
}