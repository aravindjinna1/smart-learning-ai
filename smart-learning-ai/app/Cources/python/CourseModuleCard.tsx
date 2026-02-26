interface CourseModuleCardProps {
  title: string;
  description: string;
  youtubeUrl: string;
  resourceUrl?: string;
}

export default function CourseModuleCard({
  title,
  description,
  youtubeUrl,
  resourceUrl,
}: CourseModuleCardProps) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mt-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href={youtubeUrl}
          target="_blank"
          className="text-sm text-indigo-400 hover:underline"
        >
          🎥 Watch Playlist
        </a>

        {resourceUrl && (
          <a
            href={resourceUrl}
            target="_blank"
            className="text-sm text-green-400 hover:underline"
          >
            📘 View Notes
          </a>
        )}

        <button className="text-sm text-purple-400 hover:underline">
          🧠 Ask AI
        </button>
      </div>
    </div>
  );
}