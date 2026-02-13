"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, Database, ChevronRight } from "lucide-react";

const FAQS = [
  {
    query: "DB_QUERY: PROJECT_TIMELINE",
    answer: "Standard delivery cycles range from 4 to 12 weeks depending on architectural complexity. High-priority 'Blitz' deployments are available for critical-path assets.",
    tag: "LOGISTICS"
  },
  {
    query: "DB_QUERY: STACK_FLEXIBILITY",
    answer: "While we specialize in the Nexico-Blade stack (Next.js, Rust, Go), we integrate seamlessly with existing legacy systems via custom API middleware layers.",
    tag: "TECH_SPECS"
  },
  {
    query: "DB_QUERY: POST_LAUNCH_SUPPORT",
    answer: "Every deployment includes 3 months of 'Active-Watch' monitoring, covering security patches, performance scaling, and core maintenance.",
    tag: "RELIABILITY"
  },
  {
    query: "DB_QUERY: PRICING_MODEL",
    answer: "We operate on a 'Value-Target' basis. No hidden hourly fees. We quote based on the complexity of the engineering required to achieve your business goals.",
    tag: "FINANCE"
  }
];

export default function KnowledgeBase() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <Database size={16} className="text-[#39FF14]" />
              <span className="text-[10px] font-mono text-[#39FF14] tracking-[0.5em] uppercase font-bold">
                Knowledge_Base_v.1
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-zinc-900 dark:text-white leading-none">
              System <span className="text-zinc-200 dark:text-zinc-800">Queries</span>
            </h2>
          </div>
          <div className="text-right font-mono text-[10px] text-zinc-400 uppercase tracking-widest border-l md:border-l-0 md:border-r border-[#39FF14] pr-4 md:pl-4">
            <p>Ready_for_Input</p>
            <p className="text-[#39FF14]">Access_Level: Public</p>
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="group border border-zinc-200 dark:border-white/5 rounded-3xl bg-white dark:bg-zinc-900/30 overflow-hidden transition-all duration-300 hover:border-[#39FF14]/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left outline-none"
              >
                <div className="flex items-center gap-6">
                  <span className={`font-mono text-[10px] transition-colors duration-500 ${openIndex === index ? "text-[#39FF14]" : "text-zinc-400"}`}>
                    [0{index + 1}]
                  </span>
                  <h3 className={`text-xl md:text-2xl font-bold uppercase italic tracking-tight transition-colors duration-500 ${openIndex === index ? "text-zinc-900 dark:text-white" : "text-zinc-500"}`}>
                    {faq.query}
                  </h3>
                </div>
                <div className={`p-2 rounded-full border transition-all duration-500 ${openIndex === index ? "bg-[#39FF14] border-[#39FF14] rotate-180" : "border-zinc-200 dark:border-white/10"}`}>
                  {openIndex === index ? <Minus size={16} className="text-black" /> : <Plus size={16} className="text-zinc-400" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <div className="px-8 pb-8 pt-0 ml-16 flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-1 h-auto self-stretch bg-[#39FF14]/20 rounded-full" />
                      <div className="flex-1 space-y-4">
                        <span className="text-[9px] font-mono font-black text-[#39FF14] bg-[#39FF14]/10 px-2 py-1 rounded">
                          DATA_RETRIEVED // {faq.tag}
                        </span>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 flex flex-col items-center">
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-6">Didn&apos;t find the specific string?</p>
          <button className="flex items-center gap-4 group text-zinc-900 dark:text-white">
            <span className="font-black italic uppercase text-2xl group-hover:text-[#39FF14] transition-colors">Open_Custom_Query</span>
            <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center group-hover:bg-[#39FF14] group-hover:border-[#39FF14] transition-all duration-500">
               <ChevronRight size={18} className="group-hover:text-black transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}