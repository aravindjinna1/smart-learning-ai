import Link from "next/link";

interface ResourceLink {
  label: string;
  url: string;
}

interface ResourceCardProps {
  title: string;
  description: string;
  icon: string;
  links: ResourceLink[];
  color?: string;
}

export default function ResourceCard({
  title,
  description,
  icon,
  links,
  color = "#6366f1",
}: ResourceCardProps) {
  return (
    <div
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        transition: "all 0.3s",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}55`;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.35)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, ${color}, transparent)`,
        opacity: 0.4,
      }} />

      {/* Glow blob */}
      <div style={{
        position: "absolute", top: -30, right: -30,
        width: 100, height: 100, borderRadius: "50%",
        background: color, opacity: 0.08, filter: "blur(24px)",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: `${color}18`, border: `1.5px solid ${color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22,
      }}>
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15, margin: "0 0 6px" }}>
          {title}
        </h3>
        <p style={{ color: "#64748b", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
          {description}
        </p>
      </div>

      {/* Links */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: color,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}