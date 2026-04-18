"use client";

import FeatureCard from "./FueturesCard";
import {
  BookOpen,
  Map,
  Brain,
  Bot,
  FileText,
  BarChart3,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    title: "Learning Resources & Courses",
    description:
      "Curated courses, study materials, and PDFs designed for structured learning.",
    icon: <BookOpen size={22} />,
  },
  {
    title: "Technology Roadmaps",
    description:
      "Step-by-step learning paths to master new and trending technologies.",
    icon: <Map size={22} />,
  },
  {
    title: "Practice & Skill Assessment",
    description:
      "Practice questions and assessments to strengthen problem-solving skills.",
    icon: <Brain size={22} />,
  },
  {
    title: "AI Learning Assistant",
    description:
      "AI-powered help for doubts, explanations, and smart learning recommendations.",
    icon: <Bot size={22} />,
  },
  {
    title: "Resume & Job Preparation",
    description:
      "Guided resume building and interview preparation for job readiness.",
    icon: <FileText size={22} />,
  },
  {
    title: "Progress Tracking & Insights",
    description:
      "Visual dashboards to track learning progress and performance improvement.",
    icon: <BarChart3 size={22} />,
  },
];

const colors = [
  "#6366f1",
  "#22d3ee",
  "#e879f9",
  "#4ade80",
  "#f59e0b",
  "#fb923c",
];


const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};


export default function FeaturesSection() {
  return (
    <section className="text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">
            What This Platform Offers
          </h2>
          <p className="mt-4 text-gray-300">
            Everything you need to learn smarter, prepare better, and grow faster.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >    
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={colors[index % colors.length]}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}