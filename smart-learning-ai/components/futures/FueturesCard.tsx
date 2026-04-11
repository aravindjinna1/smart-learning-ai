"use client";

import { ReactNode, useRef } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color?: string;
}

const colors = [
  "#6366f1", "#22d3ee", "#e879f9",
  "#4ade80", "#f59e0b", "#fb923c",
];

let globalIndex = 0;

export default function FeatureCard({ title, description, icon, color }: FeatureCardProps) {
  const stableColorRef = useRef<string | null>(null);

  if (!stableColorRef.current) {
    stableColorRef.current = color ?? colors[globalIndex++ % colors.length];
  }

  const cardColor = stableColorRef.current;

  return (
    <div
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: "26px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "all 0.3s",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = `${cardColor}44`;
        el.style.transform = "translateY(-4px)";
        el.style.background = `${cardColor}07`;
        el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.transform = "translateY(0)";
        el.style.background = "rgba(255,255,255,0.04)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Top accent */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: `linear-gradient(90deg, ${cardColor}, transparent)`,
        opacity: 0.45,
      }} />

      {/* Glow */}
      <div style={{
        position: "absolute",
        top: -30,
        right: -30,
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: cardColor,
        opacity: 0.08,
        filter: "blur(22px)",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <div style={{
        width: 48,
        height: 48,
        borderRadius: 12,
        background: `${cardColor}18`,
        border: `1.5px solid ${cardColor}30`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: cardColor,
        flexShrink: 0,
      }}>
        {icon}
      </div>

      <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15, margin: 0, lineHeight: 1.35 }}>
        {title}
      </h3>

      <p style={{ color: "#64748b", fontSize: 13, margin: 0, lineHeight: 1.65 }}>
        {description}
      </p>
    </div>
  );
}