"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import InputField from "../InputField";
import { loginSchema, LoginFormData } from "./loginSchema";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema), 
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await fetch("https://smart-learning-ai-c3ed.onrender.com/api/app/si/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email: data.email, Password: data.password }),
      });

      const info = await res.json();
      localStorage.setItem("token", info.token);

    //   if (!res.ok) throw new Error(info?.message || "Signin failed");

    //    if (!info?.token) {
    //   throw new Error("Token missing in response");
    // }
      alert("Signin successful");
      window.location.href = "/Main";
    } catch (error) {
      console.error("Signin failed", error);
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
          background: linear-gradient(90deg, transparent, #6366f1, #22d3ee, transparent);
          opacity: 0.6;
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
          position: relative;
          overflow: hidden;
        }
        .auth-btn::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .auth-btn:hover::after { opacity: 1; }
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
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%)",
          opacity: 0.2, filter: "blur(70px)", pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", bottom: -80, left: -80,
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, #22d3ee 0%, #0891b2 50%, transparent 70%)",
          opacity: 0.1, filter: "blur(60px)", pointerEvents: "none",
        }} />

        <div className="auth-card">
          {/* Inner glow */}
          <div style={{
            position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)",
            width: 200, height: 120, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(99,102,241,0.1), transparent 70%)",
            filter: "blur(20px)", pointerEvents: "none",
          }} />

          {/* Branding */}
          <div style={{ textAlign: "center", marginBottom: 32, position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#6366f1", boxShadow: "0 0 10px #6366f1", display: "inline-block",
              }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6366f1" }}>
                Learnexa
              </span>
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
              Welcome Back
            </h1>
            <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 }}>
              Sign in to continue your learning path
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
            <InputField
              label="Email"
              type="email"
              placeholder="you@example.com"
              register={register("email")}
              error={errors.email?.message}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="••••••••"
              register={register("password")}
              error={errors.password?.message}
            />

            {/* Forgot password */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: -6 }}>
              <Link
                href="/Auth/forgot-password"
                style={{ fontSize: 12, color: "#6366f1", textDecoration: "none", fontWeight: 600, letterSpacing: "0.02em" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#818cf8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6366f1"; }}
              >
                Forgot password?
              </Link>
            </div>

            <button type="submit" disabled={isSubmitting} className="auth-btn">
              {isSubmitting ? "Signing in…" : "Sign In →"}
            </button>
          </form>

          {/* Divider */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12, margin: "22px 0",
            color: "#1e293b", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", position: "relative",
          }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
            New here?
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* Sign up CTA */}
          <Link
            href="/Auth/Register"
            style={{
              display: "block", textAlign: "center",
              padding: "11px",
              borderRadius: 13,
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.22)",
              color: "#818cf8",
              fontSize: 13, fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.03em",
              transition: "all 0.2s",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(99,102,241,0.14)";
              el.style.borderColor = "rgba(99,102,241,0.4)";
              el.style.color = "#a5b4fc";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(99,102,241,0.08)";
              el.style.borderColor = "rgba(99,102,241,0.22)";
              el.style.color = "#818cf8";
            }}
          >
            Create a free account →
          </Link>
        </div>
      </div>
    </>
  );
}