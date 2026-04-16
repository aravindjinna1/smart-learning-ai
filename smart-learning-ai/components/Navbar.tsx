"use client";

import Link from "next/link";
import { useState } from "react";
import Lagout from "@/app/Auth/Lagout/lagout";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-10 py-5 relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white font-extrabold tracking-widest text-sm uppercase">
        <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1]" />
        Learnexa
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
        <Link href="/Cources" className="hover:text-white transition">
          Courses
        </Link>
        <Link href="/Ask-ai" className="hover:text-white transition">
          Ask AI
        </Link>
        <Link href="/resume" className="hover:text-white transition">
          Resume Builder
        </Link>
        <Lagout />
      </div>

      {/* Mobile Controls */}
      <div className="md:hidden flex items-center gap-4">
        <Lagout />

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-8 flex items-center justify-center"
          aria-label="Menu"
        >
          <span
            className={`absolute h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? "rotate-45 top-4" : "top-2"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? "opacity-0" : "top-4"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? "-rotate-45 top-4" : "top-6"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Popup */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0b0f1a]/95 backdrop-blur-xl border-t border-white/10 md:hidden">
          <div className="flex flex-col px-6 py-6 gap-5 text-slate-300 font-semibold text-sm">
            <Link
              href="/Cources"
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              Courses
            </Link>
            <Link
              href="/Ask-ai"
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              Ask AI
            </Link>
            <Link
              href="/resume"
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              Resume Builder
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;