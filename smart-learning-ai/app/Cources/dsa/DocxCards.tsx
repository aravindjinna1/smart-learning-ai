import Link from "next/link";

interface ResourceLink {
  label: string;
  url: string;
}

interface ResourceCardProps {
  title: string;
  description: string;
  icon: string;
  links: ResourceLink[];
}
 
export default function ResourceCard({
  title,
  description,
  icon,
  links,
}: ResourceCardProps) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition">
      
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mt-2">
        {description}
      </p>

      <div className="mt-4 space-y-2 flex">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            className="block text-sm text-indigo-400 hover:underline"
          >
            {link.label} →
          </Link>
        ))}
      </div>

    </div>
  );
}
