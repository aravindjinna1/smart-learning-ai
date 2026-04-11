interface ResourceCardsPy {
  title: string;
  description: string;
  resourceLink: string;
}

const DocsPy = ({ title, description, resourceLink }: ResourceCardsPy) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", margin: 0, lineHeight: 1.35 }}>
        {title}
      </h2>
      <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 }}>
        {description}
      </p>
      <a
        href={resourceLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: 12, fontWeight: 700,
          color: "#818cf8",
          textDecoration: "none",
          letterSpacing: "0.03em",
          display: "inline-flex", alignItems: "center", gap: 4,
          marginTop: 2,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a5b4fc"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#818cf8"; }}
      >
        Open Resource →
      </a>
    </div>
  );
};

export default DocsPy;