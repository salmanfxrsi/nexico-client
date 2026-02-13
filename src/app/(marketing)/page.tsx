"use client";

import { useState } from "react";
import ComingSoonModal from "@/components/motion/ComingSoonModal";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import EngineRoom from "./components/home/EngineRoom";
import CurrentBuild from "./components/home/CurrentBuild";
import FoundersSection from "./components/home/FoundersSection";
import InfrastructureSection from "./components/home/InfrastructureSection";
import ServicesMatrix from "./components/home/ServicesMatrix";
import ContactTerminal from "./components/home/ContactTerminal";

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

      {/* Engine Room Section */}
      <EngineRoom />

      <CurrentBuild />

      <FoundersSection />

      <InfrastructureSection />

      <ServicesMatrix />

      <ContactTerminal />

      {/* Footer */}
      <Footer />
    </main>
  );
}
