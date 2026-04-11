import ResourceCard from "./DocxCards";

const resources = [
  {
    title: "DSA Notes",
    description: "Quick reference for common data structures and algorithms",
    icon: "📘",
    color: "#6366f1",
    links: [
      { label: "Notes Part 1", url: "https://drive.google.com/file/d/0B48k2jhdQ5P2aVlmMFB1UUJLczA/edit" },
      { label: "Notes Part 2", url: "https://drive.google.com/file/d/1O7YbJgaadUTXryo9Yeuwl7RMyf7XeEZl/view" },
      { label: "Notes Part 3", url: "https://drive.google.com/file/d/17qRyJkDNQTsmDwQ0yzo33gj7YMPOXys-/view" },
      { label: "Notes Part 4", url: "https://drive.google.com/file/d/1YkD7hxvtzb7-IOU7xo4o7LSZyGYjNDJi/view" },
    ],
  },
  {
    title: "DSA Notes 2",
    description: "Topic wise explanation and solutions",
    icon: "🐍",
    color: "#22d3ee",
    links: [
      { label: "Open Sheet", url: "https://www.slideshare.net/slideshow/data-structure-notes-unit-1docx/262673533" },
    ],
  },
  {
    title: "DSA Practice Sheet",
    description: "DSA Sheet — Most Important Interview Questions",
    icon: "🌐",
    color: "#4ade80",
    links: [
      { label: "Open Sheet", url: "https://dsa.apnacollege.in/" },
    ],
  },
  {
    title: "TUF DSA Sheet",
    description: "Important and mostly asked DSA Questions from MNC's",
    icon: "⚛️",
    color: "#f59e0b",
    links: [
      { label: "Open Resource", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" },
    ],
  },
  {
    title: "Cheat Sheet",
    description: "All in one resource sheet",
    icon: "📄",
    color: "#e879f9",
    links: [
      { label: "Open Resource", url: "https://docs.google.com/spreadsheets/d/1C6A9y9b4TcKerBEnfs7mCChVph3xAlXa/edit?gid=1970548012#gid=1970548012" },
    ],
  },
  {
    title: "Interview Preparation Guide",
    description: "HR + technical interview preparation material",
    icon: "🎯",
    color: "#fb923c",
    links: [
      { label: "Open Resource", url: "https://drive.google.com/file/d/1vIxQDHMEm1FjxCuZo8FRFqsPvDBB6bao/view?usp=sharing" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Section header */}
      <div style={{ marginBottom: 28 }}>
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
          Learning Resources
        </h2>
        <p style={{ color: "#64748b", marginTop: 6, fontSize: 14, margin: "6px 0 0" }}>
          Curated documents and notes to support your learning journey
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 18,
      }}>
        {resources.map((resource) => (
          <ResourceCard key={resource.title} {...resource} />
        ))}
      </div>
    </div>
  );
}