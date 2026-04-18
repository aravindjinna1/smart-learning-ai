"use client";
import ActionCard from "./ActionCards";
import Lagout from "../Auth/Lagout/lagout";

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen bg-[#090721] text-white overflow-hidden">

      {/* ── Tech-grid background (matches home page) ── */}
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

      {/* Radial glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl z-0"
        style={{
          background:
            "radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%)",
        }}
      />

      {/* ── Nav bar ── */}
  

      {/* ── Hero ── */}
      <section className="relative z-10 px-8 pt-16 pb-10 max-w-3xl">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
          Learn Smarter,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Not Harder
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-xl">
          An AI-powered learning platform that adapts to your skills and goals.
        </p>
        {/* <button className="mt-8 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-900/40">
          Get Started
        </button> */}
      </section>

      {/* ── Action Cards ── */}
      <section className="relative z-10 px-8 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        <ActionCard
          icon="📚"
          title="Start Learning"
          description="Access curated resources and courses tailored to your career path."
          href="/Cources"
          color="#6366f1"
        />
        <ActionCard
          icon="🤖"
          title="Ask AI"
          description="Clear doubts instantly with AI assistance, available 24/7."
          href="/Ask-ai"
          color="#06b6d4"
        />
        <ActionCard
          icon="📝"
          title="Resume Building"
          description="Create and optimize resumes using AI to stand out to employers."
          href="/resume"
          color="#f59e0b"
        />
      </section>

      {/* ── AI-Powered Tools section ── */}
      <section className="relative z-10 mx-8 mb-12 max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-yellow-400 text-xl">⚡</span>
          <h2 className="text-xl font-bold tracking-tight">AI-Powered Tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { emoji: "💬", label: "Instant doubt solving" },
            { emoji: "📄", label: "AI resume creation & screening" },
            { emoji: "🎯", label: "Personalized learning guidance" },
          ].map(({ emoji, label }) => (
            <div
              key={label}
              className="flex items-center gap-13 bg-white/5 rounded-xl px-5 py-4 border border-white/10"
            >
              <span className="text-2xl">{emoji}</span>
              <span className="text-sm text-gray-300 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}