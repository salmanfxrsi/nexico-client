"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, BarChart3, Target, Gauge } from "lucide-react";

const METRICS = [
  {
    label: "Deployment Velocity",
    icon: Zap,
    legacy: "Weeks",
    nexico: "Minutes",
    percent: 98,
  },
  {
    label: "Core Latency",
    icon: Gauge,
    legacy: "450ms+",
    nexico: "<20ms",
    percent: 95,
  },
  {
    label: "Security Protocol",
    icon: ShieldCheck,
    legacy: "Standard",
    nexico: "RSA-4096",
    percent: 100,
  },
  {
    label: "Resource Overhead",
    icon: BarChart3,
    legacy: "High",
    nexico: "Optimized",
    percent: 82,
  },
];

export default function PerformanceBenchmark() {
  return (
    <section className="py-24 bg-white dark:bg-[#030303] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Target size={16} className="text-[#39FF14]" />
            <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.5em] uppercase font-bold">
              Efficiency_Benchmark
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white leading-none">
            Nexico <span className="text-zinc-200 dark:text-zinc-800">vs</span> Legacy
          </h2>
          <p className="mt-6 text-zinc-500 dark:text-zinc-400 font-medium italic text-xl">
            Hard metrics. No fluff. We outperform standard industry architectures across every critical vector.
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid gap-4">
          {METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid md:grid-cols-12 items-center p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-white/5 hover:border-[#39FF14]/30 transition-all duration-500"
            >
              {/* Metric Label */}
              <div className="md:col-span-4 flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-white dark:bg-black border border-zinc-100 dark:border-white/10 text-zinc-400 group-hover:text-[#39FF14] transition-colors">
                  <metric.icon size={24} />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Vector_{index + 1}</h4>
                  <p className="text-xl font-black italic uppercase text-zinc-900 dark:text-white">{metric.label}</p>
                </div>
              </div>

              {/* Legacy State */}
              <div className="md:col-span-2 py-4 md:py-0">
                <p className="font-mono text-[9px] text-zinc-400 uppercase mb-1">Legacy_STD</p>
                <p className="text-xl font-bold text-zinc-300 dark:text-zinc-700 uppercase italic line-through">{metric.legacy}</p>
              </div>

              {/* Nexico State */}
              <div className="md:col-span-2 py-4 md:py-0">
                <p className="font-mono text-[9px] text-[#39FF14] uppercase mb-1">Nexico_OPT</p>
                <p className="text-2xl font-black text-[#39FF14] uppercase italic tracking-tighter">{metric.nexico}</p>
              </div>

              {/* Visualization Bar */}
              <div className="md:col-span-4 flex items-center gap-4">
                <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.percent}%` }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-[#39FF14] to-zinc-400 dark:to-zinc-600"
                  />
                </div>
                <span className="font-mono text-[10px] text-zinc-400">{metric.percent}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SYSTEM NOTE */}
        <div className="mt-12 flex items-center justify-center gap-4 py-4 border-y border-zinc-100 dark:border-white/5">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em]">Verified_by_Nexico_Internal_Audit</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
        </div>
      </div>
    </section>
  );
}