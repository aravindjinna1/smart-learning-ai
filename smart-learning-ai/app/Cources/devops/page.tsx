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

export default function DevOpsCourse() {
  const [activeTab, setActiveTab] = useState<"beginner" | "advanced" | "interview">("beginner");
  const [selectedContent, setSelectedContent] = useState<
    | { type: "note"; item: Note }
    | { type: "video"; item: Video }
    | null
  >(null);

  const getYouTubeEmbedUrl = (url: string): string => {
    // Extract YouTube video ID from standard watch?v= links (all videos in data use this format)
    const id = url.split("v=")[1]?.split("&")[0] || url.split("/").pop() || "";
    return `https://www.youtube.com/embed/${id}`;
  };

  const notesData: Record<string, Note[]> = {
    beginner: [
      {
        title: "What is DevOps?",
        description: "Core principles, culture, and the Dev + Ops lifecycle explained.",
        url: "https://www.geeksforgeeks.org/devops/devops-tutorial/",
      },
      {
        title: "Linux & Shell Basics",
        description: "Essential CLI commands, file system, permissions, and bash scripting.",
        url: "https://www.geeksforgeeks.org/linux-commands-cheat-sheet/",
      },
      {
        title: "Git & Version Control",
        description: "Branching, merging, pull requests, and Git workflows for teams.",
        url: "https://www.w3schools.com/git/",
      },
    ],
    advanced: [
      {
        title: "Docker Deep Dive",
        description: "Containers, images, Dockerfile, Docker Compose, and networking.",
        url: "https://docs.docker.com/get-started/",
      },
      {
        title: "Kubernetes in Practice",
        description: "Pods, services, deployments, Helm charts, and cluster management.",
        url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
      },
      {
        title: "Terraform & Ansible",
        description: "Infrastructure as Code — provisioning and configuration management.",
        url: "https://developer.hashicorp.com/terraform/tutorials",
      },
    ],
    interview: [
      {
        title: "DevOps Interview Questions",
        description: "Top Docker, Kubernetes, CI/CD, and cloud interview Q&A.",
        url: "https://roadmap.sh/questions/devops",
      },
      {
        title: "DevOps Roadmap 2026",
        description: "Step-by-step guide with curated resources to become a DevOps engineer.",
        url: "https://roadmap.sh/devops",
      },
      {
        title: "DevOps Cheat Sheet",
        description: "Quick revision of Linux, Docker, K8s, Git, and CI/CD commands.",
        url: "https://github.com/milanm/DevOps-Roadmap",
      },
    ],
  };

  const videos: Video[] = [
    { title: "DevOps Prerequisites – Linux, Networking & Git", level: "Beginner", link: "https://www.youtube.com/watch?v=Wvf0mBNGjXY" },
    { title: "Docker Full Course for Beginners", level: "Beginner", link: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
    { title: "Kubernetes Full Course – TechWorld with Nana", level: "Intermediate", link: "https://www.youtube.com/watch?v=X48VuDVv0do" },
    { title: "Jenkins CI/CD Pipeline – Step by Step", level: "Intermediate", link: "https://www.youtube.com/watch?v=6YZvp2GwT0A" },
    { title: "Terraform Full Course – Infrastructure as Code", level: "Advanced", link: "https://www.youtube.com/watch?v=SLB_c_ayRMo" },
    { title: "Complete DevOps Bootcamp – Docker, K8s, CI/CD", level: "Advanced", link: "https://www.youtube.com/watch?v=j5Zsa_eOXeY" },
  ];

  const activeConfig = tabConfig.find((t) => t.key === activeTab)!;

  return (
    <>
      <style>{`
        .do-root * { box-sizing: border-box; }

        .dot-bg {
          background-image: radial-gradient(rgba(234,88,12,0.15) 1px, transparent 1px);
          background-size: 28px 28px;
        }

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
          .do-inner { padding: 32px 16px !important; }
          .hero-title { font-size: 28px !important; }
          .tab-row { gap: 8px !important; }
          .tab-btn { padding: 8px 14px !important; font-size: 11px !important; }
        }

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
          border-color: rgba(234,88,12,0.3);
          background: rgba(234,88,12,0.05);
          box-shadow: 0 18px 48px rgba(0,0,0,0.3);
        }

        .ai-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #ea580c, #c2410c);
          color: #fff;
          padding: 13px 22px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.03em;
          box-shadow: 0 8px 32px rgba(234,88,12,0.45);
          transition: all 0.25s;
          z-index: 100;
        }
        .ai-float:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(234,88,12,0.6);
        }

        .eyebrow {
          display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
        }
        .eyebrow-line { height: 1px; width: 32px; background: linear-gradient(90deg, #ea580c, transparent); }
        .eyebrow-text { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #ea580c; }
      `}</style>

      <main
        className="do-root dot-bg"
        style={{ minHeight: "100vh", background: "#0c0a09", color: "#f1f5f9", position: "relative", overflow: "hidden" }}
      >
        {/* Orb 1 — orange */}
        <div aria-hidden style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, #ea580c 0%, #9a3412 50%, transparent 70%)",
          opacity: 0.18, filter: "blur(70px)", pointerEvents: "none", zIndex: 0,
        }} />
        {/* Orb 2 — amber */}
        <div aria-hidden style={{
          position: "absolute", bottom: -80, left: -80,
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, #f59e0b 0%, #b45309 50%, transparent 70%)",
          opacity: 0.1, filter: "blur(60px)", pointerEvents: "none", zIndex: 0,
        }} />
        {/* Orb 3 — teal accent */}
        <div aria-hidden style={{
          position: "absolute", top: "50%", right: -60,
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, #22d3ee 0%, #0891b2 50%, transparent 70%)",
          opacity: 0.06, filter: "blur(55px)", pointerEvents: "none", zIndex: 0,
        }} />

        <div
          className="do-inner"
          style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "56px 32px 120px" }}
        >

          {/* ── Hero Header ── */}
          <section style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(234,88,12,0.12)", border: "1px solid rgba(234,88,12,0.28)",
                color: "#fb923c", padding: "4px 12px", borderRadius: 999,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ea580c", boxShadow: "0 0 8px #ea580c", display: "inline-block" }} />
                Learnexa
              </span>
            </div>

            <h1
              className="hero-title"
              style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 14px", color: "#f1f5f9" }}
            >
              Dev{" "}
              <span style={{
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(90deg, #ea580c, #f59e0b)",
                backgroundClip: "text",
              }}>
                Ops
              </span>
            </h1>

            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 0 20px" }}>
              Master the complete DevOps pipeline — from Linux fundamentals to Docker, Kubernetes, CI/CD, and cloud infrastructure with AI support.
            </p>

            {/* Tag chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "Linux & Git", color: "#4ade80", bg: "rgba(74,222,128,0.1)", border: "rgba(74,222,128,0.25)" },
                { label: "Docker & K8s", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)" },
                { label: "CI/CD & IaC", color: "#ea580c", bg: "rgba(234,88,12,0.1)", border: "rgba(234,88,12,0.25)" },
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
                  <button
                    onClick={() => setSelectedContent({ type: "note", item: note })}
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: activeConfig.color,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      letterSpacing: "0.03em",
                      marginTop: 4,
                      transition: "opacity 0.2s",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.7"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
                  >
                    Read More →
                  </button>
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
                const lvlColor = levelColors[video.level] ?? "#ea580c";
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

                    <button
                      onClick={() => setSelectedContent({ type: "video", item: video })}
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: lvlColor,
                        textDecoration: "none",
                        letterSpacing: "0.03em",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        marginTop: "auto",
                        transition: "opacity 0.2s",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.7"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
                    >
                      Watch on YouTube →
                    </button>
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

        {/* ── Embedded Content Modal (YouTube + Resources) ── */}
        {selectedContent && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(12, 10, 9, 0.95)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={() => setSelectedContent(null)}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "1100px",
                maxHeight: "90vh",
                backgroundColor: "#0c0a09",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.4)",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                style={{
                  padding: "20px 28px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#ea580c",
                      textTransform: "uppercase",
                    }}
                  >
                    {selectedContent.type === "video" ? "📺 VIDEO TUTORIAL" : "📄 RESOURCE NOTES"}
                  </div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#f1f5f9",
                      lineHeight: 1.3,
                    }}
                  >
                    {selectedContent.item.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedContent(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#64748b",
                    fontSize: 32,
                    cursor: "pointer",
                    lineHeight: 1,
                    padding: 0,
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                >
                  ×
                </button>
              </div>

              {/* Embedded Content Area */}
              <div
                style={{
                  flex: 1,
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "400px",
                }}
              >
                {selectedContent.type === "video" ? (
                  <iframe
                    src={`${getYouTubeEmbedUrl((selectedContent.item as Video).link)}?autoplay=0&rel=0`}
                    title={selectedContent.item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "16px",
                      flex: 1,
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <iframe
                    src={(selectedContent.item as Note).url}
                    title={selectedContent.item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "16px",
                      flex: 1,
                    }}
                  />
                )}
              </div>

              {/* Footer hint */}
              <div
                style={{
                  padding: "14px 28px",
                  fontSize: 12,
                  color: "#64748b",
                  textAlign: "center",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {selectedContent.type === "video"
                  ? "Embedded YouTube player • Fullscreen available"
                  : "Embedded resource viewer • Responsive & clean"}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}