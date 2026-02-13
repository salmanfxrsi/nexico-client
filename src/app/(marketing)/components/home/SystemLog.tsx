"use client";

import { motion } from "framer-motion";
import { Activity, Terminal, ChevronRight, Share2 } from "lucide-react";

const LOGS = [
  {
    id: "LOG_084",
    date: "2026.02.12",
    title: "The Shift to Edge-First Intelligence",
    tag: "ARCHITECTURE",
    preview: "Why centralized cloud models are failing the next generation of sub-10ms applications."
  },
  {
    id: "LOG_083",
    date: "2026.02.05",
    title: "Brutalism in Modern Interface Design",
    tag: "DESIGN",
    preview: "Stripping away the fluff to reveal the raw functional power of high-contrast UI."
  },
  {
    id: "LOG_082",
    date: "2026.01.28",
    title: "Neural Integration: Beyond Chatbots",
    tag: "NEURAL",
    preview: "Implementing deterministic logic gates within stochastic LLM workflows."
  }
];

export default function SystemLog() {
  return (
    <section className="py-24 bg-white dark:bg-[#030303] transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-16 border-b border-zinc-100 dark:border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Activity size={16} className="text-[#39FF14]" />
              <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.5em] uppercase font-bold">
                Pulse_Monitor
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white">
              System <span className="text-zinc-200 dark:text-zinc-800">Logs</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Frequency: 60Hz</p>
            <p className="text-[10px] font-mono text-[#39FF14] uppercase tracking-widest">Status: Transmission_Active</p>
          </div>
        </div>

        {/* LOG STREAM */}
        <div className="divide-y divide-zinc-100 dark:divide-white/5">
          {LOGS.map((log, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative py-12 cursor-pointer"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* ID & DATE */}
                <div className="md:col-span-2 space-y-1">
                  <p className="text-[#39FF14] font-mono text-xs font-bold tracking-tighter">
                    {log.id}
                  </p>
                  <p className="text-zinc-400 font-mono text-[10px]">
                    {log.date}
                  </p>
                </div>

                {/* CONTENT */}
                <div className="md:col-span-7">
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 uppercase mb-4 inline-block">
                    {log.tag}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-white group-hover:text-[#39FF14] transition-colors duration-300 italic uppercase tracking-tighter mb-4">
                    {log.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base max-w-xl font-medium leading-relaxed">
                    {log.preview}
                  </p>
                </div>

                {/* ACTION */}
                <div className="md:col-span-3 flex justify-end items-center gap-6">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-4 text-zinc-400">
                    <Share2 size={16} className="hover:text-white transition-colors" />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center group-hover:bg-[#39FF14] group-hover:border-[#39FF14] transition-all duration-500">
                    <ChevronRight size={20} className="text-zinc-400 group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover Background Decor */}
              <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900/0 group-hover:dark:bg-zinc-900/30 -mx-6 px-6 transition-colors duration-500 -z-0 rounded-3xl" />
            </motion.div>
          ))}
        </div>

        {/* LOAD MORE / VIEW ALL */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-4 text-[11px] font-mono font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-[#39FF14] transition-colors">
            <Terminal size={14} />
            Fetch_More_Entries
          </button>
        </div>
      </div>
    </section>
  );
}