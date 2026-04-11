import { ReactNode } from "react";
import Link from "next/link";

interface MainCards {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  color?: string;
}

export default function ActionCards({
  icon,
  title,
  description,
  href,
  color = "#6366f1",
}: MainCards) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-start gap-3 p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
      style={
        {
          "--card-color": color,
        } as React.CSSProperties
      }
    >
      {/* Glow background blob */}
      <div
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300"
        style={{ background: color }}
      />

      {/* Icon badge */}
      <div
        className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl text-2xl shadow-lg"
        style={{ background: `${color}22`, border: `1.5px solid ${color}55` }}
      >
        {icon}
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
        <p className="text-sm text-gray-400 mt-1 leading-relaxed">{description}</p>
      </div>

      {/* Arrow hint */}
      <span className="relative z-10 mt-auto text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color }}>
        Explore →
      </span>
    </Link>
  );
}