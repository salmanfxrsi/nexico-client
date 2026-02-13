"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Cpu,
  Globe,
  ShieldCheck,
  ChevronRight,
  Database,
  Zap,
  Layers,
  Activity,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    id: "instagram",
    icon: Instagram,
    href: "https://www.instagram.com/nexicotech/",
  },
  {
    id: "facebook",
    icon: Facebook,
    href: "https://www.facebook.com/nexicotech/",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/nexicotech/",
  },
  { id: "github", icon: Github, href: "https://github.com/salmanfxrsi" },
];

const PLATFORM_LINKS = [
  { name: "Solutions", icon: Zap },
  { name: "Infrastructure", icon: Database },
  { name: "Security", icon: ShieldCheck },
  { name: "Agency", icon: Layers },
];

const COMPANY_LINKS = ["About", "Careers", "Journal", "Contact"];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date());
  const [milli, setMilli] = useState("000");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      setMilli(now.getMilliseconds().toString().padStart(3, "0"));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative w-full border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-black overflow-hidden pt-16 pb-8">
      {/* Background Decorative Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%2339FF14' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Terminal Column */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-8">
              <div className="relative h-10 w-32">
                <Image
                  src="/logo.png"
                  alt="Nexico Brand"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Link>

            <div className="group relative max-w-65 mb-8 p-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-[#39FF14]/50 transition-all shadow-2xl overflow-hidden">
              {/* Subtle CPU trace lines in terminal */}
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:rotate-12 transition-transform">
                <Cpu size={32} className="text-[#39FF14]" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  <div className="h-1 w-1 rounded-full bg-red-500/50" />
                  <div className="h-1 w-1 rounded-full bg-yellow-500/50" />
                  <div className="h-1 w-1 rounded-full bg-[#39FF14]/50" />
                </div>
                <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-tighter">
                  root@nexico_blade_01
                </span>
              </div>
              <div className="flex items-center gap-1 relative z-10">
                <ChevronRight
                  size={10}
                  className="text-[#39FF14] animate-pulse"
                />
                <input
                  type="email"
                  placeholder="EXEC_SSH_HANDSHAKE"
                  className="w-full bg-transparent border-none text-[9px] font-mono text-zinc-300 outline-none placeholder:text-zinc-700 uppercase"
                />
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.id}
                  whileHover={{ y: -3 }}
                  href={social.href}
                  className="text-zinc-400 hover:text-[#39FF14] transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links: Platform with Hardware Icons */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 opacity-50 flex items-center gap-2">
              <Layers size={12} className="text-[#39FF14]" /> Platform
            </h4>
            <ul className="space-y-4">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-[#39FF14] text-xs font-bold transition-all"
                  >
                    <link.icon
                      size={12}
                      className="opacity-40 group-hover:opacity-100"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 opacity-50 flex items-center gap-2">
              <Globe size={12} className="text-[#39FF14]" /> Company
            </h4>
            <ul className="space-y-4">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-500 dark:text-zinc-400 hover:text-[#39FF14] text-xs font-bold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* System Status: Enhanced Hardware Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 relative overflow-hidden h-fit group shadow-2xl"
          >
            {/* Background Hardware Deco */}
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cpu size={100} strokeWidth={1} className="text-[#39FF14]" />
            </div>

            <div className="relative z-10 font-mono">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-[#39FF14]" />
                  <h4 className="text-zinc-900 dark:text-white font-black text-[10px] uppercase tracking-[0.2em]">
                    Kernel_Status
                  </h4>
                </div>
                <div className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-500 text-[8px] uppercase font-bold flex items-center gap-1">
                    <Zap size={8} /> Local_Node_Time
                  </span>
                  <div className="text-zinc-900 dark:text-white text-lg font-black tracking-tighter tabular-nums">
                    {time.toLocaleTimeString("en-US", {
                      hour12: false,
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                    <span className="text-[#39FF14] text-xs ml-1 opacity-50">
                      .{milli}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px]">
                  <span className="text-zinc-500 uppercase font-bold">
                    Uptime
                  </span>
                  <span className="text-[#39FF14] font-black tracking-tighter">
                    99.998% ACTIVE
                  </span>
                </div>

                {/* Hardware Load Simulator */}
                <div className="grid grid-cols-4 gap-1 h-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-zinc-200 dark:bg-zinc-900 rounded-full overflow-hidden"
                    >
                      <motion.div
                        animate={{
                          height: ["100%"],
                          width: ["10%", "90%", "40%", "80%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className="h-full bg-[#39FF14]/40"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 dark:border-white/5 gap-6">
          <div className="flex items-center gap-4">
            <span className="text-zinc-400 text-[9px] uppercase font-black tracking-widest">
              © {currentYear} NEXICO_SYSTEMS
            </span>
            <div className="h-1 w-1 rounded-full bg-zinc-800" />
            <span className="text-[8px] font-mono text-zinc-600 uppercase">
              Latency: 14ms
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#39FF14]/20 bg-zinc-950 shadow-[0_0_15px_rgba(57,255,20,0.05)]">
            <Cpu size={12} className="text-[#39FF14] animate-spin-slow" />
            <span className="text-[8px] font-mono text-[#39FF14] uppercase font-bold">
              Secure_Auth: Verified
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </footer>
  );
}
