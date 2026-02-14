import { ReactNode } from "react";
import Link from 'next/link'

interface MainCards {
  icon: ReactNode;
  title: string;
  description: string;
  href:string;
}

export default function ActionCards({ icon, title, description, href }: MainCards) {
  return (
   
    
 
      <Link
        href={href}
        className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition"
      >
        <div>{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </Link>
    
  );
}
