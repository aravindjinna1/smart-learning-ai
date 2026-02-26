import CourseModuleCard from "./CourseModuleCard";
import  Link from 'next/link'
import DocsContent from './DocsContent'

const pythonModules = [
  {
    title: "Introduction to Python",
    description: "Python basics, syntax, variables, and data types",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
    resourceUrl: "https://drive.google.com/your-python-notes",
  },
  {
    title: "Control Flow & Functions",
    description: "Conditions, loops, functions, and best practices",
    youtubeUrl: "https://www.youtube.com/watch?v=ERCMXc8x7mc",
  },
  {
    title: "Data Structures in Python",
    description: "Lists, tuples, sets, dictionaries, and use cases",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLhR2IpV1b2FwWwviBHRrR118YAaSlyhTU",
  },
  {
    title: "Object-Oriented Programming",
    description: "Classes, objects, inheritance, and polymorphism",
    youtubeUrl: "https://www.youtube.com/watch?v=eWRfhZUzrAc",
  },
  {
    title: "File Handling & Exception Handling",
    description: "Working with files and handling runtime errors",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
  }, 

  {
    title: "Python for Interviews",
    description: "Common interview questions and coding patterns",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLI4OVrCFuY5725OhoRi-G2YwnjKXh7v0F",
  }, 
];

export default function PythonCoursePage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] px-8 py-12">

      {/* Course Header */}
      <div className="max-w-4xl mb-12">
        <h1 className="text-3xl font-bold text-white">
          Python Programming
        </h1>

        <p className="text-gray-400 mt-3">
          Learn Python from fundamentals to interview-level problem solving
          with curated videos, notes, and AI assistance.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-gray-300">
          <li>✔ Beginner to intermediate Python concepts</li>
          <li>✔ Interview-focused preparation</li>
          <li>✔ AI support for doubts and explanations</li>
        </ul>
      </div>

      {/* Modules Section */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {pythonModules.map((module) => (
          <CourseModuleCard
            key={module.title}
            {...module}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 p-10  bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Stuck on a concept?
        </h2>
        <p className="text-gray-200 mt-2">
          Ask Smart Learning AI for instant explanations and examples.
        </p>
        
        <div className="mt-5">
        <Link href="/Ask-ai" className=" bg-white text-black px-6 py-3 rounded-xl font-medium">
          Ask AI
        </Link>
        </div>
      </div>

      <div>
        <DocsContent />
      </div>

    </div>
  );
}