"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const links = ["Solutions", "Infrastructure", "Agency", "Careers"];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="fixed top-6 left-0 right-0 z-150 flex justify-center px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-4 md:gap-8 px-6 md:px-8 py-3 rounded-2xl border border-zinc-200/50 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-2xl"
      >
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center border-r border-zinc-200 dark:border-white/10 pr-6 md:pr-8 group"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-8 w-28 md:h-10 md:w-32 shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Nexico Brand"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </Link>

        {/* Links Section */}
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

        {/* CTA Section */}
        <div className="pl-2 md:pl-4 border-l border-zinc-200 dark:border-white/10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 px-5 py-2.5 overflow-hidden rounded-xl bg-black dark:bg-white transition-all shadow-[0_0_20px_rgba(57,255,20,0)] hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] border border-[#39FF14]/30"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 w-0 bg-linear-to-r from-[#39FF14] via-[#2bff00] to-[#39FF14] transition-all duration-500 ease-out group-hover:w-full" />

            {/* Tiny Status Dot */}
            <span className="relative z-10 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14] dark:bg-black group-hover:bg-black"></span>
            </span>

            <span className="relative z-10 text-[10px] uppercase font-black tracking-widest text-white dark:text-black group-hover:text-black whitespace-nowrap">
              Book a Call
            </span>

            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 z-20 w-full h-full bg-linear-to-r from-transparent via-white/20 dark:via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </motion.button>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </motion.div>
    </nav>
  );
}
