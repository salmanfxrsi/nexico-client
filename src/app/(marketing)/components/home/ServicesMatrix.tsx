"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Globe, Layout, Maximize2, Terminal } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "System Architecture",
    icon: Globe,
    tech: ["Next.js 15", "TypeScript", "Edge Runtime"],
    description:
      "Engineering resilient digital ecosystems designed for sub-second latency and global-scale deployments.",
    details: "TTFB: <50ms | ARCH: SERVERLESS_EDGE | AVAILABILITY: 99.99%",
  },
  {
    id: "02",
    title: "Neural Integration",
    icon: Cpu,
    tech: ["LLM Ops", "Vector Embeddings", "Python"],
    description:
      "Deploying custom machine intelligence layers to automate decision-making and scale cognitive workflows.",
    details:
      "INFERENCE: REAL_TIME | MODEL: AGNOSTIC | DATA_INTEGRITY: SHIELDED",
  },
  {
    id: "03",
    title: "Brutalist UX/UI",
    icon: Layout,
    tech: ["Figma", "Motion Pro", "Design Systems"],
    description:
      "Fusing high-contrast industrial aesthetics with clinical precision to create unmistakable brand dominance.",
    details:
      "IDENTITY: RADICAL | ACCESSIBILITY: WCAG_COMPLIANT | UX: FRICTIONLESS",
  },
  {
    id: "04",
    title: "Core Engineering",
    icon: Code2,
    tech: ["Rust", "Go", "PostgreSQL"],
    description:
      "Low-level performance engineering for mission-critical applications where failure is not an option.",
    details:
      "UPTIME: MAXIMIZED | CONCURRENCY: HIGH_LOAD | ENCRYPTION: MILITARY_GRADE",
  },
];

export default function ServicesMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white dark:bg-[#030303] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <Terminal size={16} className="text-[#39FF14]" />
              <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.5em] uppercase font-bold">
                Execution_Modules
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white leading-none">
              Strategic{" "}
              <span className="text-zinc-200 dark:text-zinc-800">
                Capabilities
              </span>
            </h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest text-right">
            Ver: 2.0.4 <br /> Status: Ready_to_Deploy
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: SERVICE SELECTOR */}
          <div className="lg:col-span-5 space-y-4">
            {SERVICES.map((service, index) => (
              <button
                key={service.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`w-full group flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 border ${
                  activeTab === index
                    ? "bg-zinc-900 dark:bg-white border-transparent scale-105"
                    : "bg-transparent border-zinc-100 dark:border-white/5 hover:border-[#39FF14]/30"
                }`}
              >
                <span
                  className={`text-xl font-black italic ${activeTab === index ? "text-[#39FF14]" : "text-zinc-300 dark:text-zinc-700"}`}
                >
                  {service.id}
                </span>
                <div className="text-left">
                  <h3
                    className={`text-xl font-bold uppercase italic tracking-tight ${
                      activeTab === index
                        ? "text-white dark:text-black"
                        : "text-zinc-500"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <Maximize2
                  size={16}
                  className={`ml-auto transition-transform ${activeTab === index ? "text-[#39FF14] rotate-90" : "text-zinc-300 dark:text-zinc-800"}`}
                />
              </button>
            ))}
          </div>

          {/* RIGHT: DATA PREVIEW WINDOW */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative p-8 md:p-12 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 min-h-112.5 flex flex-col"
              >
                {/* Visual Icon background */}
                <div className="absolute top-10 right-10 opacity-5 dark:opacity-10 pointer-events-none">
                  {(() => {
                    const Icon = SERVICES[activeTab].icon;
                    return <Icon size={200} />;
                  })()}
                </div>

                <div className="relative z-10 flex-1">
                  <div className="flex gap-2 mb-8">
                    {SERVICES[activeTab].tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-4xl md:text-6xl font-black italic uppercase text-zinc-900 dark:text-white mb-6 leading-tight">
                    {SERVICES[activeTab].title}
                  </h4>

                  <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium mb-12 max-w-lg">
                    {SERVICES[activeTab].description}
                  </p>
                </div>

                {/* Technical "Footer" inside the box */}
                <div className="mt-auto pt-8 border-t border-zinc-200 dark:border-white/5">
                  <div className="flex items-center gap-3 text-[#39FF14]">
                    <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
                    <span className="text-[10px] font-mono tracking-[0.2em] font-bold uppercase">
                      Diagnostic_Output
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 overflow-hidden text-ellipsis whitespace-nowrap uppercase">
                    {SERVICES[activeTab].details}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
