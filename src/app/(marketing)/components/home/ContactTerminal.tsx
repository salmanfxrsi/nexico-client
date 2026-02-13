"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";

export default function ContactTerminal() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE: STATUS PANEL */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Terminal size={16} className="text-[#39FF14]" />
                  <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.5em] uppercase font-bold">
                    Communication_Link
                  </span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white leading-[0.8]">
                  Initiate{" "}
                  <span className="text-zinc-300 dark:text-zinc-800">
                    Uplink
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium italic max-w-md">
                  Ready to deploy your next digital asset? Establish a secure
                  connection with our core team.
                </p>

                {/* Live System Feed */}
                <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 font-mono text-[10px] space-y-2">
                  <div className="flex justify-between text-[#39FF14]">
                    <span>STATUS:</span>
                    <span className="animate-pulse">LISTENING_FOR_INPUT</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>ENCRYPTION:</span>
                    <span>RSA_4096_BIT</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>LOCATION:</span>
                    <span>DHAKA_NODE_01</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: THE TERMINAL FORM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-8 md:p-12 rounded-[3rem] bg-zinc-900 dark:bg-zinc-900/40 border border-zinc-800 dark:border-white/10 shadow-2xl backdrop-blur-xl"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-4">
                      Subject_Identity
                    </label>
                    <input
                      type="text"
                      placeholder="NAME"
                      className="w-full bg-zinc-800/50 dark:bg-black/30 border border-zinc-700 dark:border-white/5 rounded-2xl px-6 py-4 text-white font-mono text-sm focus:border-[#39FF14] outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-4">
                      Return_Path
                    </label>
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="w-full bg-zinc-800/50 dark:bg-black/30 border border-zinc-700 dark:border-white/5 rounded-2xl px-6 py-4 text-white font-mono text-sm focus:border-[#39FF14] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-4">
                    Transmission_Data
                  </label>
                  <textarea
                    rows={4}
                    placeholder="DESCRIBE_PROJECT_SCOPE"
                    className="w-full bg-zinc-800/50 dark:bg-black/30 border border-zinc-700 dark:border-white/5 rounded-3xl px-6 py-4 text-white font-mono text-sm focus:border-[#39FF14] outline-none transition-colors resize-none"
                  />
                </div>

                <button className="group w-full flex items-center justify-center gap-4 bg-[#39FF14] text-black font-black uppercase italic py-5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                  <Send size={18} />
                  Execute_Transmission
                </button>
              </form>

              {/* Decorative HUD Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#39FF14]/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>

        {/* Footer Links (Subtle) */}
        <div className="mt-24 pt-12 border-t border-zinc-200 dark:border-white/5 flex flex-wrap justify-between gap-8 opacity-50">
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
                Lat_Long
              </span>
              <span className="text-[10px] font-mono text-zinc-900 dark:text-white uppercase tracking-tighter">
                23.8103° N, 90.4125° E
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
                Status
              </span>
              <span className="text-[10px] font-mono text-[#39FF14] uppercase tracking-tighter">
                Encrypted_Online
              </span>
            </div>
          </div>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            © 2026 NEXICO_SYSTEMS. ALL_RIGHTS_RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
}
