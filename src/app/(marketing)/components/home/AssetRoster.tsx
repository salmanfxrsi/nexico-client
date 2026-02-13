"use client";

import { motion } from "framer-motion";
import { User, Shield, Zap, Target, Cpu } from "lucide-react";

const ASSETS = [
  {
    name: "Salman Farsi",
    role: "System Architect",
    specialty: "Core_Infrastructure",
    stats: { logic: 98, velocity: 94, security: 99 },
    tag: "UNIT_01"
  },
  {
    name: "Asset_02",
    role: "Neural Lead",
    specialty: "Machine_Intelligence",
    stats: { logic: 95, velocity: 90, security: 92 },
    tag: "UNIT_02"
  },
  {
    name: "Asset_03",
    role: "UX Engineer",
    specialty: "Brutalist_Interface",
    stats: { logic: 88, velocity: 99, security: 85 },
    tag: "UNIT_03"
  }
];

export default function AssetRoster() {
  return (
    <section className="py-24 bg-white dark:bg-[#030303] transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <User size={16} className="text-[#39FF14]" />
            <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.5em] uppercase font-bold">Personnel_Roster</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white leading-none">
            Strategic <span className="text-zinc-200 dark:text-zinc-800">Assets</span>
          </h2>
        </div>

        {/* ASSET GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {ASSETS.map((asset, i) => (
            <motion.div
              key={asset.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-white/5 hover:border-[#39FF14]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background ID Watermark */}
              <div className="absolute -right-4 -top-4 text-8xl font-black italic opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:opacity-10 transition-opacity">
                {asset.tag}
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-mono text-[#39FF14] font-bold mb-6 block tracking-widest">{asset.tag}</span>
                
                <h3 className="text-3xl font-black italic uppercase text-zinc-900 dark:text-white mb-1">{asset.name}</h3>
                <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-8">{asset.role}</p>
                
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                      <span>Neural_Logic</span>
                      <span>{asset.stats.logic}%</span>
                    </div>
                    <div className="h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${asset.stats.logic}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-[#39FF14]" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                      <span>Dev_Velocity</span>
                      <span>{asset.stats.velocity}%</span>
                    </div>
                    <div className="h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${asset.stats.velocity}%` }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-zinc-400" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <Cpu size={14} className="text-zinc-300 dark:text-zinc-700 group-hover:text-[#39FF14] transition-colors" />
                    <Shield size={14} className="text-zinc-300 dark:text-zinc-700 group-hover:text-[#39FF14] transition-colors" />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-tighter">{asset.specialty}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* STATUS FOOTER */}
        <div className="mt-16 text-center border-t border-zinc-100 dark:border-white/5 pt-8">
           <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.5em] animate-pulse">
             All_Units_Synchronized // Collective_Intelligence_Stable
           </p>
        </div>
      </div>
    </section>
  );
}