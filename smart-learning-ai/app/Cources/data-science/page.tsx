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
  { key: "advanced", label: "Advanced", color: "#2dd4bf", icon: "⚡" },
  { key: "interview", label: "Interview", color: "#e879f9", icon: "🎯" },
];

export default function DataScienceCourse() {
  const [activeTab, setActiveTab] = useState<
    "beginner" | "advanced" | "interview"
  >("beginner");

  const notesData: Record<string, Note[]> = {
    beginner: [
      {
        title: "Data Science for Beginners",
        description:
          "What is Data Science, the workflow, Python basics, and essential libraries — NumPy, Pandas, Matplotlib.",
        url: "https://www.geeksforgeeks.org/data-science/data-science-for-beginners/",
      },
      {
        title: "SQL for Data Analysis",
        description:
          "Write queries, filter, join, aggregate, and extract insights from relational databases.",
        url: "https://www.w3schools.com/sql/",
      },
      {
        title: "Statistics & Probability Fundamentals",
        description:
          "Mean, median, distributions, hypothesis testing, and correlation — the math backbone of data science.",
        url: "https://www.khanacademy.org/math/statistics-probability",
      },
    ],
    advanced: [
      {
        title: "Pandas & Data Wrangling",
        description:
          "DataFrame operations, data cleaning, merging, pivoting, and EDA with real-world datasets.",
        url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/",
      },
      {
        title: "Data Visualization — Matplotlib, Seaborn & Plotly",
        description:
          "Charts, heatmaps, dashboards, and storytelling with data using Python's top viz libraries.",
        url: "https://seaborn.pydata.org/tutorial.html",
      },
      {
        title: "Scikit-learn & Feature Engineering",
        description:
          "Build, train, evaluate, and tune ML models — regression, classification, clustering, and pipelines.",
        url: "https://scikit-learn.org/stable/getting_started.html",
      },
    ],
    interview: [
      {
        title: "Data Science Interview Questions",
        description:
          "Top stats, SQL, Python, ML, and case study interview Q&A for data scientist roles.",
        url: "https://www.geeksforgeeks.org/data-science-interview-questions-and-answers/",
      },
      {
        title: "Data Science Roadmap 2026",
        description:
          "Step-by-step guide from Python basics to advanced analytics, ML, and portfolio building.",
        url: "https://roadmap.sh/ai-data-scientist",
      },
      {
        title: "Kaggle Learn — Hands-On Practice",
        description:
          "Free micro-courses: Pandas, Data Cleaning, Data Visualization, SQL, and ML — with notebooks.",
        url: "https://www.kaggle.com/learn",
      },
    ],
  };

  const videos: Video[] = [
    {
      title: "Data Science Full Course for Beginners – freeCodeCamp",
      level: "Beginner",
      link: "https://www.youtube.com/watch?v=ua-CiDNNj30",
    },
    {
      title: "Data Analyst Bootcamp – SQL, Excel, Tableau, Power BI & Python",
      level: "Beginner",
      link: "https://www.youtube.com/watch?v=PSNXoAs2FtQ",
    },
    {
      title: "Data Analysis with Python – NumPy, Pandas & Matplotlib",
      level: "Intermediate",
      link: "https://www.youtube.com/watch?v=r-uOLxNrNk8",
    },
    {
      title: "Statistics for Data Science – Full Course",
      level: "Intermediate",
      link: "https://www.youtube.com/watch?v=xxpc-HPKN28",
    },
    {
      title: "Scikit-learn Full Course – ML Pipelines & Feature Engineering",
      level: "Advanced",
      link: "https://www.youtube.com/watch?v=0B5eIE_1vpU",
    },
    {
      title: "End-to-End Data Science Project – EDA to Deployment",
      level: "Advanced",
      link: "https://www.youtube.com/watch?v=fiz1ORTn4pQ",
    },
  ];

  const activeConfig = tabConfig.find((t) => t.key === activeTab)!;

  return (
    <>
      <style>{`
        .ds-root * { box-sizing: border-box; }

        .dot-bg {
          background-image: radial-gradient(rgba(20,184,166,0.16) 1px, transparent 1px);
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
          .ds-inner { padding: 32px 16px !important; }
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
          box-shadow: 0 18px 48px rgba(0,0,0,0.32);
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
          border-color: rgba(20,184,166,0.3);
          background: rgba(20,184,166,0.05);
          box-shadow: 0 18px 48px rgba(0,0,0,0.32);
        }

        .ai-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #0d9488, #14b8a6);
          color: #fff;
          padding: 13px 22px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.03em;
          box-shadow: 0 8px 32px rgba(20,184,166,0.45);
          transition: all 0.25s;
          z-index: 100;
        }
        .ai-float:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(20,184,166,0.65);
        }

        .eyebrow {
          display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
        }
        .eyebrow-line {
          height: 1px; width: 32px;
          background: linear-gradient(90deg, #14b8a6, transparent);
        }
        .eyebrow-text {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: #14b8a6;
        }
      `}</style>

      <main
        className="ds-root dot-bg"
        style={{
          minHeight: "100vh",
          background: "#050f0e",
          color: "#f1f5f9",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orb 1 — teal */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -110,
            right: -100,
            width: 530,
            height: 530,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #14b8a6 0%, #0f766e 50%, transparent 70%)",
            opacity: 0.18,
            filter: "blur(72px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        {/* Orb 2 — emerald */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -85,
            left: -85,
            width: 430,
            height: 430,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #10b981 0%, #065f46 50%, transparent 70%)",
            opacity: 0.12,
            filter: "blur(64px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        {/* Orb 3 — cyan accent */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "42%",
            left: "25%",
            width: 310,
            height: 310,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #22d3ee 0%, #0891b2 50%, transparent 70%)",
            opacity: 0.07,
            filter: "blur(56px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          className="ds-inner"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1100,
            margin: "0 auto",
            padding: "56px 32px 120px",
          }}
        >
          {/* ── Hero Header ── */}
          <section style={{ marginBottom: 56 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(20,184,166,0.12)",
                  border: "1px solid rgba(20,184,166,0.28)",
                  color: "#2dd4bf",
                  padding: "4px 12px",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#14b8a6",
                    boxShadow: "0 0 8px #14b8a6",
                    display: "inline-block",
                  }}
                />
                Learnexa
              </span>
            </div>

            <h1
              className="hero-title"
              style={{
                fontSize: 42,
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                margin: "0 0 14px",
                color: "#f1f5f9",
              }}
            >
              Data{" "}
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(90deg, #2dd4bf, #34d399)",
                  backgroundClip: "text",
                }}
              >
                Science
              </span>
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 540,
                margin: "0 0 20px",
              }}
            >
              From Python and SQL to EDA, visualization, and machine learning —
              your complete Data Science roadmap with curated docs, hands-on
              notebooks, and interview prep.
            </p>

            {/* Tag chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                {
                  label: "Python & SQL",
                  color: "#4ade80",
                  bg: "rgba(74,222,128,0.1)",
                  border: "rgba(74,222,128,0.25)",
                },
                {
                  label: "Pandas & NumPy",
                  color: "#2dd4bf",
                  bg: "rgba(45,212,191,0.1)",
                  border: "rgba(45,212,191,0.25)",
                },
                {
                  label: "Visualization & EDA",
                  color: "#34d399",
                  bg: "rgba(52,211,153,0.1)",
                  border: "rgba(52,211,153,0.25)",
                },
                {
                  label: "Interview Ready",
                  color: "#e879f9",
                  bg: "rgba(232,121,249,0.1)",
                  border: "rgba(232,121,249,0.25)",
                },
              ].map((t) => (
                <span
                  key={t.label}
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: t.bg,
                    border: `1px solid ${t.border}`,
                    color: t.color,
                  }}
                >
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
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#f1f5f9",
                margin: "0 0 22px",
              }}
            >
              Notes & Resources
            </h2>

            {/* Tab Row */}
            <div
              className="tab-row"
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 24,
                flexWrap: "wrap",
              }}
            >
              {tabConfig.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    className="tab-btn"
                    onClick={() =>
                      setActiveTab(
                        tab.key as "beginner" | "advanced" | "interview"
                      )
                    }
                    style={
                      isActive
                        ? {
                            background: `${tab.color}18`,
                            borderColor: `${tab.color}40`,
                            color: tab.color,
                          }
                        : {}
                    }
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                    {isActive && (
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: tab.color,
                          boxShadow: `0 0 6px ${tab.color}`,
                          display: "inline-block",
                          marginLeft: 2,
                        }}
                      />
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
                  {/* Top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: `linear-gradient(90deg, ${activeConfig.color}, transparent)`,
                      opacity: 0.55,
                    }}
                  />
                  {/* Corner glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: -24,
                      right: -24,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: activeConfig.color,
                      opacity: 0.08,
                      filter: "blur(18px)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Icon badge */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `${activeConfig.color}18`,
                      border: `1.5px solid ${activeConfig.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      flexShrink: 0,
                    }}
                  >
                    {activeConfig.icon}
                  </div>

                  <h3
                    style={{
                      color: "#f1f5f9",
                      fontWeight: 700,
                      fontSize: 14,
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {note.title}
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      fontSize: 13,
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {note.description}
                  </p>
                  <a
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity =
                        "0.7";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity =
                        "1";
                    }}
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
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#f1f5f9",
                margin: "0 0 22px",
              }}
            >
              Watch & Learn
            </h2>

            <div className="videos-grid">
              {videos.map((video) => {
                const lvlColor = levelColors[video.level] ?? "#14b8a6";
                return (
                  <div key={video.title} className="video-card">
                    {/* Top accent */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        background: `linear-gradient(90deg, ${lvlColor}, transparent)`,
                        opacity: 0.45,
                      }}
                    />
                    {/* Corner glow */}
                    <div
                      style={{
                        position: "absolute",
                        top: -24,
                        right: -24,
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: lvlColor,
                        opacity: 0.08,
                        filter: "blur(18px)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Play + level row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${lvlColor}, ${lvlColor}88)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          color: "#000",
                          fontWeight: 800,
                        }}
                      >
                        ▶
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          background: `${lvlColor}18`,
                          border: `1px solid ${lvlColor}30`,
                          color: lvlColor,
                          padding: "3px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {video.level}
                      </span>
                    </div>

                    <h3
                      style={{
                        color: "#e2e8f0",
                        fontWeight: 700,
                        fontSize: 14,
                        margin: 0,
                        lineHeight: 1.35,
                      }}
                    >
                      {video.title}
                    </h3>

                    <Link
                      href={video.link}
                      target="_blank"
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
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.opacity =
                          "0.7";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.opacity =
                          "1";
                      }}
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