import CourseCard from "./CourceCard";

const courses = [
  {
    title: "Data Structures & Algorithms",
    description: "Build strong problem-solving and coding skills",
    icon: "🧮",
    resources: ["🎥 Video", "📘 Docs", "🧠 AI"],
    available: true,
    slug: "dsa",
  },
  {
    title: "Python for Problem Solving",
    description: "Learn Python basics for logic and interviews",
    icon: "🐍",
    resources: ["🎥 Video", "✍ Practice", "🧠 AI"],
    available: true,
    slug: "python",
  },
  {
    title: "Web Development Basics",
    description: "HTML, CSS, JavaScript fundamentals",
    icon: "🌐",
    resources: ["🎥 Video", "📘 Docs", "✍ Tasks"],
    available: true,
    slug: "web-dev",
  },
  {
    title: "React Fundamentals",
    description: "Build modern frontend applications",
    icon: "⚛️",
    resources: ["🎥 Video", "📘 Docs", "🧠 AI"],
    available: false,
    slug: "react",
  },
  {
    title: "Backend with Node.js",
    description: "Learn APIs, servers, and backend logic",
    icon: "🖥️",
    resources: ["🎥 Video", "📘 Docs"],
    available: false,
    slug: "node",
  },
  {
    title: "Interview Preparation",
    description: "Technical + HR interview preparation",
    icon: "🎯",
    resources: ["✍ Questions", "🧠 AI"],
    available: false,
    slug: "interview",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] px-8 py-12">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">
          Courses
        </h1>
        <p className="text-gray-400 mt-2">
          Structured courses curated with the best free learning resources
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.slug} {...course} />
        ))}
      </div>

    </div>
  );
}
