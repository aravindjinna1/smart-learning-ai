import Link from "next/link";
import Image from "next/image";
import HeroImg from "../assets/finall.png";
import CircleLogos from "./circleLogos";
import Working from "./Working";
import Footer from "./Footer";
import Fsection from "./futures/FutureSection";
import Lagout from "../app/Auth/Lagout/lagout";
import StatsSection from "./stats";

export default function Home() {
  return (
    <>
      <style>{`
        .home-root * { box-sizing: border-box; }

        .grid-bg {
          background-image:
            linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* ── Navbar ── */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          position: relative;
          z-index: 50;
        }
        @media (min-width: 640px) { .navbar { padding: 20px 40px; } }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #f1f5f9;
        }
        @media (min-width: 640px) { .navbar-logo { font-size: 15px; } }

        .logo-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 10px #6366f1;
          animation: pulse-glow 2.5s infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 8px #6366f1; }
          50% { box-shadow: 0 0 18px #6366f1, 0 0 30px #6366f1; }
        }

        /* ── Hero tag ── */
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.28);
          color: #818cf8;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        @media (min-width: 768px) { .hero-tag { font-size: 11px; padding: 5px 14px; margin-bottom: 18px; } }

        /* ── Hero title ── */
        .hero-title {
          font-size: clamp(26px, 6vw, 58px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #f1f5f9;
          margin: 0 0 12px;
          text-align: center;
        }
        @media (min-width: 768px) {
          .hero-title { margin-bottom: 18px; text-align: left; }
        }

        .hero-title .gradient-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(90deg, #6366f1, #22d3ee);
          background-clip: text;
        }

        /* ── Hero subtitle ── */
        .hero-subtitle {
          font-size: clamp(13px, 2.5vw, 15px);
          color: #64748b;
          line-height: 1.7;
          max-width: 460px;
          margin: 0 auto 0;
          text-align: center;
        }
        @media (min-width: 768px) {
          .hero-subtitle { margin: 0 0 28px; text-align: left; }
        }

        /* ── CTA button ── */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          padding: 13px 28px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          flex: 1;
        }
        @media (min-width: 768px) {
          .cta-btn { padding: 14px 30px; font-size: 15px; flex: unset; }
        }
        .cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cta-btn:hover::after { opacity: 1; }
        .cta-btn:hover {
          box-shadow: 0 0 32px rgba(99,102,241,0.5), 0 8px 24px rgba(0,0,0,0.3);
          transform: translateY(-2px);
        }

        .secondary-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.2s;
          white-space: nowrap;
          padding: 13px 20px;
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 14px;
          flex: 1;
        }
        @media (min-width: 768px) {
          .secondary-link {
            border: none;
            padding: 0;
            flex: unset;
            border-radius: 0;
          }
        }
        .secondary-link:hover { color: #94a3b8; }

        /* ── CTA row ── */
        .cta-row {
          display: flex;
          gap: 10px;
          align-items: center;
          width: 100%;
        }
        @media (min-width: 768px) {
          .cta-row { gap: 14px; width: auto; }
        }

        /* ── MOBILE hero layout (single column, stacked) ── */
        .hero-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 28px 24px 56px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          gap: 0;
        }
        @media (min-width: 768px) {
          .hero-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 48px;
            padding: 60px 48px;
            align-items: center;
          }
        }
        @media (min-width: 1024px) { .hero-body { padding: 60px 64px; } }

        /* ── Text block ── */
        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          /* On mobile: order 1 (top) */
          order: 1;
        }
        @media (min-width: 768px) {
          .hero-text { align-items: flex-start; order: unset; }
        }

        /* ── Visual block ── */
        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Mobile: order 2 (middle), centered */
          order: 2;
          height: 240px;
          width: 100%;
          margin: 4px 0 0;
        }
        @media (min-width: 480px) { .hero-visual { height: 270px; } }
        @media (min-width: 640px) { .hero-visual { height: 310px; } }
        @media (min-width: 768px) {
          .hero-visual { height: 360px; margin: 0; order: unset; }
        }
        @media (min-width: 1024px) { .hero-visual { height: 400px; } }

        .hero-visual-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.62);
          transform-origin: center center;
        }
        @media (min-width: 480px) { .hero-visual-inner { transform: scale(0.72); } }
        @media (min-width: 640px) { .hero-visual-inner { transform: scale(0.82); } }
        @media (min-width: 768px) { .hero-visual-inner { transform: scale(0.9); } }
        @media (min-width: 1024px) { .hero-visual-inner { transform: scale(1); } }

        /* ── CTA wrapper — mobile: order 3 (bottom of image) ── */
        .cta-wrapper {
          order: 3;
          width: 100%;
          padding: 20px 0 0;
          display: flex;
          justify-content: center;
        }
        @media (min-width: 768px) {
          /* On desktop it's inside .hero-text, so this wrapper is hidden */
          .cta-wrapper { display: none; }
        }

        /* Desktop CTA — hidden on mobile ── */
        .cta-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .cta-desktop { display: flex; }
        }

        /* ── Video wrapper ── */
        .video-wrapper {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(9,7,33,0.55) 0%,
            rgba(9,7,33,0.35) 50%,
            rgba(9,7,33,0.92) 100%
          );
          z-index: 2;
        }

        .orb { pointer-events: none; position: absolute; border-radius: 50%; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp 0.7s ease 0.1s both; }
        .fade-up-2 { animation: fadeUp 0.7s ease 0.25s both; }
        .fade-up-3 { animation: fadeUp 0.7s ease 0.4s both; }
        .fade-up-4 { animation: fadeUp 0.7s ease 0.55s both; }
      `}</style>

      <main
        className="home-root w-screen overflow-hidden"
        style={{ background: "#090721", color: "#f1f5f9", overflow: "hidden" }}
      >
        <section className="video-wrapper grid-bg">

          {/* Orbs */}
          <div className="orb" style={{
            top: -100, right: -100,
            width: "clamp(220px, 40vw, 500px)",
            height: "clamp(220px, 40vw, 500px)",
            background: "radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%)",
            opacity: 0.22, filter: "blur(70px)", zIndex: 1,
          }} />
          <div className="orb" style={{
            bottom: 0, left: -80,
            width: "clamp(180px, 30vw, 400px)",
            height: "clamp(180px, 30vw, 400px)",
            background: "radial-gradient(circle, #e879f9 0%, #7c3aed 50%, transparent 70%)",
            opacity: 0.12, filter: "blur(60px)", zIndex: 1,
          }} />

          {/* Background video */}
          <video
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", zIndex: 1, opacity: 0.35,
            }}
            autoPlay muted loop playsInline preload="metadata" poster="/fallback.jpg"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>

          <div className="video-overlay" />

          {/* Content */}
          <div style={{
            position: "relative", zIndex: 10,
            display: "flex", flexDirection: "column", minHeight: "100vh",
          }}>
            {/* Navbar */}
            {/* <nav className="navbar">
              <div className="navbar-logo">
                <span className="logo-dot" />
                Learnexa
              </div>
              <Lagout />
            </nav> */}

            {/* Hero body */}
            <div className="hero-body">

              {/* 1 — Text (top on mobile, left on desktop) */}
              <div className="hero-text fade-up-1">
                <div className="hero-tag">
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#6366f1", boxShadow: "0 0 8px #6366f1",
                    display: "inline-block", flexShrink: 0,
                  }} />
                  AI-Powered Education Platform
                </div>

                <h1 className="hero-title fade-up-2">
                  Learn Smarter.<br />
                  <span className="gradient-text">Grow Faster.</span>
                </h1>

                <p className="hero-subtitle fade-up-3">
                  Personalized AI learning paths that adapt to your skill gaps, pace, and goals — so every minute you study actually counts.
                </p>

                {/* Buttons — desktop only (shown inline with text) */}
                <div className="cta-row cta-desktop fade-up-4" style={{ marginTop: 28 }}>
                  <Link href="/Main" className="cta-btn">
                    Get Started →
                  </Link>
                  <Link href="/Cources" className="secondary-link">
                    Browse Courses ↗
                  </Link>
                </div>
              </div>

              {/* 2 — Visual (middle on mobile, right on desktop) */}
              <div className="hero-visual fade-up-3">
                <div className="hero-visual-inner">
                  <CircleLogos />
                  <Image
                    src={HeroImg}
                    alt="Hero"
                    width={320}
                    style={{ position: "absolute" }}
                  />
                </div>
              </div>

              {/* 3 — Buttons (below image on mobile only) */}
              <div className="cta-wrapper fade-up-4">
                <div className="cta-row" style={{ maxWidth: 360 }}>
                  <Link href="/Main" className="cta-btn">
                    Get Started →
                  </Link>
                  <Link href="/Cources" className="secondary-link">
                    Browse Courses ↗
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom fade */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 160,
            background: "linear-gradient(to bottom, transparent, #090721)",
            zIndex: 10, pointerEvents: "none",
          }} />
        </section>

        {/* ══ BELOW-FOLD SECTIONS ══ */}
        <div className="grid-bg" style={{ position: "relative" }}>
          <div className="orb" style={{
            top: 100, right: -120,
            width: "clamp(200px, 35vw, 450px)",
            height: "clamp(200px, 35vw, 450px)",
            background: "radial-gradient(circle, #22d3ee 0%, #0891b2 50%, transparent 70%)",
            opacity: 0.08, filter: "blur(70px)", zIndex: 0,
          }} />
          <div className="orb" style={{
            bottom: 200, left: -100,
            width: "clamp(180px, 30vw, 400px)",
            height: "clamp(180px, 30vw, 400px)",
            background: "radial-gradient(circle, #6366f1 0%, #4f46e5 50%, transparent 70%)",
            opacity: 0.09, filter: "blur(60px)", zIndex: 0,
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <StatsSection />
            <Working />
            <Fsection />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}