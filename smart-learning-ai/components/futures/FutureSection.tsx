// components/FeaturesSection.tsx
import FeatureCard from "./FueturesCard";
import {
  BookOpen,
  Map,
  Brain,
  Bot,
  FileText,
  BarChart3,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="text-white bg-[#0B0F19] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold ">
            What This Platform Offers
          </h2>
          <p className="mt-4 text-gray-300">
            Everything you need to learn smarter, prepare better, and grow faster.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Learning Resources & Courses"
            description="Curated courses, study materials, and PDFs designed for structured learning."
            icon={<BookOpen size={22} />}
          />

          <FeatureCard
            title="Technology Roadmaps"
            description="Step-by-step learning paths to master new and trending technologies."
            icon={<Map size={22} />}
          />

          <FeatureCard
            title="Practice & Skill Assessment"
            description="Practice questions and assessments to strengthen problem-solving skills."
            icon={<Brain size={22} />}
          />

          <FeatureCard
            title="AI Learning Assistant"
            description="AI-powered help for doubts, explanations, and smart learning recommendations."
            icon={<Bot size={22} />}
          />

          <FeatureCard
            title="Resume & Job Preparation"
            description="Guided resume building and interview preparation for job readiness."
            icon={<FileText size={22} />}
          />

          <FeatureCard
            title="Progress Tracking & Insights"
            description="Visual dashboards to track learning progress and performance improvement."
            icon={<BarChart3 size={22} />}
          />
        </div>

      </div>
    </section>
  );
}
