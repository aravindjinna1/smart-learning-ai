"use client";

import { useState } from "react";
import Link from "next/link";

type Note = {
  title: string;
  description: string;
  url:string,
};

type Video = {
  title: string;
  level: string;
  link: string;
};

export default function WebDevelopmentCourse() {
  const [activeTab, setActiveTab] = useState<
    "beginner" | "structured" | "interview"
  >("beginner");

  const notesData: Record<string, Note[]> = {
    beginner: [
      {
        title: "How the Web Works",
        description: "Understanding client, server, and HTTP basics.",
        url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
      },
      {
        title: "HTML Basics",
        description: "Tags, structure, forms, semantic elements.",
         url:"https://www.w3schools.com/html/html_basic.asp",
      },
      {
        title: "CSS Fundamentals",
        description: "Selectors, Flexbox, Grid, responsiveness.",
         url:"https://www.w3schools.com/css/css_intro.asp",
      },
    ],
    structured: [
      {
        title: "JavaScript Deep Dive",
        description: "Closures, promises, async/await, event loop.",
         url:"https://gist.github.com/faressoft/1977d7b04430bae78cd1273fb5176898",
      },
      {
        title: "React",
        description: "Components, hooks, SSR, routing.",
         url:"https://www.w3schools.com/REACT/DEFAULT.ASP",
      },
      {
        title: "Node + Express",
        description: "REST APIs, middleware, authentication.",
         url:"https://www.w3schools.com/nodejs/nodejs_express.asp"
      },
    ],
    interview: [
      {
        title: "Frontend Interview Questions",
        description: "Common React & JS questions.",
         url:"Frontend Interview Questions"
      },
      {
        title: "Backend Interview Questions",
        description: "Node, JWT, database concepts.",
         url:"https://roadmap.sh/questions/backend"
      },
      {
        title: "Web Dev Cheat Sheet",
        description: "Quick revision of key concepts.",
         url:"https://github.com/VedantKhairnar/Cheat-Sheets/blob/master/Web%20Development/cheatsheets.md"
      },
    ],
  };

  const videos: Video[] = [
    {
      title: "Full HTML & CSS Course",
      level: "Beginner",
      link: "https://www.youtube.com/watch?v=G3e-cpL7ofchttps://www.youtube.com/",
    },
    {
      title: "JavaScript Complete Guide",
      level: "Intermediate",
      link: "https://www.youtube.com/watch?v=EerdGm-ehJQ",
    },
    {
      title: "React.js Full Course",
      level: "Advanced",
      link: "https://www.youtube.com/watch?v=TtPXvEcE11E",
    },
    {
      title: "Node.js and Express.js Full Course",
      level: "Advanced",
      link: "https://www.youtube.com/watch?v=MIJt9H69QVc&t=36592s",
    },
       {
      title: "Java Full stack Course",
      level: "Advanced",
      link: "https://www.youtube.com/watch?v=4XTsAAHW_Tc",
    },
      {
      title: "Python Full stack Course",
      level: "Advanced",
      link: "https://www.youtube.com/watch?v=RT6IHsuriMI&list=PLryYKs02mpdIMPfxxN29PjIFktQMuiHUm",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Web Development Course</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Complete roadmap from beginner to advanced with notes, videos, and AI support.
          </p>
        </div>

        {/* Notes Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Notes</h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            {["beginner", "structured", "interview"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab as "beginner" | "structured" | "interview")
                }
                className={`px-4 py-2 rounded-lg capitalize ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Notes Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {notesData[activeTab].map((note) => (
              <div
                key={note.title}
                className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{note.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {note.description}
                </p>
                <a href={note.url} className="mt-4 text-blue-600 hover:underline text-sm">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Video Tutorials</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.title}
                className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{video.title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Level: {video.level}
                </p>

                <Link
                  href={video.link}
                  target="_blank"
                  className="inline-block mt-4 text-blue-600 hover:underline text-sm"
                >
                  Watch on YouTube →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Ask AI Floating Button */}
      <Link href="/Ask-ai" className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition">
        Ask AI 🤖
      </Link>
    </main>
  );
}