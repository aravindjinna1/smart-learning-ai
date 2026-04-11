"use client";

import { useState } from "react";
import Link from "next/link";

type Note = {
  title: string;
  description: string;
  url: string;
};

type Video = {
  title: string;
  level: string;
  link: string;
};

const levelColors: Record<string, string> = {
  Beginner: "#4ade80",
  Intermediate: "#f59e0b",
  Advanced: "#e879f9",
};

const tabConfig = [
  { key: "beginner", label: "Beginner", color: "#4ade80", icon: "🌱" },
  { key: "advanced", label: "Advanced", color: "#6366f1", icon: "⚡" },
  { key: "interview", label: "Interview", color: "#e879f9", icon: "🎯" },
];

export default function WebDevelopmentCourse() {
  const [activeTab, setActiveTab] = useState<"beginner" | "advanced" | "interview">("beginner");

  const notesData: Record<string, Note[]> = {
    beginner: [
      {
        title: "How the Web Works",
        description: "Understanding client, server, and HTTP basics.",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
      },
      {
        title: "HTML Basics",
        description: "Tags, structure, forms, semantic elements.",
        url: "https://www.w3schools.com/html/html_basic.asp",
      },
      {
        title: "CSS Fundamentals",
        description: "Selectors, Flexbox, Grid, responsiveness.",
        url: "https://www.w3schools.com/css/css_intro.asp",
      },
    ],
    advanced: [
      {
        title: "JavaScript Deep Dive",
        description: "Closures, promises, async/await, event loop.",
        url: "https://gist.github.com/faressoft/1977d7b04430bae78cd1273fb5176898",
      },
      {
        title: "React",
        description: "Components, hooks, SSR, routing.",
        url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
      },
      {
        title: "Node + Express",
        description: "REST APIs, middleware, authentication.",
        url: "https://www.w3schools.com/nodejs/nodejs_express.asp",
      },
    ],
    interview: [
      {
        title: "Frontend Interview Questions",
        description: "Common React & JS questions.",
        url: "https://roadmap.sh/questions/frontend",
      },
      {
        title: "Backend Interview Questions",
        description: "Node, JWT, database concepts.",
        url: "https://roadmap.sh/questions/backend",
      },
      {
        title: "Web Dev Cheat Sheet",
        description: "Quick revision of key concepts.",
        url: "https://github.com/VedantKhairnar/Cheat-Sheets/blob/master/Web%20Development/cheatsheets.md",
      },
    ],
  };

  const videos: Video[] = [
    { title: "Full HTML & CSS Course", level: "Beginner", link: "https://www.youtube.com/watch?v=G3e-cpL7ofc" },
    { title: "JavaScript Complete Guide", level: "Intermediate", link: "https://www.youtube.com/watch?v=EerdGm-ehJQ" },
    { title: "React.js Full Course", level: "Advanced", link: "https://www.youtube.com/watch?v=TtPXvEcE11E" },
    { title: "Node.js and Express.js Full Course", level: "Advanced", link: "https://www.youtube.com/watch?v=MIJt9H69QVc&t=36592s" },
    { title: "Java Full Stack Course", level: "Advanced", link: "https://www.youtube.com/watch?v=4XTsAAHW_Tc" },
    { title: "Python Full Stack Course", level: "Advanced", link: "https://www.youtube.com/watch?v=RT6IHsuriMI&list=PLryYKs02mpdIMPfxxN29PjIFktQMuiHUm" },
  ];

  const activeConfig = tabConfig.find((t) => t.key === activeTab)!;

  return (
    <>
      <style>{`
        .wd-root * { box-sizing: border-box; }

        .dot-bg {
          background-image: radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Responsive grids */
        .notes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 1024px) {
          .notes-grid, .videos-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .notes-grid, .videos-grid { grid-template-columns: 1fr; gap: 14px; }
          .wd-inner { padding: 32px 16px !important; }
          .hero-title { font-size: 28px !important; }
          .tab-row { gap: 8px !important; }
          .tab-btn { padding: 8px 14px !important; font-size: 11px !important; }
        }

        /* Tab button */
        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: #64748b;
          transition: all 0.2s;
          font-family: inherit;
        }
        .tab-btn:hover {
          color: #94a3b8;
          border-color: rgba(255,255,255,0.16);
        }

        /* Note card hover */
        .note-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: hidden;
          transition: all 0.25s;
        }
        .note-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 48px rgba(0,0,0,0.3);
        }

        /* Video card */
        .video-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow: hidden;
          transition: all 0.25s;
        }
        .video-card:hover {
          transform: translateY(-3px);
          border-color: rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.05);
          box-shadow: 0 18px 48px rgba(0,0,0,0.3);
        }

        /* Floating AI btn */
        .ai-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          padding: 13px 22px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.03em;
          box-shadow: 0 8px 32px rgba(99,102,241,0.45);
          transition: all 0.25s;
          z-index: 100;
        }
        .ai-float:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(99,102,241,0.6);
        }

        .eyebrow {
          display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
        }
        .eyebrow-line { height: 1px; width: 32px; background: linear-gradient(90deg, #6366f1, transparent); }
        .eyebrow-text { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #6366f1; }
      `}</style>

      <main
        className="wd-root dot-bg"
        style={{ minHeight: "100vh", background: "#090721", color: "#f1f5f9", position: "relative", overflow: "hidden" }}
      >
        {/* Orb 1 */}
        <div aria-hidden style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%)",
          opacity: 0.18, filter: "blur(70px)", pointerEvents: "none", zIndex: 0,
        }} />
        {/* Orb 2 */}
        <div aria-hidden style={{
          position: "absolute", bottom: -80, left: -80,
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, #e879f9 0%, #7c3aed 50%, transparent 70%)",
          opacity: 0.1, filter: "blur(60px)", pointerEvents: "none", zIndex: 0,
        }} />
        {/* Orb 3 */}
        <div aria-hidden style={{
          position: "absolute", top: "50%", right: -60,
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, #22d3ee 0%, #0891b2 50%, transparent 70%)",
          opacity: 0.07, filter: "blur(55px)", pointerEvents: "none", zIndex: 0,
        }} />

        <div
          className="wd-inner"
          style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "56px 32px 120px" }}
        >

          {/* ── Hero Header ── */}
          <section style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.28)",
                color: "#818cf8", padding: "4px 12px", borderRadius: 999,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 8px #6366f1", display: "inline-block" }} />
                Learnexa
              </span>
            </div>

            <h1
              className="hero-title"
              style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 14px", color: "#f1f5f9" }}
            >
              Web{" "}
              <span style={{
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(90deg, #f59e0b, #22d3ee)",
                backgroundClip: "text",
              }}>
                Development
              </span>
            </h1>

            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 0 20px" }}>
              Complete roadmap from zero to full-stack — curated notes, video tutorials, and interview prep with AI support.
            </p>

            {/* Tag chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "HTML & CSS", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)" },
                { label: "JavaScript", color: "#22d3ee", bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.25)" },
                { label: "React & Node", color: "#6366f1", bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.25)" },
                { label: "Interview Ready", color: "#e879f9", bg: "rgba(232,121,249,0.1)", border: "rgba(232,121,249,0.25)" },
              ].map((t) => (
                <span key={t.label} style={{
                  fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 999,
                  background: t.bg, border: `1px solid ${t.border}`, color: t.color,
                }}>
                  ✓ {t.label}
                </span>
              ))}
            </div>
          </section>

          {/* ── Notes Section ── */}
          <section style={{ marginBottom: 56 }}>
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Study Material</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", margin: "0 0 22px" }}>
              Notes & Resources
            </h2>

            {/* Tab Row */}
            <div className="tab-row" style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
              {tabConfig.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    className="tab-btn"
                    onClick={() => setActiveTab(tab.key as "beginner" | "advanced" | "interview")}
                    style={isActive ? {
                      background: `${tab.color}18`,
                      borderColor: `${tab.color}40`,
                      color: tab.color,
                    } : {}}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                    {isActive && (
                      <span style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: tab.color, boxShadow: `0 0 6px ${tab.color}`,
                        display: "inline-block", marginLeft: 2,
                      }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Notes Cards */}
            <div className="notes-grid">
              {notesData[activeTab].map((note) => (
                <div
                  key={note.title}
                  className="note-card"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = `${activeConfig.color}44`;
                    el.style.background = `${activeConfig.color}07`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  {/* Top accent */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, ${activeConfig.color}, transparent)`,
                    opacity: 0.5,
                  }} />
                  {/* Glow */}
                  <div style={{
                    position: "absolute", top: -24, right: -24,
                    width: 80, height: 80, borderRadius: "50%",
                    background: activeConfig.color, opacity: 0.07, filter: "blur(18px)",
                    pointerEvents: "none",
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${activeConfig.color}18`, border: `1.5px solid ${activeConfig.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, flexShrink: 0,
                  }}>
                    {activeConfig.icon}
                  </div>

                  <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 14, margin: 0, lineHeight: 1.35 }}>
                    {note.title}
                  </h3>
                  <p style={{ color: "#64748b", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                    {note.description}
                  </p>
                  <a
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 12, fontWeight: 700, color: activeConfig.color,
                      textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4,
                      letterSpacing: "0.03em", marginTop: 4,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ── Videos Section ── */}
          <section style={{ marginBottom: 48 }}>
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Video Tutorials</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", margin: "0 0 22px" }}>
              Watch & Learn
            </h2>

            <div className="videos-grid">
              {videos.map((video) => {
                const lvlColor = levelColors[video.level] ?? "#6366f1";
                return (
                  <div key={video.title} className="video-card">
                    {/* Top accent */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 1,
                      background: `linear-gradient(90deg, ${lvlColor}, transparent)`,
                      opacity: 0.4,
                    }} />
                    {/* Glow */}
                    <div style={{
                      position: "absolute", top: -24, right: -24,
                      width: 80, height: 80, borderRadius: "50%",
                      background: lvlColor, opacity: 0.07, filter: "blur(18px)",
                      pointerEvents: "none",
                    }} />

                    {/* Play + level row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{
                        width: 38, height: 38, borderRadius: "50%",
                        background: `linear-gradient(135deg, ${lvlColor}, ${lvlColor}88)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, color: "#000", fontWeight: 800,
                      }}>
                        ▶
                      </div>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: `${lvlColor}18`, border: `1px solid ${lvlColor}30`,
                        color: lvlColor, padding: "3px 10px", borderRadius: 999,
                      }}>
                        {video.level}
                      </span>
                    </div>

                    <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 14, margin: 0, lineHeight: 1.35 }}>
                      {video.title}
                    </h3>

                    <Link
                      href={video.link}
                      target="_blank"
                      style={{
                        fontSize: 12, fontWeight: 700, color: lvlColor,
                        textDecoration: "none", letterSpacing: "0.03em",
                        display: "inline-flex", alignItems: "center", gap: 4,
                        marginTop: "auto", transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                    >
                      Watch on YouTube →
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* Floating AI Button */}
        <Link href="/Ask-ai" className="ai-float">
          🤖 Ask AI
        </Link>
      </main>
    </>
  );
}