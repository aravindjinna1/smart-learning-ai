import ActionCard from "./ActionCards";
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19]  text-white px-8 py-10">
      
      {/* Welcome */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold">Welcome to Learnexa</h1>
        
        <div className="flex  items-center justify-between" >
        <p className="text-gray-600 mt-2">
          Learn smarter. Prepare faster. Build your career with AI.
        </p>
        <Link href="/Auth/Login" className="text-black bg-[#111827] text-white  rounded-[10px] px-10 py-2 ">Login</Link>
        </div>
      </section>

      {/* Primary Actions */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <ActionCard
          icon=""
          title="Start Learning"
          description="Access curated resources and courses"
          href="/Cources"
        />

        <ActionCard
          icon=""
          title="Roadmaps"
          description="Step-by-step paths for new technologies"
          href="/roadmaps"
        />

        <ActionCard
          icon=""
          title="Ask AI"
          description="Clear doubts instantly with AI assistance"
          href="/ai-doubts"
        />

        <ActionCard
          icon=""
          title="Build Resume"
          description="Create and optimize resumes using AI"
          href="/resume"
        />

      </section>

      {/* AI Section */}
      <section className="bg-[#111827] p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">AI-Powered Tools</h2>
        <ul className="text-gray-400 space-y-2">
          <li>• Instant doubt solving</li>
          <li>• AI resume creation & screening</li>
          <li>• Personalized learning guidance</li>
        </ul>
      </section>

    </div>
  );
}
