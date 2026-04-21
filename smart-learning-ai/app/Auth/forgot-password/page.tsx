"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email) return;
    setLoading(true);
    try {
      await fetch("https://smart-learning-ai-c3ed.onrender.com/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .auth-root * { box-sizing: border-box; }
        .dot-bg {
          background-image: radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .auth-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 24px;
          padding: 40px 36px;
          width: 100%;
          max-width: 420px;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 480px) {
          .auth-card { padding: 28px 20px; border-radius: 18px; }
        }
        .auth-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #22d3ee, #6366f1, transparent);
          opacity: 0.6;
        }
        .auth-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          padding: 12px 16px;
          color: #f1f5f9;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .auth-input::placeholder { color: #374151; }
        .auth-input:focus {
          border-color: rgba(99,102,241,0.55);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
        }
        .auth-btn {
          width: 100%;
          padding: 13px;
          border-radius: 13px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          font-family: inherit;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
        }
        .auth-btn:hover { box-shadow: 0 0 28px rgba(99,102,241,0.45); transform: translateY(-1px); }
        .auth-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
      `}</style>

      <div
        className="auth-root dot-bg"
        style={{
          minHeight: "100vh", background: "#090721", color: "#f1f5f9",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px 16px", position: "relative", overflow: "hidden",
        }}
      >
        {/* Orbs */}
        <div aria-hidden style={{
          position: "absolute", top: -120, right: -120,
          width: 460, height: 460, borderRadius: "50%",
          background: "radial-gradient(circle, #22d3ee 0%, #0891b2 50%, transparent 70%)",
          opacity: 0.15, filter: "blur(70px)", pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", bottom: -80, left: -80,
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, #6366f1 0%, #4f46e5 50%, transparent 70%)",
          opacity: 0.12, filter: "blur(60px)", pointerEvents: "none",
        }} />

        <div className="auth-card">
          <div style={{
            position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)",
            width: 200, height: 120, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(34,211,238,0.08), transparent 70%)",
            filter: "blur(20px)", pointerEvents: "none",
          }} />

          {sent ? (
            /* ── Success state ── */
            <div style={{ textAlign: "center", padding: "16px 0", position: "relative" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "rgba(34,211,238,0.12)", border: "1.5px solid rgba(34,211,238,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, margin: "0 auto 20px",
              }}>
                ✉
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                Check your inbox
              </h2>
              <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65, margin: "0 0 28px" }}>
                We've sent a password reset link to <span style={{ color: "#22d3ee", fontWeight: 600 }}>{email}</span>. Check your inbox and follow the instructions.
              </p>
              <Link href="/Auth/Login" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 13, fontWeight: 700, color: "#818cf8",
                textDecoration: "none", letterSpacing: "0.03em",
              }}>
                ← Back to Sign In
              </Link>
            </div>
          ) : (
            /* ── Form state ── */
            <div style={{ position: "relative" }}>
              {/* Branding */}
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 10px #6366f1", display: "inline-block" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6366f1" }}>
                    Learnexa
                  </span>
                </div>
                <h1 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  Reset Password
                </h1>
                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 }}>
                  Enter your email and we'll send a reset link
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="auth-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submit()}
                  />
                </div>

                <button
                  className="auth-btn"
                  onClick={submit}
                  disabled={loading || !email}
                  style={{ marginTop: 4 }}
                >
                  {loading ? "Sending…" : "Send Reset Link →"}
                </button>
              </div>

              <div style={{ textAlign: "center", marginTop: 24 }}>
                <Link href="/Auth/Login" style={{
                  fontSize: 13, color: "#475569", textDecoration: "none",
                  fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 5,
                  transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#818cf8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#475569"; }}
                >
                  ← Back to Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}