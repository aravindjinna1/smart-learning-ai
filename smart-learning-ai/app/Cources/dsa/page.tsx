"use client";

import Link from "next/link";
import DocxContent from "./DocxContent";
import Tutorials from "./Tutorials";

const modules = [
  { name: "Arrays & Strings", icon: "▦", color: "#6366f1" },
  { name: "Recursion & Time Complexity", icon: "↺", color: "#22d3ee" },
  { name: "Linked Lists", icon: "⬡", color: "#4ade80" },
  { name: "Stacks & Queues", icon: "≡", color: "#f59e0b" },
  { name: "Trees & Graphs", icon: "✦", color: "#e879f9" },
  { name: "Sorting & Searching", icon: "⇅", color: "#fb923c" },
];

export default function DSACoursePage() {
  return (
    <>
      <style>{`
        .dsa-root * { box-sizing: border-box; }

        .dsa-grid-bg {
          background-image:
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .module-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.25s;
        }
        .module-card:hover {
          border-color: rgba(255,255,255,0.16);
          transform: translateX(4px);
          background: rgba(255,255,255,0.06);
        }

        .tag-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 999px;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        .ai-banner {
          position: relative;
          background: linear-gradient(135deg, rgba(79,70,229,0.12), rgba(124,58,237,0.08));
          border: 1px solid rgba(99,102,241,0.22);
          border-radius: 20px;
          padding: 28px 32px;
          overflow: hidden;
        }
        .ai-banner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, #6366f1, #22d3ee, transparent);
          opacity: 0.5;
        }

        .ask-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          padding: 11px 22px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: all 0.25s;
          margin-top: 14px;
          display: inline-flex;
        }
        .ask-btn:hover {
          box-shadow: 0 0 24px rgba(99,102,241,0.4);
          transform: translateY(-1px);
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .eyebrow-line {
          height: 1px; width: 32px;
          background: linear-gradient(90deg, #6366f1, transparent);
        }
        .eyebrow-text {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #6366f1;
        }
      `}</style>

      <div
        className="dsa-root dsa-grid-bg"
        style={{ minHeight: "100vh", background: "#090721", color: "#f1f5f9", position: "relative" }}
      >
        {/* Orb 1 */}
        <div aria-hidden style={{
          position: "absolute", top: -120, right: -120,
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%)",
          opacity: 0.18, filter: "blur(60px)", pointerEvents: "none", zIndex: 0,
        }} />
        {/* Orb 2 */}
        <div aria-hidden style={{
          position: "absolute", bottom: -100, left: -100,
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, #e879f9 0%, #7c3aed 50%, transparent 70%)",
          opacity: 0.1, filter: "blur(60px)", pointerEvents: "none", zIndex: 0,
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "48px 32px" }}>

          {/* ── Hero Header ── */}
          <section style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)",
                color: "#818cf8", padding: "4px 12px", borderRadius: 999,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 8px #6366f1", display: "inline-block" }} />
                Learnexa
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
              <div>
                <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
                  Data Structures &{" "}
                  <span style={{
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundImage: "linear-gradient(90deg, #6366f1, #22d3ee)", backgroundClip: "text",
                  }}>
                    Algorithms
                  </span>
                </h1>
                <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.65, maxWidth: 480, margin: "0 0 16px" }}>
                  Master problem-solving skills for coding interviews
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Core DSA Concepts", "Logical Thinking", "Interview Prep"].map((tag, i) => (
                    <span key={tag} className="tag-chip" style={{
                      background: ["rgba(99,102,241,0.1)", "rgba(34,211,238,0.1)", "rgba(232,121,249,0.1)"][i],
                      border: `1px solid ${["rgba(99,102,241,0.25)", "rgba(34,211,238,0.25)", "rgba(232,121,249,0.25)"][i]}`,
                      color: ["#a5b4fc", "#67e8f9", "#f0abfc"][i],
                    }}>
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Help panel */}
              <div className="ai-banner" style={{ minWidth: 240 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#818cf8", margin: "0 0 6px" }}>
                  ✦ AI Powered
                </p>
                <h2 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 6px", color: "#f1f5f9" }}>Need Help?</h2>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  Ask AI to explain concepts or guide you through any problem.
                </p>
                <Link href="/Ask-ai" className="ask-btn">🤖 Ask AI</Link>
              </div>
            </div>
          </section>

          {/* ── Course Modules ── */}
          <section style={{ marginBottom: 56 }}>
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Curriculum</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", margin: "0 0 20px" }}>
              Course Modules
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 12 }}>
              {modules.map((mod) => (
                <div key={mod.name} className="module-card">
                  {/* Color icon */}
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: `${mod.color}15`, border: `1.5px solid ${mod.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, color: mod.color, fontWeight: 800,
                  }}>
                    {mod.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 14, margin: "0 0 8px" }}>
                      {mod.name}
                    </h3>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {["🎥 Videos", "📘 Docs", "✍ Practice", "🧠 Ask AI"].map((chip) => (
                        <span key={chip} style={{
                          fontSize: 11, color: "#475569",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          padding: "2px 8px", borderRadius: 999,
                        }}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Resources ── */}
          <section style={{ marginBottom: 56 }}>
            <DocxContent />
          </section>

          {/* ── Tutorials ── */}
          <section>
            <Tutorials />
          </section>

        </div>
      </div>
    </>
  );
}