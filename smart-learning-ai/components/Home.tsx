import Link from "next/link";
import HeroImg from "../assets/hero2.png";
import Image from "next/image";
import BookImg from "../assets/book.png";
import AiTech from "../assets/ai-technology.png";
import NewAi from "../assets/AiNew.png";
import Idea from "../assets/idea.png";
import AiImages from "../assets/Gemini_Generated_Image_wvn23qwvn23qwvn2-Photoroom.png";
import gemini from "../assets/A modern, illustrati-Photoroom.png";
import Working from './Working'
import Footer from './Footer'
import Fsection from './futures/FutureSection'

export default function Home() {
  return (
<main className="min-h-screen px-0 overflow-hidden text-white bg-[#0B0F19]">
  <section className="mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 gap-10 w-full items-center">
    {/* Header */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <h1 className="text-2xl md:text-3xl font-bold text-white">
        ⚡SMART LEARNING AI
      </h1>

      <div className="flex gap-4">
        <Link
          className="text-lg text-center rounded hover:text-blue-400 transition"
          href="/Auth/Login"
        >
          Login
        </Link>
      </div>
    </div>

    {/* Hero Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center px-4 md:px-20">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-200">
          Learn Smarter, Not Harder
        </h1>
        <p className="mt-4 text-gray-300">
          An AI-powered learning platform that adapts to your skills and goals.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link href="/Main">
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-500 text-white px-6 py-3 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="h-64 w-full max-w-sm flex items-center justify-center">
        <Image src={HeroImg} alt="Hero Image" width={350} />
      </div>
    </div>

    {/* Feature Cards */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 mx-4 md:mx-12">
      <div className="rounded-[10px] flex flex-col gap-3 bg-[#ADFFFF] p-4 shadow-md w-full max-w-xs h-40 cursor-pointer transition-transform duration-300 hover:scale-105">
        <Image src={BookImg} alt="Read icon" width={40} height={40} />
        <div>
          <h1 className="font-semibold text-lg">Courses</h1>
          <p className="text-black">Explore a variety of job-focused courses</p>
        </div>
      </div>

      <div className="rounded-[10px] bg-[#FFDDAD] flex flex-col gap-3 p-4 shadow-md w-full max-w-xs h-40 cursor-pointer transition-transform duration-300 hover:scale-105">
        <Image
          src={gemini}
          className="relative right-2 top-[-10px]"
          alt="AI icon"
          width={90}
          height={90}
        />
        <div className="relative top-[-10px]">
          <h1 className="font-semibold text-lg">AI Help</h1>
          <p className="text-black">Take help from the AI chatbot</p>
        </div>
      </div>

      <div className="rounded-[10px] bg-[#D9ADFF] flex flex-col gap-3 p-4 shadow-md w-full max-w-xs h-40 cursor-pointer transition-transform duration-300 hover:scale-105">
        <Image src={Idea} alt="Idea icon" width={40} height={40} />
        <div>
          <h1 className="font-semibold text-lg">Resources</h1>
          <p className="text-black">Explore resources for upskilling</p>
        </div>
      </div>
    </div>
  </section>

  {/* Other Sections */}
  <section>
    <Working />
  </section>

  <section>
    <Fsection />
  </section>

  <section>
    <Footer />
  </section>
</main>
  );
}
