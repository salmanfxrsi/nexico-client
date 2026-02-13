"use client";

import { useState } from "react";
import ComingSoonModal from "@/components/motion/ComingSoonModal";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";

export default function HomePage() {
  const [isMaintenanceMode] = useState(false);

  return (
    <main className="relative min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* Modal */}
      {isMaintenanceMode && <ComingSoonModal />}

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <Hero />

      {/* Features Section*/}
      <Features />

      {/* Footer */}
      <Footer />
    </main>
  );
}
