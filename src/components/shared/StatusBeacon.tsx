"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function StatusBeacon() {
  return (
    // We use a fixed height container (h-12 on mobile, h-14 on desktop)
    <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[9999] flex items-center justify-center h-12 md:h-14">
      <div className="flex items-center gap-3 bg-white/5 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/50 dark:border-white/10 p-2 pr-4 md:pr-6 rounded-xl md:rounded-2xl h-full shadow-2xl">
        
        {/* Pulsing Core */}
        <div className="relative flex h-8 w-8 md:h-10 md:w-10 items-center justify-center shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-20"></span>
          <div className="relative flex items-center justify-center h-full w-full rounded-full bg-zinc-950 border border-[#39FF14]/50 shadow-[0_0_10px_#39FF14]">
            <Activity size={14} className="text-[#39FF14]" />
          </div>
        </div>

        {/* Text Area */}
        <div className="flex flex-col justify-center select-none">
          <span className="text-[9px] md:text-[10px] font-mono font-black text-[#39FF14] uppercase tracking-tighter leading-none">
            NEXICO_IS_ACTIVE
          </span>
          <span className="text-[7px] md:text-[8px] font-mono text-zinc-500 uppercase tracking-[0.2em] mt-1 leading-none">
            Software_Company
          </span>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-[#39FF14]/10 blur-3xl rounded-full pointer-events-none -z-10" />
    </div>
  );
}