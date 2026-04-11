"use client"

const Footer = () => {
  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>
      {/* Top separator line */}
      <div style={{
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(34,211,238,0.3), transparent)",
      }} />

      <div style={{
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        padding: "48px 32px 32px",
        position: "relative",
      }}>
        {/* Subtle glow inside footer */}
        <div aria-hidden style={{
          position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
          width: 500, height: 200, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.08), transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

          {/* Top row */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between",
            gap: 24, marginBottom: 32,
          }}>
            {/* Brand */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#6366f1", boxShadow: "0 0 10px #6366f1",
                  display: "inline-block",
                }} />
                <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "0.06em", textTransform: "uppercase", color: "#f1f5f9" }}>
                  Learnexa
                </span>
              </div>
              <p style={{ color: "#475569", fontSize: 12, margin: 0, maxWidth: 240, lineHeight: 1.6 }}>
                AI-powered learning paths built for the next generation of developers.
              </p>
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[
                { label: "Courses", href: "/Cources" },
                { label: "Resume Builder", href: "/resume" },
                { label: "Ask AI", href: "/Ask-ai" },
                { label: "Login", href: "/Auth/Login" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: 13, fontWeight: 600, color: "#64748b",
                    textDecoration: "none", letterSpacing: "0.03em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a5b4fc"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#64748b"; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 24 }} />

          {/* Bottom row */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: 12,
          }}>
            <p style={{ color: "#334155", fontSize: 12, margin: 0, fontFamily: "monospace" }}>
              © 2026 Learnexa. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", display: "inline-block" }} />
              <span style={{ fontSize: 11, color: "#334155", fontFamily: "monospace", letterSpacing: "0.04em" }}>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;