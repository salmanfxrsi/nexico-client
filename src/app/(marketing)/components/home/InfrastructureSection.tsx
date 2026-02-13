"use client";

import { motion } from "framer-motion";
import { Globe2, Server, ShieldAlert, Cpu, Activity } from "lucide-react";

const STATS = [
  {
    label: "Active Nodes",
    value: "142",
    icon: Server,
    color: "text-[#39FF14]",
  },
  {
    label: "Global Latency",
    value: "24ms",
    icon: Activity,
    color: "text-blue-400",
  },
  {
    label: "Secure Handshakes",
    value: "1.2M",
    icon: ShieldAlert,
    color: "text-purple-400",
  },
  {
    label: "Processing Power",
    value: "8.4 PFLOPS",
    icon: Cpu,
    color: "text-orange-400",
  },
];

const NODES = [
  { city: "New York", x: "25%", y: "35%" },
  { city: "London", x: "48%", y: "28%" },
  { city: "Dhaka", x: "72%", y: "45%" },
  { city: "Tokyo", x: "85%", y: "35%" },
  { city: "Sydney", x: "88%", y: "80%" },
];

export default function InfrastructureSection() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 bg-[#39FF14]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <Globe2 size={16} className="text-[#39FF14]" />
            <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.5em] uppercase font-bold">
              Network_Backbone
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white mb-6">
            Global <span className="text-zinc-700">Infrastructure</span>
          </h2>

          <p className="max-w-2xl text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
            Our proprietary blade-server network is distributed across 14
            high-tier data centers, ensuring your applications remain resilient,
            fast, and always online.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm relative group overflow-hidden transition-colors hover:border-[#39FF14]/30"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#39FF14]/0 group-hover:border-[#39FF14]/40 transition-all rounded-tr-2xl" />

              <stat.icon size={24} className={`${stat.color} mb-6`} />

              <div className="space-y-1">
                <h4 className="text-3xl font-black text-white tracking-tighter italic uppercase">
                  {stat.value}
                </h4>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                  {stat.label}
                </p>
              </div>

              <div className="mt-6 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-linear-to-r from-[#39FF14] to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* NO-IMAGE HUD MAP DISPLAY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative w-full aspect-21/9 rounded-[3rem] border border-white/5 bg-[#080808] overflow-hidden group"
        >
          {/* Cyber Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(#39FF14 0.5px, transparent 0.5px), linear-gradient(90deg, #39FF14 0.5px, transparent 0.5px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Dynamic "Radar" Scan Bar */}
          <motion.div
            animate={{ translateY: ["-100%", "400%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#39FF14]/20 to-transparent pointer-events-none z-10"
          />

          {/* Abstract Data Visualizer (Center piece) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <div className="w-125 h-125 border border-[#39FF14] rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-75 h-75 border border-dashed border-[#39FF14] rounded-full animate-[spin_10s_linear_infinite_reverse]" />
          </div>

          {/* Live Node Pings */}
          {NODES.map((node, i) => (
            <div
              key={i}
              className="absolute z-20"
              style={{ left: node.x, top: node.y }}
            >
              <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full shadow-[0_0_15px_#39FF14]" />
              <motion.div
                animate={{ scale: [1, 4], opacity: [0.5, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.5,
                }}
                className="absolute inset-0 w-1.5 h-1.5 bg-[#39FF14] rounded-full"
              />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[7px] font-mono text-white bg-[#39FF14]/20 backdrop-blur-md px-2 py-1 rounded border border-[#39FF14]/30 whitespace-nowrap tracking-tighter uppercase font-bold">
                  {node.city}_NODE_ACTIVE
                </span>
              </div>
            </div>
          ))}

          {/* HUD Metadata Footer */}
          <div className="absolute bottom-8 left-10 flex items-center gap-6 z-30">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
              <span className="text-[9px] font-mono text-[#39FF14] uppercase tracking-[0.3em] font-black">
                Mainframe_Secure
              </span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[7px] font-mono text-zinc-600 uppercase">
                Traffic_Flow
              </span>
              <span className="text-[10px] font-mono text-white font-bold tracking-tighter">
                98.4 GB/S
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] font-mono text-zinc-600 uppercase">
                Uptime_Record
              </span>
              <span className="text-[10px] font-mono text-[#39FF14] font-bold">
                99.998%
              </span>
            </div>
          </div>

          {/* Decorative Corner Stats */}
          <div className="absolute top-8 right-10 text-right opacity-30 font-mono pointer-events-none">
            <p className="text-[8px] text-zinc-500 uppercase">
              System_Identifier
            </p>
            <p className="text-[11px] text-white font-black tracking-tighter uppercase">
              NXC-GLOBAL-NET
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
