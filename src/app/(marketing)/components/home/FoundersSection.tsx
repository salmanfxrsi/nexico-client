"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  ShieldCheck,
  Mail,
  MessageCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FoundersSection() {
  const myData = {
    name: "Salman Farsi",
    id: "NX-001",
    email: "salmanfarsi9005@gmail.com",
    role: "Founder & CEO",
    vision:
      "Young talent is our power. We strive to support the world with innovative technology and enable businesses to scale, evolve and thrive in the digital future.",
    image:
      "https://i.ibb.co.com/23Lfnkvd/Gemini-Generated-Image-r6k58r6k58r6k58r.png",
    whatsapp: "https://wa.me/8801754800757",
    socials: {
      github: "https://github.com/salmanfxrsi",
      linkedin: "https://www.linkedin.com/in/salmanfarsi9005/",
      instagram: "https://www.instagram.com/salmanfxrsi/",
      facebook: "https://www.facebook.com/salmanfarsi9005/",
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-[#030303] relative overflow-hidden transition-colors duration-500">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={16} className="text-[#39FF14]" />
            <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.5em] uppercase font-bold">
              Personnel_Database
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white leading-[0.85]">
            Core{" "}
            <span className="text-zinc-200 dark:text-zinc-800">
              Intelligence
            </span>
          </h2>
        </div>

        {/* SINGLE PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto lg:mx-0"
        >
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">
            {/* PORTRAIT SECTION - Fixed width and aspect syntax */}
            <div className="relative w-full lg:w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-white/10 group shadow-xl">
              <Image
                src={myData.image}
                alt={myData.name}
                fill
                priority
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              {/* Scanline & HUD Overlay - Fixed bg-size */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

              <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[#39FF14] text-[9px] font-mono font-bold tracking-widest uppercase animate-pulse">
                System_Node_01
              </div>

              {/* Fixed bg-gradient syntax */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

              {/* ID Label on Image */}
              <div className="absolute bottom-6 left-8">
                <p className="text-[#39FF14] font-mono text-[9px] tracking-[0.4em] uppercase mb-0.5 opacity-70">
                  AUTH_CREDENTIAL
                </p>
                <p className="text-white font-black text-xl italic tracking-tighter uppercase">
                  {myData.id}
                </p>
              </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="flex-1 space-y-8 lg:pt-2">
              <div className="space-y-4">
                <h3 className="text-5xl md:text-8xl font-black italic uppercase text-zinc-900 dark:text-white tracking-tighter leading-[0.9]">
                  {myData.name}
                </h3>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase bg-zinc-900 dark:bg-[#39FF14] text-white dark:text-black px-3 py-1 rounded-md font-bold">
                    {myData.role}
                  </span>
                  <Link
                    href={`mailto:${myData.email}`}
                    className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-zinc-500 hover:text-[#39FF14] transition-colors border border-zinc-200 dark:border-white/5 px-3 py-1 rounded-md"
                  >
                    <Mail size={12} /> {myData.email}
                  </Link>
                </div>
              </div>

              {/* VISION BLOCK */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF14]/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-7 md:p-9 rounded-[2rem] bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap size={14} className="text-[#39FF14]" />
                    <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.4em] uppercase font-bold">
                      Core_Vision
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold italic leading-tight text-zinc-800 dark:text-zinc-200 tracking-tight">
                    &quot;{myData.vision}&quot;
                  </p>
                </div>
              </div>

              {/* ACTION AREA */}
              <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                <Link
                  href={myData.whatsapp}
                  target="_blank"
                  className="group relative flex items-center gap-4 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-black uppercase italic text-[11px] tracking-[0.2em] hover:scale-105 transition-all shadow-xl"
                >
                  <MessageCircle size={18} fill="currentColor" />
                  Call_Me_Directly
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform"
                  />
                </Link>

                <div className="flex items-center gap-5">
                  {[
                    { Icon: Github, href: myData.socials.github },
                    { Icon: Linkedin, href: myData.socials.linkedin },
                    { Icon: Instagram, href: myData.socials.instagram },
                    { Icon: Facebook, href: myData.socials.facebook },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      className="text-zinc-400 hover:text-[#39FF14] transition-all hover:scale-110"
                    >
                      <social.Icon size={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BACKGROUND DECAL */}
          <div className="absolute -bottom-6 -right-4 text-[12rem] font-black text-zinc-100 dark:text-white/[0.02] select-none pointer-events-none -z-10 leading-none italic uppercase">
            001
          </div>
        </motion.div>
      </div>
    </section>
  );
}
