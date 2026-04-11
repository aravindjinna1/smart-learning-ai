import CourseCard from "./CourceCard";

const courses = [
  {
    title: "Data Structures & Algorithms",
    description: "Build strong problem-solving and coding skills",
    icon: "🧮",
    resources: ["🎥 Video", "📘 Docs", "🧠 AI"],
    available: true,
    slug: "dsa",
    color: "#6366f1",
  },
  {
    title: "Python for Problem Solving",
    description: "Learn Python basics for logic and interviews",
    icon: "🐍",
    resources: ["🎥 Video", "✍ Practice", "🧠 AI"],
    available: true,
    slug: "python",
    color: "#06b6d4",
  },
  {
    title: "Web Development Basics",
    description: "HTML, CSS, JavaScript fundamentals",
    icon: "🌐",
    resources: ["🎥 Video", "📘 Docs", "✍ Tasks"],
    available: true,
    slug: "web-dev",
    color: "#f59e0b",
  },
  {
    title: "Devops Fundamentals",
    description: "Learn CI/CD, Docker, and cloud basics",
    icon: "⚙️",
    resources: ["🎥 Video", "📘 Docs", "🧠 AI"],
    available: true,
    slug: "devops",
    color: "#38bdf8",
  },
  {
    title: "cloud computing",
    description: "AWS, Azure, GCP essentials for beginners",
    icon: "☁️",
    resources: ["🎥 Video", "📘 Docs"],
    available: true,
    slug: "cloud",
    color: "#4ade80",
  },
    {
    title: "Ai and Machine Learning",
    description: "Intro to AI concepts, tools, and applications",
    icon: "🤖",
    resources: ["🎥 Video", "📘 Docs"],
    available: true,
    slug: "ai-ml",
    color: "#4ade80",
  },
  {
    title: "Data Science Essentials",
    description: "Data analysis, visualization, and basic statistics",
    icon: "📊",
    resources: ["🎥 Video", "📘 Docs"],
    available: true,
    slug: "data-science",
    color: "#4ade80",
  },
  {
    title: "Interview Preparation",
    description: "Technical + HR interview preparation",
    icon: "🎯",
    resources: ["✍ Questions", "🧠 AI"],
    available: false,
    slug: "interview",
    color: "#f472b6",
  },
];

export default function CoursesPage() {
  return (
    <div className="relative min-h-screen bg-[#090721] text-white overflow-hidden">

      {/* Tech-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl z-0"
        style={{
          background:
            "radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 px-8 py-12 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-400 text-lg">⚡</span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
              Learnexa
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Courses
            </span>
          </h1>
          <p className="text-gray-400 mt-3 text-base max-w-xl">
            Structured courses curated with the best free learning resources — powered by AI.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.slug} {...course} />
          ))}
        </div>

      </div>
    </div>
  );
}