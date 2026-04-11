"use client";

import Image from "next/image";
import Link from "next/link";

type Template = {
  title: string;
  image: string;
  link: string;
  tag: string;
  color: string;
  icon: string;
};

type Tutorial = {
  title: string;
  link: string;
  duration: string;
};

export default function ResumeBuilderPage() {
  const templates: Template[] = [
    {
      title: "Modern LaTeX Resume",
      image: "https://via.placeholder.com/400x500",
      link: "https://www.overleaf.com/project/697ee6c237b99ad96b8fdd40",
      tag: "LaTeX",
      color: "#6366f1",
      icon: "✦",
    },
    {
      title: "ATS Friendly Professional Resume",
      image: "https://via.placeholder.com/400x500",
      link: "https://www.overleaf.com/latex/templates/harshibars-resume/sbcyynmtpnyd",
      tag: "ATS Optimized",
      color: "#22d3ee",
      icon: "⬡",
    },
    {
      title: "Minimal One Page Resume",
      image: "https://via.placeholder.com/400x500",
      link: "https://www.overleaf.com/latex/templates/tagged/cv",
      tag: "Minimal",
      color: "#e879f9",
      icon: "◈",
    },
  ];

  const tutorials: Tutorial[] = [
    {
      title: "How to Build an ATS Friendly Resume",
      link: "https://www.youtube.com/watch?v=XJ7bYdjKDcA",
      duration: "12 min",
    },
    {
      title: "Resume Mistakes to Avoid",
      link: "https://www.youtube.com/watch?v=y8YH0Qbu5h4",
      duration: "9 min",
    },
    {
      title: "How to Write Strong Project Descriptions",
      link: "https://www.youtube.com/watch?v=-2PHgXuJybA",
      duration: "14 min",
    },
  ];

  const keyComponents = [
    { label: "Header", detail: "Name, phone, email, LinkedIn, GitHub", icon: "👤" },
    { label: "Summary", detail: "2–3 lines about your skills and goals", icon: "📝" },
    { label: "Skills", detail: "Programming languages, frameworks, tools", icon: "⚙️" },
    { label: "Projects", detail: "Strong description with impact & tech stack", icon: "🚀" },
    { label: "Education", detail: "Degree, college, CGPA", icon: "🎓" },
    { label: "Experience", detail: "Internships, part-time roles", icon: "💼" },
    { label: "Achievements", detail: "Certifications, contests, hackathons", icon: "🏆" },
  ];

  const contentTips = [
    "Keep resume to 1 page",
    "Use bullet points, not paragraphs",
    "Use action verbs (Built, Developed, Designed)",
    "Quantify results (Improved performance by 30%)",
    "Avoid unnecessary personal details",
  ];

  const platforms = [
    { name: "Overleaf", desc: "Best for LaTeX professional resumes", icon: "📄", color: "#6366f1" },
    { name: "Canva", desc: "Modern design resumes", icon: "🎨", color: "#22d3ee" },
    { name: "Novoresume", desc: "ATS-friendly builder", icon: "✅", color: "#4ade80" },
    { name: "Resume.io", desc: "Clean templates, fast export", icon: "⚡", color: "#f59e0b" },
    { name: "Zety", desc: "Guided resume building", icon: "🧭", color: "#e879f9" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .rb-root { font-family: 'Syne', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        .grid-bg {
          background-image:
            linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .orb-1 { background: radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%); }
        .orb-2 { background: radial-gradient(circle, #e879f9 0%, #7c3aed 50%, transparent 70%); }

        /* Section label */
        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }
        .eyebrow-line {
          height: 1px;
          width: 32px;
          background: linear-gradient(90deg, #6366f1, transparent);
        }
        .eyebrow-text {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6366f1;
        }

        /* Template cards */
        .template-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 24px;
          transition: all 0.3s;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .template-card:hover {
          border-color: rgba(255,255,255,0.18);
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .template-glow {
          position: absolute;
          top: -40px; right: -40px;
          width: 120px; height: 120px;
          border-radius: 50%;
          opacity: 0.12;
          blur: 30px;
          transition: opacity 0.3s;
          filter: blur(30px);
        }
        .template-card:hover .template-glow { opacity: 0.25; }

        .template-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          font-weight: 800;
          flex-shrink: 0;
        }
        .template-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 4px;
        }
        .template-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-decoration: none;
          margin-top: auto;
          transition: gap 0.2s;
        }
        .template-link:hover { gap: 10px; }

        /* Glass card */
        .glass-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }
        .glass-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #6366f1, #22d3ee, transparent);
          opacity: 0.4;
        }

        /* Component row */
        .component-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .component-row:last-child { border-bottom: none; }
        .component-icon {
          font-size: 18px;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 10px;
          flex-shrink: 0;
        }

        /* Tip pill */
        .tip-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          font-size: 13px;
          color: #94a3b8;
          transition: border-color 0.2s;
        }
        .tip-pill:hover { border-color: rgba(99,102,241,0.3); }
        .tip-bullet {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #22d3ee);
          flex-shrink: 0;
        }

        /* Tutorial card */
        .tutorial-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .tutorial-card:hover {
          border-color: rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.04);
          transform: translateY(-2px);
        }
        .tutorial-play {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          color: #fff;
          flex-shrink: 0;
        }
        .tutorial-duration {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #475569;
          font-family: 'JetBrains Mono', monospace;
        }
        .tutorial-link {
          font-size: 12px;
          font-weight: 700;
          color: #818cf8;
          text-decoration: none;
          letter-spacing: 0.03em;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: gap 0.2s, color 0.2s;
        }
        .tutorial-link:hover { gap: 8px; color: #a5b4fc; }

        /* Platform pill */
        .platform-pill {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          transition: all 0.2s;
        }
        .platform-pill:hover {
          border-color: rgba(255,255,255,0.14);
          transform: translateX(4px);
        }
        .platform-icon {
          font-size: 20px;
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* AI CTA */
        .ai-cta {
          background: linear-gradient(135deg, rgba(79,70,229,0.15), rgba(124,58,237,0.1), rgba(168,85,247,0.08));
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
        }
        .ai-cta::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #6366f1, #e879f9, transparent);
          opacity: 0.6;
        }
        .ai-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          padding: 13px 24px;
          border-radius: 12px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: all 0.25s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .ai-cta-btn:hover {
          box-shadow: 0 0 28px rgba(99,102,241,0.45);
          transform: translateY(-1px);
        }

        /* Header badge */
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          color: #818cf8;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
          display: inline-flex;
        }

        /* Section title */
        .section-title {
          font-size: 22px;
          font-weight: 800;
          color: #f1f5f9;
          margin: 0 0 20px 0;
          letter-spacing: -0.01em;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.5s ease forwards; }
      `}</style>

      <main className="rb-root min-h-screen relative overflow-hidden" style={{ background: '#090721', color: '#f1f5f9' }}>
        {/* Grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 grid-bg" />

        {/* Orbs */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl z-0 orb-1" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl z-0 orb-2" />

        <div className="relative z-10 px-6 py-12 max-w-6xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>

          {/* ── Header ── */}
          <section className="fade-up">
            <div className="flex items-center gap-2 mb-3">
              <span className="header-badge">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 8px #6366f1', display: 'inline-block' }} />
                Learnexa
              </span>
            </div>
            <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
              Resume{" "}
              <span style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(90deg, #6366f1, #22d3ee)', backgroundClip: 'text' }}>
                Builder
              </span>
            </h1>
            <p style={{ color: '#64748b', marginTop: 12, fontSize: 15, maxWidth: 520, lineHeight: 1.65 }}>
              Build a professional, ATS-friendly resume with curated templates, expert guides, and AI-powered support.
            </p>
          </section>

          {/* ── Templates ── */}
          <section>
            <div className="section-eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">LaTeX Templates</span>
            </div>
            <h2 className="section-title">Resume Templates</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
              {templates.map((t) => (
                <div key={t.title} className="template-card">
                  <div className="template-glow" style={{ background: t.color }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div
                      className="template-icon"
                      style={{ background: `${t.color}18`, border: `1px solid ${t.color}33`, color: t.color }}
                    >
                      {t.icon}
                    </div>
                    <div>
                      <span
                        className="template-tag"
                        style={{ background: `${t.color}15`, border: `1px solid ${t.color}30`, color: t.color }}
                      >
                        {t.tag}
                      </span>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f1f5f9', margin: 0, lineHeight: 1.3 }}>
                        {t.title}
                      </h3>
                    </div>
                  </div>
                  <Link
                    href={t.link}
                    target="_blank"
                    className="template-link"
                    style={{ color: t.color }}
                  >
                    Open in Overleaf →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ── Guide ── */}
          <section>
            <div className="section-eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Expert Guide</span>
            </div>
            <h2 className="section-title">Resume Writing Guide</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
              {/* Key Components */}
              <div className="glass-card">
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6366f1', marginBottom: 16 }}>
                  Key Sections
                </p>
                {keyComponents.map((item) => (
                  <div key={item.label} className="component-row">
                    <div className="component-icon">{item.icon}</div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: 14, color: '#e2e8f0', margin: '0 0 2px 0' }}>{item.label}</p>
                      <p style={{ fontSize: 12, color: '#64748b', margin: 0, lineHeight: 1.5 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Content Tips */}
              <div className="glass-card" style={{ alignSelf: 'start' }}>
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#22d3ee', marginBottom: 16 }}>
                  Content Tips
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {contentTips.map((tip) => (
                    <div key={tip} className="tip-pill">
                      <div className="tip-bullet" />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── AI CTA ── */}
          <section>
            <div className="ai-cta">
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818cf8', marginBottom: 8 }}>
                  ✦ Powered by AI
                </p>
                <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 10px', color: '#f1f5f9' }}>
                  AI Resume Assistant
                </h2>
                <p style={{ fontSize: 14, color: '#64748b', maxWidth: 440, lineHeight: 1.65, margin: 0 }}>
                  Generate resume summaries, improve bullet points, optimize for ATS, and tailor your resume for any job role — instantly.
                </p>
              </div>
              <Link href="/Ask-ai" className="ai-cta-btn">
                <span>🤖</span> Ask AI to Improve Resume
              </Link>
            </div>
          </section>

          {/* ── Tutorials ── */}
          <section>
            <div className="section-eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Video Tutorials</span>
            </div>
            <h2 className="section-title">Resume Tutorials</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {tutorials.map((t) => (
                <div key={t.title} className="tutorial-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="tutorial-play">▶</div>
                    <span className="tutorial-duration">{t.duration}</span>
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#e2e8f0', margin: 0, lineHeight: 1.4 }}>
                    {t.title}
                  </p>
                  <Link href={t.link} target="_blank" className="tutorial-link">
                    Watch Tutorial →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ── Platforms ── */}
          <section style={{ paddingBottom: 40 }}>
            <div className="section-eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Tools & Platforms</span>
            </div>
            <h2 className="section-title">Best Resume Building Platforms</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {platforms.map((p) => (
                <div key={p.name} className="platform-pill">
                  <div
                    className="platform-icon"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: '#e2e8f0', margin: '0 0 2px' }}>{p.name}</p>
                    <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>{p.desc}</p>
                  </div>
                  <div style={{ marginLeft: 'auto', color: p.color, fontSize: 16, opacity: 0.5 }}>→</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}