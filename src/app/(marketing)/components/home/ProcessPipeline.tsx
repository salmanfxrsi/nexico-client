"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code, Rocket, Activity } from "lucide-react";

const STEPS = [
  {
    id: "01",
    phase: "Discovery",
    title: "System_Audit",
    icon: Search,
    description: "Deep-dive analysis of current friction points and business logic requirements."
  },
  {
    id: "02",
    phase: "Architecture",
    title: "Core_Mapping",
    icon: PenTool,
    description: "Designing the blueprint for a sub-200ms infrastructure and brutalist UI."
  },
  {
    id: "03",
    phase: "Execution",
    title: "Module_Build",
    icon: Code,
    description: "Hard-coding the solution using Next.js, Rust, or Go for maximum thermal efficiency."
  },
  {
    id: "04",
    phase: "Deployment",
    title: "Global_Uplink",
    icon: Rocket,
    description: "Final stress testing and push to Edge nodes for worldwide availability."
  }
];

export default function ProcessPipeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity size={16} className="text-[#39FF14]" />
            <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.5em] uppercase font-bold">Execution_Pipeline</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white leading-[0.8]">
            The <span className="text-zinc-200 dark:text-zinc-800">Workflow</span>
          </h2>
        </div>

        {/* PIPELINE GRID */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-white/5 -translate-x-1/2 hidden md:block" />
          
          {/* Animated "Filling" Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#39FF14] -translate-x-1/2 origin-top hidden md:block shadow-[0_0_15px_#39FF14]"
          />

          <div className="space-y-24 md:space-y-40">
            {STEPS.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full md:w-auto text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                    <span className="text-[10px] font-mono text-[#39FF14] uppercase tracking-widest mb-2">Phase_{step.id}</span>
                    <h3 className="text-3xl md:text-5xl font-black italic uppercase text-zinc-900 dark:text-white mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon Node */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-white/10 group-hover:border-[#39FF14] transition-colors md:mx-20">
                    <step.icon size={24} className="text-zinc-400 dark:text-zinc-600 group-hover:text-[#39FF14]" />
                    <div className="absolute inset-0 bg-[#39FF14]/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Empty Spacer Side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* PROCESS FOOTER */}
        <div className="mt-32 text-center">
            <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-[0.4em]">Average_Cycle_Time: 42_Days</p>
        </div>
      </div>
    </section>
  );
}