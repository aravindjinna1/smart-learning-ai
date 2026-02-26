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
    <main className=" min-h-screen px-0 overflow-hidden text-white bg-[#0B0F19]">
      <section className="mx-auto px-6 py-10 grid grid-col-1 gap-10 w-screen items-center">
        <div className=" flex flex-row items-center justify-center gap-120 text-bottom">
          <h1 className=" md:text-3xl font-bold text-white ">
            ⚡SMART LEARNING AI
          </h1>

          <div className="flex gap-15 text-bottom">
            {/* <Link className=" md:text-1xl  " href="/cources">
              courses{" "}
            </Link>
            <Link className=" md:text-1xl  " href="/Practice">
              Practice
            </Link>
            <Link className=" md:text-1xl  " href="/Resource">
              Resources
            </Link> */}
            <Link
              className=" md:text-1xl  text-center  rounded"
              href="/Auth/Login"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 px-20 place-items-center gap-30">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-200">
              Learn Smarter, Not Harder
            </h1>
            <p className="mt-4 text-gray-300">
              An AI-powered learning platform that adapts to your skills and
              goals.
            </p>

            <div className="mt-6 flex gap-4">
              <Link href="/Main">
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-500 text-white px-6 py-3 rounded-[100px] ">
                  Get Started
                </button>
              </Link>
              {/* <button className="border bg-green-500  cursor-pointer hover:bg-green-300 border-gray-300 px-6 py-3 rounded-lg">
              View Demo
            </button> */}
            </div>
          </div>

          <div className="h-80 w-150 rounded-xl aboslute  flex items-center justify-center">
            <Image src={HeroImg} alt="Hero Image" width={350} />
            {/* <span className="text-gray-400">Dashboard Preview</span> */}
          </div>
        </div>

        <div className="flex flex-row item-center justify-center text-black gap-20 mx-12 ">
          <div
            className="rounded-[10px] flex flex-col gap-3 bg-[#ADFFFF]  p-3 shadow-[0_5px_10px_rgba(0,0,0,0.15)]
             w-60 h-40 cursor-pointer transition-transform ease-in-out duratio-400 hover:scale-105"
          >
            <Image src={BookImg} alt="Read icon" width={40} height={40} />

            <div>
              <h1 className=" font-semibold text-lg">Cources</h1>
              <p className="text-black">
                Expolre a variety of job focused cources
              </p>
            </div>
          </div>
          <div
            className="rounded-[10px] bg-[#FFDDAD] flex flex-col gap- p-3 shadow-[0_5px_10px_rgba(0,0,0,0.15)]
             w-60 h-40 cursor-pointer transition-transform ease-in-out duratio-400 hover:scale-105 "
          >
            {/* <Image src={AiImages} className="relative right-5" alt="Read icon" width={90} height={90} /> */}
            <Image
              src={gemini}
              className="relative right-6 top-[-10px]"
              alt="Read icon"
              width={90}
              height={90}
            />

            <div className="relative top-[-10px]">
              <h1 className=" font-semibold text-lg">Ai Help</h1>
              <p className="text-black">
                Expolre a variety of job focused cources
              </p>
            </div>
          </div>
          <div
            className="rounded-[10px] bg-[#D9ADFF] flex flex-col gap-2 p-3 shadow-[0_5px_10px_rgba(0,0,0,0.15)]
             w-60 h-40 cursor-pointer transition-transform ease-in-out duratio-400 hover:scale-105"
          >
            <Image src={Idea} alt="Read icon" width={40} height={40} />

            <div>
              <h1 className="font-semibold text-lg ">Resources</h1>
              <p className="text-black">
                Expolre a variety of job focused cources
              </p>
            </div>
          </div>
        </div>
      </section>

            <section>
              <Working />
            </section>
   
            <section className=""> <Fsection /> </section>
           

        <section >
         <Footer />
        </section>
    </main>
  );
}
