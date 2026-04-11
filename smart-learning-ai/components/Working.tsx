"use client"
import React from "react";

const steps = [
  {
    number: "01",
    title: "Set Your Goal",
    description: "Tell Learnexa what you want to master — DSA, web dev, Python, or any tech skill. We build a path around you.",
    color: "#6366f1",
    icon: "🎯",
  },
  {
    number: "02",
    title: "AI Maps Your Path",
    description: "Our AI analyzes your skill gaps and designs a structured, step-by-step curriculum tailored to your pace.",
    color: "#22d3ee",
    icon: "🧠",
  },
  {
    number: "03",
    title: "Learn with Resources",
    description: "Access curated videos, notes, practice sheets, and real interview problems — all in one place.",
    color: "#e879f9",
    icon: "📚",
  },
  {
    number: "04",
    title: "Ask AI Anytime",
    description: "Stuck on a concept? The AI assistant explains, quizzes, and guides you through any problem instantly.",
    color: "#4ade80",
    icon: "💬",
  },
];

const Working = () => {
  return (
    <section style={{ padding: "80px 0", position: "relative" }}>
      <style>{`
        .working-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: all 0.3s;
          overflow: hidden;
        }
        .working-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }
        .step-number {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          font-family: monospace;
          opacity: 0.5;
        }
        .connector-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(99,102,241,0.4), transparent);
          margin-top: 24px;
          display: none;
        }
        @media (min-width: 768px) {
          .connector-line { display: block; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ height: 1, width: 32, background: "linear-gradient(90deg, transparent, #6366f1)" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6366f1" }}>
              How It Works
            </span>
            <div style={{ height: 1, width: 32, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 14px", letterSpacing: "-0.02em" }}>
            Your Journey to{" "}
            <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, #6366f1, #22d3ee)", backgroundClip: "text" }}>
              Mastery
            </span>
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
            Learnexa uses AI to turn vague learning intentions into clear, actionable progress — in four simple steps.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
          {steps.map((step) => (
            <div key={step.number} className="working-card"
              style={{ "--card-color": step.color } as React.CSSProperties}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = `${step.color}44`;
                el.style.background = `${step.color}07`;
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
                background: `linear-gradient(90deg, ${step.color}, transparent)`,
                opacity: 0.5,
              }} />
              {/* Glow */}
              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 100, height: 100, borderRadius: "50%",
                background: step.color, opacity: 0.07, filter: "blur(24px)",
                pointerEvents: "none",
              }} />

              {/* Number + icon */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="step-number" style={{ color: step.color }}>{step.number}</span>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${step.color}18`, border: `1.5px solid ${step.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18,
                }}>
                  {step.icon}
                </div>
              </div>

              <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 16, margin: 0, lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: 13, margin: 0, lineHeight: 1.65 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;