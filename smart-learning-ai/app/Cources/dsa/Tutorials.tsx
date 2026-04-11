import Link from "next/link";

import appnaCollage from "../../../assets/apacollage.png";
import striver from "../../../assets/striver.png";
import kunal from "../../../assets/kunalKushvah.png";

export default function Tutorials() {
  const tutorialsData = [
    {
      id: 1,
      title: "TUF A to Z DSA Playlist",
      description: "A comprehensive beginner to advanced playlist",
      link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
      tag: "All Levels",
      color: "#6366f1",
      duration: "100+ hrs",
    },
    {
      id: 2,
      title: "Java + DSA + Interview Preparation",
      description: "Data structures with Java",
      link: "https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=1",
      tag: "Java",
      color: "#22d3ee",
      duration: "80+ hrs",
    },
    {
      id: 3,
      title: "Complete C++ DSA Course",
      description: "Data structures and algorithms in C++",
      link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
      tag: "C++",
      color: "#e879f9",
      duration: "60+ hrs",
    },
  ];

  return (
    <div style={{ marginTop: 48 }}>
      {/* Section header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ height: 1, width: 32, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#6366f1",
          }}>
            Video Playlists
          </span>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", margin: 0 }}>
          Tutorials & Playlists
        </h2>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 18,
      }}>
        {tutorialsData.map((item) => (
          <div
            key={item.id}
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              transition: "all 0.25s",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = `${item.color}44`;
              el.style.transform = "translateY(-3px)";
              el.style.background = `${item.color}08`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255,255,255,0.07)";
              el.style.transform = "translateY(0)";
              el.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            {/* Top accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 1,
              background: `linear-gradient(90deg, ${item.color}, transparent)`,
              opacity: 0.4,
            }} />

            {/* Play + duration row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, color: "#fff", fontWeight: 700,
              }}>
                ▶
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  background: `${item.color}18`, border: `1px solid ${item.color}30`,
                  color: item.color, padding: "3px 10px", borderRadius: 999,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}>
                  {item.tag}
                </span>
                <span style={{
                  fontSize: 10, fontWeight: 600,
                  color: "#475569", fontFamily: "monospace", letterSpacing: "0.04em",
                }}>
                  {item.duration}
                </span>
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 15, margin: "0 0 5px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: 13, margin: 0, lineHeight: 1.55 }}>
                {item.description}
              </p>
            </div>

            {/* Link */}
            <Link
              href={item.link}
              target="_blank"
              style={{
                fontSize: 12, fontWeight: 700, color: item.color,
                textDecoration: "none", letterSpacing: "0.03em",
                display: "inline-flex", alignItems: "center", gap: 4,
                marginTop: "auto", transition: "gap 0.2s",
              }}
            >
              Open Resource →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}