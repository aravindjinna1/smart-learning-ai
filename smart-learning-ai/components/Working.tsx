"use client";

import React, { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Set Your Goal",
    description:
      "Tell Learnexa what you want to master — DSA, web dev, Python, or any tech skill. We build a path around you.",
    color: "#6366f1",
    icon: "🎯",
  },
  {
    number: "02",
    title: "AI Maps Your Path",
    description:
      "Our AI analyzes your skill gaps and designs a structured, step-by-step curriculum tailored to your pace.",
    color: "#22d3ee",
    icon: "🧠",
  },
  {
    number: "03",
    title: "Learn with Resources",
    description:
      "Access curated videos, notes, practice sheets, and real interview problems — all in one place.",
    color: "#e879f9",
    icon: "📚",
  },
  {
    number: "04",
    title: "Ask AI Anytime",
    description:
      "Stuck on a concept? The AI assistant explains, quizzes, and guides you through any problem instantly.",
    color: "#4ade80",
    icon: "💬",
  },
];

const Working = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          } else {
            entry.target.classList.remove("reveal");
          }
        });
      },
      { threshold: 0.25 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
          overflow: hidden;

          opacity: 0;
          transition:
            opacity 0.6s ease,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .from-left {
          transform: translateX(-60px);
        }

        .from-right {
          transform: translateX(60px);
        }

        .working-card.reveal {
          opacity: 1;
          transform: translateX(0);
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
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ height: 1, width: 32, background: "linear-gradient(90deg, transparent, #6366f1)" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: "#6366f1" }}>
              HOW IT WORKS
            </span>
            <div style={{ height: 1, width: 32, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
          </div>

          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#f1f5f9" }}>
            Your Journey to{" "}
            <span style={{
              background: "linear-gradient(90deg,#6366f1,#22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Mastery
            </span>
          </h2>

          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 520, margin: "12px auto 0" }}>
            Learnexa uses AI to turn vague learning intentions into clear, actionable progress.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
          {steps.map((step, i) => (
            <div
              key={step.number}

ref={(el) => {
  if (el) {
    cardsRef.current[i] = el;
  } else {
    cardsRef.current[i] = null as any;
  }
}}              
              className={`working-card ${i % 2 === 0 ? "from-left" : "from-right"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${step.color}44`;
                e.currentTarget.style.background = `${step.color}07`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {/* Accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: `linear-gradient(90deg, ${step.color}, transparent)`,
              }} />

              {/* Number + icon */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="step-number" style={{ color: step.color }}>
                  {step.number}
                </span>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${step.color}18`,
                  border: `1.5px solid ${step.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {step.icon}
                </div>
              </div>

              <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 16 }}>
                {step.title}
              </h3>

              <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65 }}>
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