"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Layout,
  Database,
  Server,
  ArrowRight,
  Instagram,
  Facebook,
  Cpu,
  Languages,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CurrentBuild() {
  const [showArch, setShowArch] = useState(false);
  const [time, setTime] = useState<string>("--:--:--");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };

    const timeoutId = setTimeout(updateTime, 0);

    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  const panelVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-24 bg-white dark:bg-[#030303] relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#39FF14]/10 dark:bg-[#39FF14]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
              </span>
              <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.4em] uppercase font-bold">
                Live_Deployment_Monitoring
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white">
              Current{" "}
              <span className="text-zinc-300 dark:text-zinc-800">Build</span>
            </h2>
          </div>

          <Link
            href="https://zupermart-client.vercel.app"
            target="_blank"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-black uppercase italic text-[11px] tracking-widest hover:scale-105 transition-all shadow-lg"
          >
            Launch_Live_Site
            <ExternalLink
              size={14}
              className="group-hover:rotate-12 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] bg-zinc-100/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-xl shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              {!showArch ? (
                <motion.div
                  key="brand"
                  variants={panelVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-zinc-900 dark:bg-[#39FF14] flex items-center justify-center shadow-lg shadow-[#39FF14]/20">
                        <Globe
                          size={24}
                          className="text-[#39FF14] dark:text-black"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl lg:text-xl font-black italic uppercase tracking-tighter text-zinc-900 dark:text-white leading-none">
                          Zuper Mart
                        </h3>
                        <p className="text-[10px] font-mono text-[#39FF14] uppercase tracking-widest mt-1 font-bold">
                          Retail Ecosystem
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="https://instagram.com/zupermartbd/"
                        target="_blank"
                        className="p-2 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-400 hover:text-[#39FF14] transition-colors"
                      >
                        <Instagram size={16} />
                      </Link>
                      <Link
                        href="https://www.facebook.com/zupermartbd/"
                        target="_blank"
                        className="p-2 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-400 hover:text-[#39FF14] transition-colors"
                      >
                        <Facebook size={16} />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1">
                        <Layout size={12} className="text-[#39FF14]" />
                        <span className="text-[9px] font-mono uppercase tracking-widest font-bold">
                          Frontend
                        </span>
                      </div>
                      <div className="text-xs font-black text-zinc-900 dark:text-white uppercase italic">
                        Next.js + Tailwind
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1">
                        <Server size={12} className="text-[#39FF14]" />
                        <span className="text-[9px] font-mono uppercase tracking-widest font-bold">
                          Backend
                        </span>
                      </div>
                      <div className="text-xs font-black text-zinc-900 dark:text-white uppercase italic">
                        Node + Express
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1">
                        <Database size={12} className="text-[#39FF14]" />
                        <span className="text-[9px] font-mono uppercase tracking-widest font-bold">
                          Database
                        </span>
                      </div>
                      <div className="text-xs font-black text-zinc-900 dark:text-white uppercase italic">
                        MongoDB Atlas
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1">
                        <Languages size={12} className="text-[#39FF14]" />
                        <span className="text-[9px] font-mono uppercase tracking-widest font-bold">
                          Languages
                        </span>
                      </div>
                      <div className="text-xs font-black text-zinc-900 dark:text-white uppercase italic">
                        TypeScript + ES6
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="arch"
                  variants={panelVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between border-b border-zinc-200 dark:border-[#39FF14]/10 pb-6">
                    <span className="text-[10px] font-mono text-[#39FF14] tracking-widest uppercase">
                      Hardware_Blueprint
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { l: "Logic", v: "RESTful API / JSON", i: Cpu },
                      { l: "Security", v: "JWT Authentication", i: Database },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-6 p-4 rounded-2xl border border-zinc-200 dark:border-transparent bg-white/50 dark:bg-transparent hover:border-[#39FF14]/20 transition-colors"
                      >
                        <row.i
                          className="text-zinc-400 dark:text-zinc-500"
                          size={20}
                        />
                        <div>
                          <div className="text-[9px] font-mono text-zinc-500 uppercase">
                            {row.l}
                          </div>
                          <div className="text-xs font-bold text-zinc-900 dark:text-white uppercase">
                            {row.v}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShowArch(!showArch)}
              className="mt-12 group flex items-center justify-between w-full p-2 pl-6 rounded-2xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 transition-all active:scale-[0.98] shadow-sm"
            >
              <span className="text-[10px] font-black uppercase italic tracking-widest text-zinc-500 dark:text-zinc-400">
                {showArch ? "System_Exit" : "View_System_Architecture"}
              </span>
              <div className="h-10 w-10 rounded-xl bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-[#39FF14] group-hover:text-black transition-all">
                <ArrowRight
                  size={18}
                  className={showArch ? "-rotate-90" : ""}
                />
              </div>
            </button>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative h-full min-h-150 rounded-[3rem] overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl bg-zinc-950 group/preview">
              <div className="absolute top-0 left-0 right-0 h-12 bg-zinc-900/90 backdrop-blur-md z-30 flex items-center px-8 border-b border-white/5">
                <div className="flex gap-2 mr-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                  Runtime_Viewer.exe
                </div>
              </div>

              <div className="relative h-full pt-12">
                <Image
                  src="https://i.ibb.co.com/v6hxkY6V/Litemood.jpg"
                  alt="Preview"
                  fill
                  className="object-cover object-top transition-all duration-10000 ease-in-out select-none"
                />
                <style jsx>{`
                  .group\/preview:hover img {
                    object-position: bottom !important;
                  }
                `}</style>
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70" />
              </div>

              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center z-20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
                    <span className="text-xs font-black italic text-white uppercase tracking-widest">
                      Live System
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-tight font-bold">
                    Sync: {time}
                  </div>
                </div>
                <div className="px-5 py-2.5 rounded-xl bg-[#39FF14] text-black font-black uppercase italic text-[11px] shadow-[0_0_30px_rgba(57,255,20,0.3)]">
                  LIVE_PREVIEW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
