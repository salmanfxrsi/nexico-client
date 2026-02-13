"use client";

import Marquee from "react-fast-marquee";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiShopify,
  SiWordpress,
  SiReact,
  SiNodedotjs,
  SiFigma,
  SiAmazonwebservices,
  SiTypescript,
  SiPrisma,
  SiExpo,
  SiSupabase,
  SiSwift,
  SiFlutter,
  SiExpress,
} from "react-icons/si";
import { Activity, Cpu } from "lucide-react";

const TECH_STACK = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "React Native", icon: SiReact },
  { name: "Expo", icon: SiExpo },
  { name: "Supabase", icon: SiSupabase },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Swift", icon: SiSwift },
  { name: "Flutter", icon: SiFlutter },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Prisma", icon: SiPrisma },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "Shopify", icon: SiShopify },
  { name: "WordPress", icon: SiWordpress },
  { name: "Figma", icon: SiFigma },
];

export default function EngineRoom() {
  return (
    <section className="py-24 bg-white dark:bg-[#050505] border-y border-zinc-100 dark:border-white/5 relative overflow-hidden">
      {/* Background Decorative Grid/Lines */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 backdrop-blur-md">
              <Activity size={10} className="text-[#39FF14] animate-pulse" />
              <span className="text-[10px] font-mono font-black tracking-widest text-[#39FF14] uppercase">
                System_Core: Active
              </span>
            </div>
            <h3 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white leading-[0.8] mb-2">
              The <span className="opacity-20">Engine</span> Room
            </h3>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              Deployment protocols synchronized
            </p>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
                Mobile_Runtime
              </div>
              <div className="text-xs font-black text-zinc-900 dark:text-white italic">
                OPTIMIZED_v2.0
              </div>
            </div>
            <div className="h-12 w-px bg-zinc-200 dark:bg-zinc-800" />
            <Cpu
              className="text-[#39FF14] opacity-50"
              size={32}
              strokeWidth={1}
            />
          </div>
        </div>
      </div>

      {/* Main Tech Marquee */}
      <div className="relative group">
        {/* Cinematic Masking */}
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-white dark:from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-white dark:from-[#050505] to-transparent z-20 pointer-events-none" />

        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {TECH_STACK.map((tech, i) => (
            <div key={i} className="mx-6 group/item relative py-4">
              <div className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/50 dark:border-white/5 backdrop-blur-xl hover:border-[#39FF14]/40 transition-all duration-700 group-hover:dark:bg-zinc-900/40">
                {/* Icon Container with Glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#39FF14]/20 blur-2xl rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-3 rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 group-hover/item:border-[#39FF14]/50 group-hover/item:scale-110 transition-all duration-500 shadow-xl">
                    <tech.icon
                      size={32}
                      className="text-zinc-400 group-hover/item:text-[#39FF14] transition-colors duration-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-black italic uppercase tracking-tighter text-zinc-400 dark:text-zinc-600 group-hover/item:text-zinc-900 dark:group-hover/item:text-white transition-colors">
                    {tech.name}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <div className="h-1 w-1 rounded-full bg-[#39FF14] animate-pulse" />
                    <span className="text-[8px] font-mono text-[#39FF14]">
                      LOADED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Secondary Data Marquee */}
      <div className="mt-12 opacity-30">
        <Marquee speed={30} direction="right">
          <div className="flex gap-20 font-mono text-[9px] uppercase tracking-[0.5em] text-zinc-500 py-2">
            <span>Next_JS_Framework_SEO</span>
            <span>Express_Framework_Core</span>
            <span>React_Native_Thread_Safe</span>
            <span>MongoDB_Atlas_Cloud</span>
            <span>Supabase_Realtime_Sync</span>
            <span>Tailwind_JIT_Compiler</span>
            <span>AWS_Edge_Deployment</span>
          </div>
        </Marquee>
      </div>

      {/* Bottom Subtle Label */}
      <div className="absolute bottom-4 right-10 text-[8vw] font-black text-zinc-500/5 select-none pointer-events-none italic tracking-tighter">
        FULL_STACK_MOBILE
      </div>
    </section>
  );
}
