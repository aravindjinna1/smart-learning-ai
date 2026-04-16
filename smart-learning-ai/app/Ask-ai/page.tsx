
"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";

type Message = { role: "user" | "ai"; content: string };

const PROMPT_PRESETS = [
  { label: "Build ATS Resume", icon: "📄", prompt: "Build an ATS-friendly single page resume" },
  { label: "Learn Python", icon: "🐍", prompt: "How to learn Python step by step" },
  { label: "React State", icon: "⚛️", prompt: "What is state in React?" },
  { label: "Express.js", icon: "🖥️", prompt: "Explain Express.js simply" },
];

export default function AskiAi() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingText, setTypingText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const [token, setToken] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null); // ← ADDED

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  // ← REPLACED: Smart scroll that respects user position
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    
    // Only auto-scroll if user is within 50px of bottom
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 50;
    
    if (isNearBottom) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
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

  /* ---------------- Drag & Drop ---------------- */
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) { setResumeFile(file); setPrompt(""); }
  };

  /* ---------------- File Upload ---------------- */
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { setResumeFile(file); setPrompt(""); }
  };

  const clearFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* ---------------- Submit ---------------- */
  const handleSubmit = async () => {
    if (loading) return;
    const isResumeMode = !!resumeFile;
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

      if (isResumeMode) {
        const formData = new FormData();
        formData.append("mode", "resume");
        formData.append("resume", resumeFile as File);
        formData.append("jobTitle", jobTitle);
        res = await fetch("http://localhost:5000/api/app/ai/askai", {
          method: "POST",
          body: formData,
        });
      } else {
        res = await fetch("http://localhost:5000/api/app/ai/askai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mode: "chat", prompt: currentPrompt }),
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
        if (isResumeMode) setResumeFile(null);
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error";
      setError(message);
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSubmit(); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --bg: #090721;
          --surface: rgba(255,255,255,0.04);
          --border: rgba(255,255,255,0.08);
          --border-active: rgba(99,102,241,0.5);
          --indigo: #6366f1;
          --cyan: #22d3ee;
          --pink: #e879f9;
          --text: #f1f5f9;
          --muted: #64748b;
        }

        .mono { font-family: 'JetBrains Mono', monospace; }

        /* Grid bg same as courses */
        .grid-bg {
          background-image:
            linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* Orb glows */
        .orb-1 {
          background: radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%);
        }
        .orb-2 {
          background: radial-gradient(circle, #e879f9 0%, #7c3aed 50%, transparent 70%);
        }

        /* Preset pills */
        .preset-pill {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          color: #94a3b8;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .preset-pill:hover {
          background: rgba(99,102,241,0.15);
          border-color: rgba(99,102,241,0.4);
          color: #c7d2fe;
          transform: translateY(-1px);
        }

        /* Message bubbles */
        .bubble-user {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border: 1px solid rgba(139,92,246,0.3);
          border-radius: 20px 20px 4px 20px;
          padding: 14px 18px;
          max-width: 80%;
          align-self: flex-end;
          color: #fff;
          font-size: 14px;
          line-height: 1.6;
        }
        .bubble-ai {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px 20px 20px 4px;
          padding: 16px 20px;
          max-width: 85%;
          align-self: flex-start;
          color: #e2e8f0;
          font-size: 14px;
          line-height: 1.7;
          position: relative;
        }
        .bubble-ai::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #6366f1, #22d3ee, transparent);
          border-radius: 20px 20px 0 0;
          opacity: 0.5;
        }

        /* AI label */
        .ai-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ai-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 8px #6366f1;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Drop zone */
        .drop-zone {
          border: 2px dashed rgba(99,102,241,0.25);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s;
          background: rgba(99,102,241,0.03);
          position: relative;
          overflow: hidden;
        }
        .drop-zone:hover, .drop-zone.dragging {
          border-color: rgba(99,102,241,0.6);
          background: rgba(99,102,241,0.08);
          transform: scale(1.005);
        }
        .drop-zone.has-file {
          border-style: solid;
          border-color: rgba(34,211,238,0.4);
          background: rgba(34,211,238,0.05);
        }

        /* File badge */
        .file-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34,211,238,0.12);
          border: 1px solid rgba(34,211,238,0.3);
          color: #22d3ee;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
        }

        /* Job title input */
        .job-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 12px 16px;
          color: #f1f5f9;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .job-input::placeholder { color: #475569; }
        .job-input:focus { border-color: rgba(99,102,241,0.5); }

        /* Textarea */
        .chat-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px 16px 0 0;
          padding: 16px 18px;
          color: #f1f5f9;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          width: 100%;
          resize: none;
          outline: none;
          transition: border-color 0.2s;
          line-height: 1.6;
        }
        .chat-input::placeholder { color: #475569; }
        .chat-input:focus { border-color: rgba(99,102,241,0.4); }

        /* Submit button */
        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 0 0 16px 16px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.05em;
          cursor: pointer;
          border: none;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #22d3ee, #6366f1);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .submit-btn:hover::before { opacity: 0.15; }
        .submit-btn:hover { transform: none; box-shadow: 0 0 24px rgba(99,102,241,0.4); }
        .submit-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .submit-btn span { position: relative; z-index: 1; }

        /* Thinking animation */
        .thinking-dots span {
          display: inline-block;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #6366f1;
          margin: 0 2px;
          animation: bounce-dot 1.2s infinite;
        }
        .thinking-dots span:nth-child(2) { animation-delay: 0.2s; background: #a855f7; }
        .thinking-dots span:nth-child(3) { animation-delay: 0.4s; background: #22d3ee; }
        @keyframes bounce-dot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }

        /* Error */
        .error-bar {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.3);
          color: #fca5a5;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Section label */
        .section-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 8px;
        }

        /* Scrollbar */
        .messages-area::-webkit-scrollbar { width: 4px; }
        .messages-area::-webkit-scrollbar-track { background: transparent; }
        .messages-area::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 2px; }

        /* Lock screen */
        .lock-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          backdrop-filter: blur(12px);
        }

        /* Input wrapper */
        .input-wrapper {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .input-wrapper:focus-within {
          border-color: rgba(99,102,241,0.4);
        }
        .input-wrapper .chat-input {
          border: none;
          border-radius: 0;
        }
        .input-wrapper .submit-btn {
          border-radius: 0;
        }

        .upload-icon {
          font-size: 32px;
          margin-bottom: 10px;
          display: block;
          filter: drop-shadow(0 0 12px rgba(99,102,241,0.4));
        }

        /* Divider */
        .or-divider {
          display: flex; align-items: center; gap: 12px;
          color: #334155; font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; margin: 4px 0;
        }
        .or-divider::before, .or-divider::after {
          content: ''; flex: 1;
          height: 1px; background: rgba(255,255,255,0.06);
        }

        /* Mode toggle */
        .mode-tabs {
          display: flex;
          gap: 4px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 4px;
        }
        .mode-tab {
          flex: 1; padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
          color: #64748b;
          border: none;
          background: transparent;
          font-family: 'Syne', sans-serif;
        }
        .mode-tab.active {
          background: rgba(99,102,241,0.2);
          border: 1px solid rgba(99,102,241,0.35);
          color: #c7d2fe;
        }

        /* Header badge */
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          color: #818cf8;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Markdown styling inside bubbles */
        .bubble-ai p { margin: 0 0 8px 0; }
        .bubble-ai p:last-child { margin-bottom: 0; }
        .bubble-ai code {
          font-family: 'JetBrains Mono', monospace;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 4px;
          padding: 1px 5px;
          font-size: 12px;
          color: #a5b4fc;
        }
        .bubble-ai pre {
          background: rgba(0,0,0,0.4) !important;
          border: 1px solid rgba(255,255,255,0.06) !important;
          border-radius: 10px !important;
          margin: 10px 0 !important;
          overflow-x: auto;
        }
        .bubble-ai ul, .bubble-ai ol { padding-left: 20px; margin: 6px 0; }
        .bubble-ai li { margin: 3px 0; }
        .bubble-ai strong { color: #e2e8f0; }
        .bubble-ai h1, .bubble-ai h2, .bubble-ai h3 {
          color: #e2e8f0; margin: 12px 0 6px;
          font-family: 'Syne', sans-serif;
        }

        /* Empty state */
        .empty-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 40px 20px;
          text-align: center;
          opacity: 0.5;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .msg-in { animation: fadeIn 0.3s ease forwards; }
      `}</style>

      <main className="aski-root min-h-screen relative overflow-hidden" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        {/* Grid bg */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 grid-bg" />

        {/* Orb 1 */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl z-0 orb-1" />

        {/* Orb 2 */}
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl z-0 orb-2" />

        <div className="relative z-10 px-6 py-10 max-w-3xl mx-auto flex flex-col gap-6" style={{ minHeight: '100vh' }}>

          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="header-badge">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 8px #6366f1', display: 'inline-block' }} />
                Learnexa AI
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight" style={{ lineHeight: 1.15 }}>
              AI Career &{" "}
              <span style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(90deg, #6366f1, #22d3ee)', backgroundClip: 'text' }}>
                Resume Assistant
              </span>
            </h1>
            <p style={{ color: '#64748b', marginTop: 10, fontSize: 14, maxWidth: 480, lineHeight: 1.65 }}>
              Ask anything, get career guidance, or drop your resume for an AI-powered deep analysis.
            </p>
          </div>

          {!token ? (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="lock-card" style={{ maxWidth: 380 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
                <p style={{ fontSize: 20, fontWeight: 800, color: '#f1f5f9', marginBottom: 8 }}>Access Restricted</p>
                <p style={{ fontSize: 13, color: '#64748b', marginBottom: 24, lineHeight: 1.6 }}>
                  Sign in to unlock AI career coaching and resume analysis.
                </p>
                <a
                  href="/Auth/Login"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    color: '#fff',
                    padding: '12px 28px',
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                  }}
                >
                  Sign In →
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Preset Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {PROMPT_PRESETS.map((p) => (
                  <button
                    key={p.prompt}
                    className="preset-pill"
                    onClick={() => { setPrompt(p.prompt); setResumeFile(null); }}
                  >
                    <span>{p.icon}</span>
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Error */}
              {error && (
                <div className="error-bar">
                  <span>⚠ {error}</span>
                  <button onClick={() => setError(null)} style={{ color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', fontSize: 16 }}>✕</button>
                </div>
              )}

              {/* Messages */}
              <div
                ref={messagesContainerRef}  // ← ADDED REF HERE
                className="messages-area"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  maxHeight: '52vh',
                  overflowY: 'auto',
                  paddingRight: 4,
                  flex: messages.length > 0 ? 'none' : 1,
                }}
              >
                {messages.length === 0 && !typingText && !loading && (
                  <div className="empty-state">
                    <div style={{ fontSize: 48 }}>✦</div>
                    <p style={{ fontWeight: 700, fontSize: 15, color: '#94a3b8' }}>Start a conversation</p>
                    <p style={{ fontSize: 12, color: '#475569' }}>Ask a career question or upload your resume below</p>
                  </div>
                )}

                {messages.map((m, i) => (
                  <div key={i} className="msg-in" style={{ display: 'flex', flexDirection: 'column' }}>
                    {m.role === 'ai' && (
                      <div className="ai-label" style={{ marginLeft: 4 }}>
                        <span className="ai-dot" />
                        Learnexa AI
                      </div>
                    )}
                    <div className={m.role === 'user' ? 'bubble-user' : 'bubble-ai'}>
                      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                        {m.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}

                {typingText && (
                  <div className="msg-in" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="ai-label" style={{ marginLeft: 4 }}>
                      <span className="ai-dot" />
                      Learnexa AI
                    </div>
                    <div className="bubble-ai">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{typingText}</ReactMarkdown>
                    </div>
                  </div>
                )}

                {loading && !typingText && (
                  <div className="msg-in" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="ai-label" style={{ marginLeft: 4 }}>
                      <span className="ai-dot" />
                      Learnexa AI
                    </div>
                    <div className="bubble-ai" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="thinking-dots">
                        <span /><span /><span />
                      </div>
                      <span style={{ fontSize: 12, color: '#475569' }}>Thinking…</span>
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Input panel */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 'auto' }}>

                {/* Resume drop zone */}
                <div>
                  <p className="section-label">Resume Analysis</p>
                  <div
                    className={`drop-zone ${isDragging ? 'dragging' : ''} ${resumeFile ? 'has-file' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => !resumeFile && fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.docx,.doc,.txt"
                      onChange={handleFileUpload}
                      style={{ display: 'none' }}
                    />
                    {resumeFile ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                        <div className="file-badge">
                          <span>📄</span>
                          <span className="mono" style={{ fontSize: 12 }}>{resumeFile.name}</span>
                          <button
                            onClick={(e) => { e.stopPropagation(); clearFile(); }}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#22d3ee', fontSize: 14, padding: 0, lineHeight: 1 }}
                          >
                            ✕
                          </button>
                        </div>
                        <input
                          type="text"
                          className="job-input"
                          placeholder="Target role (e.g. Senior Frontend Engineer)"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          style={{ maxWidth: 340, marginTop: 4 }}
                        />
                      </div>
                    ) : (
                      <>
                        <span className="upload-icon">⬆</span>
                        <p style={{ color: '#94a3b8', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
                          Drop your resume here
                        </p>
                        <p style={{ color: '#475569', fontSize: 12 }}>
                          PDF, DOCX, or TXT · <span style={{ color: '#6366f1', cursor: 'pointer' }}>browse files</span>
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Or divider */}
                {!resumeFile && <div className="or-divider">or ask a question</div>}

                {/* Chat input + submit */}
                {!resumeFile && (
                  <div className="input-wrapper">
                    <textarea
                      ref={textareaRef}
                      className="chat-input"
                      rows={3}
                      placeholder="What's on your mind? Career advice, tech concepts, interview prep…"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <button
                      className="submit-btn"
                      onClick={handleSubmit}
                      disabled={loading || (!resumeFile && !prompt.trim())}
                    >
                      <span>
                        {loading ? 'Generating response…' : 'Send Message  ↵'}
                      </span>
                    </button>
                  </div>
                )}

                {resumeFile && (
                  <button
                    className="submit-btn"
                    style={{ borderRadius: 14 }}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    <span>
                      {loading ? 'Analyzing resume…' : '✦  Analyze Resume with AI'}
                    </span>
                  </button>
                )}

              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}