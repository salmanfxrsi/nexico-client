"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Radio, Shield } from "lucide-react";

const PARTNERS = [
  "ZUPER_MART", "WALKWAY_FOOTWEAR", "PANSHI_GROUP",
];

export default function PartnerMarquee() {
  return (
    <section className="py-12 bg-zinc-50 dark:bg-[#030303] border-y border-zinc-100 dark:border-white/5 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Radio size={14} className="text-[#39FF14] animate-pulse" />
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.4em] font-bold">
            Satellite_Uplink_Active
          </span>
        </div>
        <div className="flex items-center gap-6 text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
          <span className="flex items-center gap-2"><Shield size={10} className="text-[#39FF14]" /> Verified_Partners</span>
          <span className="flex items-center gap-2"><Zap size={10} className="text-[#39FF14]" /> High_Priority</span>
        </div>
      </div>

      {/* INFINITE MARQUEE */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-20 py-4"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {/* Double the array to create the infinite loop effect */}
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-zinc-200 dark:text-zinc-800 hover:text-[#39FF14] dark:hover:text-[#39FF14] transition-colors duration-500 cursor-default"
            >
              <Cpu size={24} className="opacity-20" />
              {partner}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-zinc-50 dark:from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-zinc-50 dark:from-[#030303] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 mt-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent" />
      </div>
    </section>
  );
}