"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-black">
      {/* The Split Grid Background */}
      <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none">
        {/* Left Side: Subtle Silver Grid */}
        <div
          className="flex-1 opacity-[0.05] dark:opacity-[0.1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 1h58v58H1V1z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Right Side: Nexico Green Grid */}
        <div
          className="flex-1 opacity-[0.1] dark:opacity-[0.2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 1h58v58H1V1z' fill='%2339FF14' fill-opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-zinc-500 font-bold mb-4 block">
            Global Deployment in Progress
          </span>
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-zinc-900 dark:text-white uppercase mb-4">
            Building the <br />
            Future of <span className="text-[#39FF14]">Software</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-medium tracking-wide uppercase">
            Nexico architectures high-performance digital systems <br />
            <span className="text-zinc-800 dark:text-zinc-200">
              Smart Software Smarter Business
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="px-8 py-4 bg-[#39FF14] text-black font-black uppercase italic tracking-widest rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(57,255,20,0.3)]">
              Explore Infrastructure
            </button>
            <button className="px-8 py-4 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-all">
              Our Agency
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Status Indicator */}
      <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#39FF14] animate-ping" />
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          Nexico_Core_V1.0
        </span>
      </div>
    </section>
  );
}
