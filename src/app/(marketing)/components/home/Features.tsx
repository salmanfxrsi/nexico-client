"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ShoppingBag,
  LayoutTemplate,
  Box,
  Smartphone,
  Layers,
  Zap,
  MousePointer2,
} from "lucide-react";

const capabilities = [
  {
    title: "MERN & Next.js Systems",
    desc: "Architecting high-performance full-stack applications with React and Node.js for scalable enterprise growth.",
    icon: Code2,
    className: "md:col-span-2 md:row-span-2 bg-[#39FF14] text-black",
  },
  {
    title: "Nexico Product Lab",
    desc: "Incubating proprietary SaaS tools and digital assets built for the 2026 economy.",
    icon: Box,
    tag: "IN-HOUSE",
    className:
      "md:col-span-2 md:row-span-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black",
  },
  {
    title: "UI/UX Architecture",
    desc: "High-fidelity interface design and user-journey engineering with a focus on conversion logic.",
    icon: MousePointer2,
    className:
      "md:col-span-1 md:row-span-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border-b-4 border-b-[#39FF14]/30",
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile solutions built with React Native for iOS and Android ecosystems.",
    icon: Smartphone,
    className:
      "md:col-span-1 md:row-span-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white",
  },
  {
    title: "Shopify Engine",
    desc: "High-conversion commerce architectures and custom Liquid engineering.",
    icon: ShoppingBag,
    className:
      "md:col-span-1 md:row-span-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white",
  },
  {
    title: "WP Infrastructure",
    desc: "Headless WordPress setups and enterprise-grade business sites for global scale.",
    icon: LayoutTemplate,
    className:
      "md:col-span-1 md:row-span-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white",
  },
  {
    title: "Business Solutions",
    desc: "Strategic tech consulting and digital transformation for scaling modern brands.",
    icon: Layers,
    className:
      "md:col-span-2 md:row-span-1 border-dashed border-2 border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Tech Watermark */}
      <div className="absolute top-20 left-10 text-[12vw] font-black text-zinc-500/5 select-none pointer-events-none italic tracking-tighter">
        MATRIX_v1.0
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#39FF14] font-black mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-[#39FF14]"></span> Ecosystem Overview
          </h2>
          <h3 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white leading-[0.85]">
            Unified <br />
            <span className="opacity-30">Development</span>
          </h3>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className={`relative p-8 rounded-[2.5rem] flex flex-col justify-between overflow-hidden border border-zinc-200 dark:border-white/5 group transition-all duration-300 ${item.className}`}
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-current/10 group-hover:bg-[#39FF14] group-hover:text-black transition-colors duration-500">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  {item.tag && (
                    <span className="text-[8px] font-mono font-bold border border-current px-2 py-0.5 rounded-full animate-pulse">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-black uppercase italic tracking-tighter mb-2 leading-none">
                  {item.title}
                </h4>
                <p className="text-[10px] font-bold opacity-70 leading-relaxed uppercase tracking-wide max-w-60">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Decorative Interaction */}
              <div className="relative z-10 flex justify-between items-center mt-4">
                <div className="h-px flex-1 bg-current opacity-20 mr-4" />
                <Zap
                  size={10}
                  className="opacity-40 group-hover:opacity-100 group-hover:text-[#39FF14] group-hover:scale-125 transition-all"
                />
              </div>

              {/* Background Icon Ghost */}
              <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.08] group-hover:rotate-12 group-hover:scale-110 transition-all duration-700">
                <item.icon size={160} />
              </div>

              {/* Unique hover effect for UI/UX card */}
              {item.title === "UI/UX Architecture" && (
                <div className="absolute inset-0 bg-linear-to-tr from-[#39FF14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
