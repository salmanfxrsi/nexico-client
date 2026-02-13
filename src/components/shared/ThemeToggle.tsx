"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 transition-colors group overflow-hidden"
    >
      <div className="relative z-10">
        {theme === "dark" ? (
          <Sun size={16} className="text-[#39FF14]" />
        ) : (
          <Moon size={16} className="text-zinc-900" />
        )}
      </div>

      {/* Decorative scanline effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#39FF14]/5 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    </motion.button>
  );
}