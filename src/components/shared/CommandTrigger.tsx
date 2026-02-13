"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Terminal, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function CommandTrigger() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    // Identical container height (h-12 on mobile, h-14 on desktop)
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex items-center justify-center h-12 md:h-14">
      <motion.button
        animate={{ 
          scale: isVisible ? 1 : 0, 
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none" 
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-zinc-950/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10 shadow-2xl group overflow-visible aspect-square"
      >
        {/* SVG Progress Ring */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1">
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="4" className="text-white/5" />
          <motion.circle 
            cx="50" cy="50" r="44" fill="none" 
            stroke="#39FF14" strokeWidth="4" 
            strokeLinecap="round" style={{ pathLength }} 
          />
        </svg>

        {/* Center Icons */}
        <div className="relative z-10 flex items-center justify-center">
            <Terminal size={16} className="text-[#39FF14] group-hover:hidden transition-all" />
            <ArrowUp size={18} className="text-[#39FF14] hidden group-hover:block transition-all" />
        </div>
      </motion.button>
    </div>
  );
}