"use client";

import { motion } from "framer-motion";
import { Power, ArrowRight, ShieldAlert, Cpu } from "lucide-react";

export default function FinalDirective() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-zinc-900 dark:bg-black overflow-hidden border-t border-[#39FF14]/20">
      
      {/* BACKGROUND GRID DECOR */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* HUD OVERLAY */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12 flex items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2">
            <ShieldAlert size={14} className="text-[#39FF14]" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">End_Of_Stream</span>
          </div>
          <div className="w-12 h-px bg-zinc-800" />
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-[#39FF14]" />
            <span className="text-[10px] font-mono text-[#39FF14] uppercase tracking-[0.3em] animate-pulse">Waiting_For_Input</span>
          </div>
        </motion.div>

        {/* MASSIVE CALL TO ACTION */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="space-y-8"
        >
          <h2 className="text-7xl md:text-[12rem] font-black italic tracking-[ -0.05em] uppercase text-white leading-[0.8]">
            READY TO <br />
            <span className="text-transparent stroke-text dark:text-zinc-900 dark:stroke-zinc-700" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}>DEPLOY?</span>
          </h2>

          <p className="max-w-xl mx-auto text-zinc-400 font-medium text-lg md:text-xl italic">
            The architecture is ready. The nodes are synced. All that’s missing is the core objective.
          </p>

          <div className="pt-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-6 bg-[#39FF14] text-black px-12 py-6 rounded-full font-black uppercase italic text-2xl shadow-[0_0_40px_rgba(57,255,20,0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(57,255,20,0.5)]"
            >
              Initialize_Uplink
              <ArrowRight size={28} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* FOOTER LOGO DECOR */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <Power size={24} className="text-[#39FF14]" />
        <span className="text-[8px] font-mono text-white uppercase tracking-[1em] ml-[1em]">Nexico_Systems_2026</span>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px rgba(255,255,255,0.1);
        }
      `}</style>
    </section>
  );
}