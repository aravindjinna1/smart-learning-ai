"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import InputField from "../InputField";
import { registerSchema, RegisterFormData } from "./registerSchema";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await fetch("http://localhost:5000/api/app/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          FullName: data.name,
          Email: data.email,
          Password: data.password,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Signup failed");
      }

      const result = await res.json();
      console.log(result);
      alert("Signup successful");
    } catch (error) {
      console.error("Signup failed", error);
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
          max-width: 440px;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 480px) {
          .auth-card { padding: 28px 20px; border-radius: 18px; }
        }
        .auth-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #6366f1, #22d3ee, transparent);
          opacity: 0.6;
        }
        .auth-input-wrap { display: flex; flex-direction: column; gap: 6px; }
        .auth-label { font-size: 12px; font-weight: 600; color: #64748b; letter-spacing: 0.04em; }
        .auth-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          padding: 12px 16px;
          color: #f1f5f9;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
        }
        .auth-input::placeholder { color: #374151; }
        .auth-input:focus {
          border-color: rgba(99,102,241,0.5);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }
        .auth-input.error { border-color: rgba(239,68,68,0.5); }
        .auth-input.error:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.1); }
        .auth-error { font-size: 11px; color: #f87171; margin-top: 2px; display: flex; align-items: center; gap: 4px; }
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
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .auth-btn:hover::after { opacity: 1; }
        .auth-btn:hover { box-shadow: 0 0 28px rgba(99,102,241,0.45); transform: translateY(-1px); }
        .auth-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
        .auth-divider {
          display: flex; align-items: center; gap: 12px;
          color: #1e293b; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
        .auth-divider::before, .auth-divider::after {
          content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.06);
        }
      `}</style>

      <div
        className="auth-root dot-bg"
        style={{
          minHeight: "100vh", background: "#090721", color: "#f1f5f9",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px 16px", position: "relative", overflow: "hidden",
        }}
      >
        {/* Orb 1 */}
        <div aria-hidden style={{
          position: "absolute", top: -120, right: -120,
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, #6366f1 0%, #1d4ed8 50%, transparent 70%)",
          opacity: 0.2, filter: "blur(70px)", pointerEvents: "none",
        }} />
        {/* Orb 2 */}
        <div aria-hidden style={{
          position: "absolute", bottom: -80, left: -80,
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, #e879f9 0%, #7c3aed 50%, transparent 70%)",
          opacity: 0.12, filter: "blur(60px)", pointerEvents: "none",
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
              Create Account
            </h1>
            <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 }}>
              Start your AI-powered learning journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
            <InputField
              label="Full Name"
              type="text"
              placeholder="Your name"
              register={register("name")}
              error={errors.name?.message}
            />
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
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              register={register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />

            <button type="submit" disabled={isSubmitting} className="auth-btn" style={{ marginTop: 4 }}>
              {isSubmitting ? "Creating account…" : "Create Account →"}
            </button>
          </form>

          {/* Footer */}
          <p style={{ textAlign: "center", fontSize: 13, color: "#475569", marginTop: 24, position: "relative" }}>
            Already have an account?{" "}
            <Link href="/Auth/Login" style={{ color: "#818cf8", textDecoration: "none", fontWeight: 600 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a5b4fc"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#818cf8"; }}
            >
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}