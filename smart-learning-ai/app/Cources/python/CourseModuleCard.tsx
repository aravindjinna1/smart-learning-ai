interface CourseModuleCardProps {
  title: string;
  description: string;
  youtubeUrl: string;
  resourceUrl?: string;
  color?: string;
  icon?: string;
}

export default function CourseModuleCard({
  title,
  description,
  youtubeUrl,
  resourceUrl,
  color = "#6366f1",
  icon = "▶",
}: CourseModuleCardProps) {
  return (
    <div
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 18,
        padding: "22px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "all 0.25s",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = `${color}44`;
        el.style.transform = "translateY(-3px)";
        el.style.background = `${color}07`;
        el.style.boxShadow = `0 16px 48px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.transform = "translateY(0)";
        el.style.background = "rgba(255,255,255,0.04)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, ${color}, transparent)`,
        opacity: 0.45,
      }} />

      {/* Glow */}
      <div style={{
        position: "absolute", top: -28, right: -28,
        width: 90, height: 90, borderRadius: "50%",
        background: color, opacity: 0.07, filter: "blur(20px)",
        pointerEvents: "none",
      }} />

      {/* Icon badge */}
      <div style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
        background: `${color}18`, border: `1.5px solid ${color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 15, color: color, fontWeight: 800,
      }}>
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15, margin: "0 0 6px", lineHeight: 1.3 }}>
          {title}
        </h3>
        <p style={{ color: "#64748b", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
          {description}
        </p>
      </div>

      {/* Links */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 4 }}>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12, fontWeight: 700, color: color,
            textDecoration: "none", letterSpacing: "0.03em",
            display: "inline-flex", alignItems: "center", gap: 5,
            background: `${color}12`, border: `1px solid ${color}28`,
            padding: "5px 12px", borderRadius: 999,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${color}22`; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${color}12`; }}
        >
          🎥 Watch Playlist →
        </a>

        {resourceUrl && (
          <a
            href={resourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12, fontWeight: 700, color: "#64748b",
              textDecoration: "none", letterSpacing: "0.03em",
              display: "inline-flex", alignItems: "center", gap: 5,
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              padding: "5px 12px", borderRadius: 999,
              transition: "all 0.2s",
            }}
          >
            📘 Notes →
          </a>
        )}
      </div>
    </div>
  );
}