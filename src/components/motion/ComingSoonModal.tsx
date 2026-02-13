"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe, Shield } from "lucide-react";

export default function ComingSoonModal() {
  return (
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 bg-zinc-200/60 dark:bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
        >
          {/* Main Frame */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-125 overflow-hidden rounded-[2.5rem] border border-white dark:border-[#39FF14]/20 bg-white dark:bg-zinc-950 p-0.5 shadow-2xl dark:shadow-[0_0_60px_-15px_rgba(57,255,20,0.3)]"
          >
            {/* Internal Layer with Light Mode Gradient */}
            <div className="relative rounded-[2.4rem] bg-linear-to-b from-slate-50 to-white dark:from-zinc-900 dark:to-black p-10 text-center overflow-hidden">
              {/* Glows */}
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#39FF14]/10 dark:bg-[#39FF14]/15 blur-[90px]" />
              <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-zinc-400/10 dark:bg-white/5 blur-[90px]" />

              <div className="relative z-10">
                {/* Brand Core */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-8 w-fit"
                >
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-zinc-200 dark:border-[#39FF14]/30 bg-white dark:bg-[#39FF14]/5 shadow-sm dark:shadow-inner">
                    <Shield
                      size={48}
                      className="text-zinc-400 dark:text-zinc-300 drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                    />

                    {/* Scanning Green Line */}
                    <motion.div
                      animate={{ top: ["10%", "90%", "10%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-0 right-0 h-0.5 bg-[#39FF14] shadow-[0_0_10px_#39FF14] z-20"
                    />
                  </div>
                </motion.div>

                {/* Branding */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-white mb-1 uppercase italic">
                    NEX<span className="text-[#39FF14]">ICO</span>
                  </h2>

                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 mb-8 font-bold">
                    Smart Software{" "}
                    <span className="text-zinc-500 dark:text-zinc-300">
                      Smarter Business
                    </span>
                  </p>

                  <p className="uppercase text-lg font-semibold text-zinc-800 dark:text-white mb-2">
                    Engineers at Work
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed px-6 mb-10 uppercase">
                    We are deploying the next generation of Nexico. Systems are
                    currently being optimized for peak performance.
                  </p>
                </motion.div>

                {/* Progress Integration */}
                <div className="space-y-4 px-2">
                  <div className="flex justify-between items-end font-mono">
                    <span className="text-[10px] uppercase text-[#39FF14] tracking-widest animate-pulse font-bold">
                      Initializing_Core
                    </span>
                    <span className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tighter">
                      5%
                    </span>
                  </div>

                  <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-200/50 dark:bg-zinc-900 border border-zinc-300 dark:border-white/5">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 4, ease: "circOut" }}
                      className="h-full rounded-full bg-linear-to-r from-zinc-400 via-[#39FF14] to-[#2bff00] shadow-[0_0_15px_rgba(57,255,20,0.4)]"
                    />
                  </div>
                </div>

                {/* Footer Stats */}
                <div className="mt-12 flex items-center justify-center gap-6 border-t border-zinc-200 dark:border-white/5 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#39FF14] animate-ping" />
                    <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono">
                      Live Build
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600">
                    <Globe size={12} />
                    <span className="text-[9px] font-bold uppercase tracking-widest font-mono">
                      v1.0.26
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}
