// components/FeatureCard.tsx
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  
  return (
    <div className="group rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-blue-600 mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}
