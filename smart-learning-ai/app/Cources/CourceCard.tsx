import Link from "next/link";

interface CourseCardProps {
  title: string;
  description: string;
  icon: string;
  resources: string[];
  available: boolean;
  slug: string;
  color?: string;
}

export default function CourseCard({
  title,
  description,
  icon,
  resources,
  available,
  slug,
  color = "#6366f1",
}: CourseCardProps) {
  return (
    <div
      className="group relative flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
    >
      {/* Glow blob */}
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-15 blur-2xl group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{ background: color }}
      />

      {/* Unavailable overlay tint */}
      {!available && (
        <div className="absolute inset-0 bg-black/30 rounded-2xl pointer-events-none z-10" />
      )}

      {/* Icon badge */}
      <div
        className="relative z-20 flex items-center justify-center w-14 h-14 rounded-xl text-3xl mb-5 shadow-lg"
        style={{ background: `${color}22`, border: `1.5px solid ${color}55` }}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-20 flex-1">
        <h3 className="text-base font-bold text-white tracking-tight">{title}</h3>
        <p className="text-sm text-gray-400 mt-2 leading-relaxed">{description}</p>
      </div>

      {/* Resources */}
      <div className="relative z-20 flex flex-wrap gap-2 mt-5">
        {resources.map((res) => (
          <span
            key={res}
            className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
          >
            {res}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-20 flex items-center justify-between mt-6 pt-4 border-t border-white/10">
        <span
          className={`flex items-center gap-1.5 text-xs font-semibold ${
            available ? "text-emerald-400" : "text-gray-500"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              available ? "bg-emerald-400 animate-pulse" : "bg-gray-600"
            }`}
          />
          {available ? "Available" : "Coming Soon"}
        </span>

        <Link
          href={`/Cources/${slug}`}
          className={`text-xs font-semibold tracking-wide uppercase transition-all ${
            available
              ? "hover:opacity-80"
              : "text-gray-600 pointer-events-none"
          }`}
          style={available ? { color } : {}}
        >
          View Course →
        </Link>
      </div>
    </div>
  );
}