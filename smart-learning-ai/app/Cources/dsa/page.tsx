"use client"

import Link from "next/link";
import Image from "next/image";
import DocxContent from "./DocxContent";
import Tutorials from "./Tutorials";

export default function DSACoursePage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] px-8 py-12 text-white">
      {/* Course Overview */}
      <section className="grid grid-cols-2 gap-20">
        <section className="mb-10">
          <h1 className="text-3xl font-bold">Data Structures & Algorithms</h1>
          <p className="text-gray-400 mt-2">
            Master problem-solving skills for coding interviews
          </p>

          <ul className="list-disc list-inside mt-4 text-gray-300">
            <li>Understand core DSA concepts</li>
            <li>Improve logical thinking</li>
            <li>Prepare for technical interviews</li>
          </ul>
        </section>

        {/* AI Help */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-400 mb-4">
            Ask AI to explain concepts or guide you through problems.
          </p>

          <Link
            href={"/Ask-ai"}
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded-lg"
          >
            Ask AI
          </Link>
        </section>
      </section>

      {/* Modules */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Course Modules</h2>

        <div className="space-y-4">
          {[
            "Arrays & Strings",
            "Recursion & Time Complexity",
            "Linked Lists",
            "Stacks & Queues",
            "Trees & Graphs",
            "Sorting & Searching",
          ].map((module) => (
            <div
              key={module}
              className="bg-[#111827] border border-gray-800 rounded-xl p-5"
            >
              <h3 className="font-medium">{module}</h3>

              <div className="flex gap-4 text-sm text-gray-400 mt-3">
                <span>🎥 Videos</span>
                <span>📘 Docs</span>
                <span>✍ Practice</span>
                <span>🧠 Ask AI</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center flex flex-col gap-10">

        {/* <div className="bg-white rounded-[10px] max-w-60 text-black text-center">
          <h2>DSA </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex
            nesciunt temporibus vitae accusamus? Fugit doloremque veritatis
            ipsam ea itaque!
          </p>
          <a
            href={
              "https://drive.google.com/file/d/0B48k2jhdQ5P2aVlmMFB1UUJLczA/edit?resourcekey=0-7DD5ct5tS4_z2bJ-1HZUZQ"
            }
            target="blank"
          >
            Read
          </a>
        </div> */}

      

      
      </section>
     <section className="mt-12">
  <DocxContent />
</section>

<section>
  <Tutorials />
</section>




    </div>
  );
}
