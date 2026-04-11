import DocxCards from "./DocxCards";

const data = [
  {
    id: 1,
    title: "Python Notes from Beginning",
    description: "Beginner to Advanced Learning Docs which covers 70% syllabus",
    resourceLink: "https://automatetheboringstuff.com/",
    color: "#6366f1",
    icon: "📗",
  },
  {
    id: 2,
    title: "Python + DSA Notes",
    description: "DSA using Python with most important topics covered",
    resourceLink: "https://docs.google.com/document/d/1SCX-OL_nECEuv7fEnbAfxJWTnEX-36hgykKFiZx05aA/edit?tab=t.0",
    color: "#22d3ee",
    icon: "📘",
  },
  {
    id: 3,
    title: "Python + DSA Notes (Extended)",
    description: "DSA using Python with most important topics covered",
    resourceLink: "https://docs.google.com/document/d/13E51mYCcebv7mHu7Iaueycw888oMbkCp/edit",
    color: "#e879f9",
    icon: "📙",
  },
];

export default function ResourceContent() {
  return (
    <div style={{ marginTop: 56 }}>
      {/* Section header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ height: 1, width: 32, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#6366f1",
          }}>
            Study Material
          </span>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", margin: 0 }}>
          Notes & Documents
        </h2>
      </div>

      {/* Cards grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 18,
      }}>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 18,
              padding: "22px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
              overflow: "hidden",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = `${item.color}44`;
              el.style.transform = "translateY(-3px)";
              el.style.background = `${item.color}07`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255,255,255,0.08)";
              el.style.transform = "translateY(0)";
              el.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            {/* Top accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 1,
              background: `linear-gradient(90deg, ${item.color}, transparent)`,
              opacity: 0.45,
            }} />
            {/* Glow blob */}
            <div style={{
              position: "absolute", top: -28, right: -28,
              width: 90, height: 90, borderRadius: "50%",
              background: item.color, opacity: 0.07, filter: "blur(20px)",
              pointerEvents: "none",
            }} />

            {/* Icon */}
            <div style={{
              width: 44, height: 44, borderRadius: 12, marginBottom: 14,
              background: `${item.color}18`, border: `1.5px solid ${item.color}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, flexShrink: 0,
            }}>
              {item.icon}
            </div>

            <DocxCards title={item.title} description={item.description} resourceLink={item.resourceLink} />
          </div>
        ))}
      </div>
    </div>
  );
}