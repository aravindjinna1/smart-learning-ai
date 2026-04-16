"use client";

import { useEffect, useRef } from "react";
import { Users, BarChart3, Layers } from "lucide-react";

const stats = [
  {
    value: "5,000+",
    label: "Active Learners",
    sub: "and growing every week",
    icon: Users,
    color: "#6366f1",
  },
  {
    value: "92%",
    label: "Satisfaction Rate",
    sub: "based on learner feedback",
    icon: BarChart3,
    color: "#22d3ee",
  },
  {
    value: "10+",
    label: "Skill Tracks",
    sub: "DSA, Web Dev, Python, AI & more",
    icon: Layers,
    color: "#e879f9",
  },
];

export default function StatsSection() {
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
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: "72px 32px", position: "relative" }}>
      <style>{`
        .stat-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
          overflow: hidden;

          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.6s ease,
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .stat-card.reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.3);
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ height: 1, width: 32, background: "linear-gradient(90deg, transparent, #6366f1)" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6366f1" }}>
              By the numbers
            </span>
            <div style={{ height: 1, width: 32, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "#f1f5f9", margin: 0 }}>
            Trusted by Learners Across India
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="stat-card"
                style={{ transitionDelay: `${i * 120}ms` }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = `${stat.color}44`;
                  el.style.background = `${stat.color}07`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                {/* Accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 1,
                  background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                }} />

                {/* Glow */}
                <div style={{
                  position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)",
                  width: 120, height: 120, borderRadius: "50%",
                  background: stat.color, opacity: 0.08, filter: "blur(28px)",
                }} />

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${stat.color}18`,
                  border: `1.5px solid ${stat.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto",
                }}>
                  <Icon size={22} style={{ color: stat.color }} />
                </div>

                <p style={{ fontSize: 40, fontWeight: 800, color: "#f1f5f9", margin: "8px 0 0" }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", margin: 0 }}>
                  {stat.label}
                </p>
                <p style={{ fontSize: 12, color: "#475569", margin: 0 }}>
                  {stat.sub}
                </p>

                <div style={{
                  height: 3,
                  width: 40,
                  margin: "8px auto 0",
                  borderRadius: 999,
                  background: `linear-gradient(90deg, ${stat.color}, ${stat.color}44)`,
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}