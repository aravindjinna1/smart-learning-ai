import Link from "next/link";

interface CourseCardProps {
  title: string;
  description: string;
  icon: string;
  resources: string[];
  available: boolean;
  slug: string;
}

export default function CourseCard({
  title,
  description,
  icon,
  resources,
  available,
  slug,
}: CourseCardProps) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500 transition">
      
      {/* Icon */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mt-2">
          {description}
        </p>
      </div>

      {/* Resources */}
      <div className="flex gap-3 text-sm text-gray-400 mt-4">
        {resources.map((res) => (
          <span key={res}>{res}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <span
          className={`text-sm ${
            available ? "text-green-400" : "text-gray-500"
          }`}
        >
          {available ? "Available" : "Coming Soon"}
        </span>

        <Link
          href={`/Cources/${slug}`}
          className={`text-sm font-medium ${
            available
              ? "text-indigo-400 hover:underline"
              : "text-gray-600 pointer-events-none"
          }`}
        >
          View Course →
        </Link>
      </div>
    </div>
  );
}
