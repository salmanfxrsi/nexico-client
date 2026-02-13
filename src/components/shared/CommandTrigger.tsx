"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Terminal, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function CommandTrigger() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Use a spring for that "fluid" motion as you scroll
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4">
      
      <motion.button
        animate={{ 
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="relative w-14 h-14 flex items-center justify-center bg-zinc-950 rounded-full border border-white/10 shadow-2xl group overflow-visible"
      >
        {/* SVG PROGRESS RING */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
        >
          {/* Background Track (The "Ghost" Line) */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-white/5"
          />
          {/* THE ACTIVE PROGRESS LINE */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#39FF14"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ pathLength }}
            className="drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]"
          />
        </svg>

        {/* ICONS */}
        <div className="relative z-10 flex items-center justify-center">
          <Terminal 
            size={18} 
            className="text-[#39FF14] transition-all duration-300 group-hover:opacity-0 group-hover:scale-0" 
          />
          <ArrowUp 
            size={20} 
            className="text-[#39FF14] absolute opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" 
          />
        </div>

        {/* SUBTLE GLOW RADIAL */}
        <div className="absolute inset-0 rounded-full bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.button>

      {/* FOOTER LABEL */}
      <motion.span 
        animate={{ opacity: isVisible ? 0.4 : 0 }}
        className="text-[8px] font-mono text-zinc-500 uppercase tracking-[0.4em] pointer-events-none pr-2"
      >
        System_Up
      </motion.span>
    </div>
  );
}