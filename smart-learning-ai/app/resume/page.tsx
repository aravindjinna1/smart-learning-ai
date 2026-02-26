"use client";

import Image from "next/image";
import Link from "next/link";

type Template = {
  title: string;
  image: string;
  link: string;
};

type Tutorial = {
  title: string;
  link: string;
};

export default function ResumeBuilderPage() {
  const templates: Template[] = [
    {
      title: "Modern LaTeX Resume",
      image: "https://via.placeholder.com/400x500",
      link: "https://www.overleaf.com/project/697ee6c237b99ad96b8fdd40",
    },
    {
      title: "ATS Friendly Professional Resume",
      image: "https://via.placeholder.com/400x500",
      link: "https://www.overleaf.com/latex/templates",
    },
    {
      title: "Minimal One Page Resume",
      image: "https://via.placeholder.com/400x500",
      link: "https://www.overleaf.com/latex/templates",
    },
  ];

  const tutorials: Tutorial[] = [
    {
      title: "How to Build an ATS Friendly Resume",
      link: "https://www.youtube.com/watch?v=XJ7bYdjKDcA",
    },
    {
      title: "Resume Mistakes to Avoid",
      link: "https://www.youtube.com/watch?v=y8YH0Qbu5h4",
    },
    {
      title: "How to Write Strong Project Descriptions",
      link: "https://www.youtube.com/watch?v=-2PHgXuJybA",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white p-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <section>
          <h1 className="text-3xl font-bold">Resume Builder</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Build a professional, ATS-friendly resume with templates, guides, and AI support.
          </p>
        </section>

        {/* Resume Templates */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Resume Templates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.title}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 hover:shadow-lg transition"
              >
                {/* <Image
                  src={template.image}
                  alt={template.title}
                  width={400}
                  height={500}
                  className="rounded-lg"
                /> */}
                <h3 className="mt-4 font-semibold text-lg">
                  {template.title}
                </h3>
                <Link
                  href={template.link}
                  target="_blank"
                  className="inline-block mt-3 text-blue-600 hover:underline"
                >
                  Open in Overleaf →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Resume Guide */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Resume Writing Guide</h2>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-4">
            <h3 className="font-semibold text-lg">Key Components of a Strong Resume:</h3>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Header:</strong> Name, phone, email, LinkedIn, GitHub</li>
              <li><strong>Summary:</strong> 2-3 lines about your skills and goals</li>
              <li><strong>Skills:</strong> Programming languages, frameworks, tools</li>
              <li><strong>Projects:</strong> Strong description with impact & tech stack</li>
              <li><strong>Education:</strong> Degree, college, CGPA</li>
              <li><strong>Experience:</strong> Internships, part-time roles</li>
              <li><strong>Achievements:</strong> Certifications, contests, hackathons</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">Content Tips:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Keep resume to 1 page</li>
              <li>Use bullet points, not paragraphs</li>
              <li>Use action verbs (Built, Developed, Designed)</li>
              <li>Quantify results (Improved performance by 30%)</li>
              <li>Avoid unnecessary personal details</li>
            </ul>
          </div>
        </section>

        {/* AI Resume Support */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">AI Resume Builder</h2>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Use AI to generate resume summaries, improve bullet points, optimize for ATS, and tailor resume for specific job roles.
            </p>

            <Link href="/Ask-ai" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
              Ask AI to Improve Resume 🤖
            </Link>
          </div>
        </section>

        {/* Resume Tutorials */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Resume Tutorials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.title}
                className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-semibold">{tutorial.title}</h3>
                <Link
                  href={tutorial.link}
                  target="_blank"
                  className="inline-block mt-3 text-blue-600 hover:underline"
                >
                  Watch Tutorial →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Best Resume Platforms */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Best Resume Building Platforms</h2>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-2 text-gray-700 dark:text-gray-300">
            <p>• Overleaf (Best for LaTeX professional resumes)</p>
            <p>• Canva (Modern design resumes)</p>
            <p>• Novoresume (ATS-friendly builder)</p>
            <p>• Resume.io</p>
            <p>• Zety</p>
          </div>
        </section>

      </div>
    </main>
  );
}