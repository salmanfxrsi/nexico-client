"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // Import your new toggle

const links = ["Solutions", "Infrastructure", "Agency", "Careers"];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-150 flex justify-center px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative flex items-center justify-between md:justify-start gap-4 md:gap-8 px-4 md:px-8 py-2 md:py-3 rounded-2xl border border-zinc-200/50 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-2xl w-full max-w-5xl"
      >
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center border-r-0 md:border-r border-zinc-200 dark:border-white/10 pr-0 md:pr-8 group"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-7 w-24 md:h-10 md:w-32 shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Nexico Brand"
              fill
              className="object-contain" // Contain ensures logo isn't cropped
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Links Section */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              className="relative text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#39FF14] transition-colors"
            >
              {link}
              {hovered === link && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#39FF14]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Right Side: Theme Toggle + Button + Mobile Toggle */}
        <div className="flex items-center gap-3 md:ml-auto">
          
          {/* THEME TOGGLE UNIT */}
          <div className="flex items-center">
             <ThemeToggle />
          </div>

          {/* CTA Section */}
          <div className="pl-3 border-l border-zinc-200 dark:border-white/10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 overflow-hidden rounded-xl bg-black dark:bg-white transition-all shadow-[0_0_20px_rgba(57,255,20,0)] hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] border border-[#39FF14]/30"
            >
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#39FF14] via-[#2bff00] to-[#39FF14] transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[#39FF14] dark:bg-black group-hover:bg-black"></span>
              </span>
              <span className="relative z-10 text-[9px] md:text-[10px] uppercase font-black tracking-widest text-white dark:text-black group-hover:text-black whitespace-nowrap">
                Book a Call
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-zinc-600 dark:text-zinc-400"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl rounded-2xl border border-zinc-200 dark:border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xs uppercase tracking-widest font-bold text-zinc-600 dark:text-zinc-400 hover:text-[#39FF14] transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}