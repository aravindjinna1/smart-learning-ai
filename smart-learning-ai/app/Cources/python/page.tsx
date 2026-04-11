"use client"

import CourseModuleCard from "./CourseModuleCard";
import Link from "next/link";
import DocsContent from "./DocsContent";

const pythonModules = [
  {
    title: "Introduction to Python",
    description: "Python basics, syntax, variables, and data types",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
    resourceUrl: "https://drive.google.com/your-python-notes",
    color: "#6366f1",
    icon: "🐍",
  },
  {
    title: "Control Flow & Functions",
    description: "Conditions, loops, functions, and best practices",
    youtubeUrl: "https://www.youtube.com/watch?v=ERCMXc8x7mc",
    color: "#22d3ee",
    icon: "↺",
  },
  {
    title: "Data Structures in Python",
    description: "Lists, tuples, sets, dictionaries, and use cases",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLhR2IpV1b2FwWwviBHRrR118YAaSlyhTU",
    color: "#4ade80",
    icon: "▦",
  },
  {
    title: "Object-Oriented Programming",
    description: "Classes, objects, inheritance, and polymorphism",
    youtubeUrl: "https://www.youtube.com/watch?v=eWRfhZUzrAc",
    color: "#f59e0b",
    icon: "⬡",
  },
  {
    title: "File Handling & Exception Handling",
    description: "Working with files and handling runtime errors",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
    color: "#e879f9",
    icon: "📁",
  },
  {
    title: "Python for Interviews",
    description: "Common interview questions and coding patterns",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLI4OVrCFuY5725OhoRi-G2YwnjKXh7v0F",
    color: "#fb923c",
    icon: "🎯",
  },
];

export default function PythonCoursePage() {
  return (
    <>
      <style>{`
        .py-root * { box-sizing: border-box; }

        /* Dot-grid bg — same family as grid but dot variant for variety */
        .py-dot-bg {
          background-image: radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .tag-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          padding: 4px 11px;
          border-radius: 999px;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        .ai-cta-banner {
          position: relative;
          background: linear-gradient(135deg, rgba(79,70,229,0.14), rgba(124,58,237,0.09), rgba(168,85,247,0.06));
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 22px;
          padding: 40px 36px;
          text-align: center;
          overflow: hidden;
        }
        .ai-cta-banner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #6366f1, #e879f9, transparent);
          opacity: 0.6;
        }
        .ai-cta-banner::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #22d3ee, transparent);
          opacity: 0.25;
        }

        .ai-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          padding: 13px 32px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: all 0.25s;
          margin-top: 20px;
          display: inline-flex;
        }
        .ai-cta-btn:hover {
          box-shadow: 0 0 28px rgba(99,102,241,0.45);
          transform: translateY(-2px);
        }

        .eyebrow {
          display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
        }
        .eyebrow-line { height: 1px; width: 32px; background: linear-gradient(90deg, #6366f1, transparent); }
        .eyebrow-text {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase; color: #6366f1;
        }
      `}</style>

      <div
        className="py-root py-dot-bg"
        style={{ minHeight: "100vh", background: "#090721", color: "#f1f5f9", position: "relative" }}
      >
        {/* Orb 1 */}
        <div aria-hidden style={{
          position: "absolute", top: -120, right: -120,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%)",
          opacity: 0.18, filter: "blur(60px)", pointerEvents: "none", zIndex: 0,
        }} />
        {/* Orb 2 */}
        <div aria-hidden style={{
          position: "absolute", bottom: -80, left: -80,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, #e879f9 0%, #7c3aed 50%, transparent 70%)",
          opacity: 0.1, filter: "blur(60px)", pointerEvents: "none", zIndex: 0,
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "48px 32px" }}>

          {/* ── Hero Header ── */}
          <section style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)",
                color: "#818cf8", padding: "4px 12px", borderRadius: 999,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 8px #6366f1", display: "inline-block", animation: "pulse 2s infinite" }} />
                Learnexa
              </span>
            </div>

            <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 14px" }}>
              Python{" "}
              <span style={{
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(90deg, #6366f1, #22d3ee)",
                backgroundClip: "text",
              }}>
                Programming
              </span>
            </h1>

            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.65, maxWidth: 520, margin: "0 0 20px" }}>
              Learn Python from fundamentals to interview-level problem solving with curated videos, notes, and AI assistance.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "Beginner to Intermediate", color: "#6366f1", bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.25)" },
                { label: "Interview Focused", color: "#22d3ee", bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.25)" },
                { label: "AI Support", color: "#e879f9", bg: "rgba(232,121,249,0.1)", border: "rgba(232,121,249,0.25)" },
              ].map((t) => (
                <span key={t.label} className="tag-chip" style={{ background: t.bg, border: `1px solid ${t.border}`, color: t.color }}>
                  ✓ {t.label}
                </span>
              ))}
            </div>
          </section>

          {/* ── Modules ── */}
          <section style={{ marginBottom: 56 }}>
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Curriculum</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", margin: "0 0 22px" }}>
              Course Modules
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 16,
            }}>
              {pythonModules.map((module) => (
                <CourseModuleCard key={module.title} {...module} />
              ))}
            </div>
          </section>

          {/* ── AI CTA ── */}
          <section style={{ marginBottom: 56 }}>
            <div className="ai-cta-banner">
              {/* Decorative orb inside banner */}
              <div style={{
                position: "absolute", top: -60, right: -60,
                width: 200, height: 200, borderRadius: "50%",
                background: "radial-gradient(circle, #6366f1, transparent 70%)",
                opacity: 0.15, filter: "blur(40px)", pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: -40, left: -40,
                width: 160, height: 160, borderRadius: "50%",
                background: "radial-gradient(circle, #e879f9, transparent 70%)",
                opacity: 0.12, filter: "blur(30px)", pointerEvents: "none",
              }} />

              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#818cf8", margin: "0 0 10px", position: "relative" }}>
                ✦ Powered by AI
              </p>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", margin: "0 0 10px", position: "relative" }}>
                Stuck on a concept?
              </h2>
              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.65, maxWidth: 440, margin: "0 auto", position: "relative" }}>
                Ask Smart Learning AI for instant explanations, code walkthroughs, and real examples.
              </p>
              <div style={{ position: "relative" }}>
                <Link href="/Ask-ai" className="ai-cta-btn">
                  🤖 Ask AI
                </Link>
              </div>
            </div>
          </section>

          {/* ── Docs ── */}
          <section>
            <DocsContent />
          </section>

        </div>
      </div>
    </>
  );
}