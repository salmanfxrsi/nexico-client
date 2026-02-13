"use client";

import { useState } from "react";

// Layout & Navigation
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ComingSoonModal from "@/components/motion/ComingSoonModal";

// Core Content
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import PartnerMarquee from "./components/home/PartnerMarquee";

// Identity & Logic
import FoundersSection from "./components/home/FoundersSection";
import AssetRoster from "./components/home/AssetRoster";

// Technical Depth
import InfrastructureSection from "./components/home/InfrastructureSection";
import EngineRoom from "./components/home/EngineRoom";
import CurrentBuild from "./components/home/CurrentBuild";

// Capabilities & Performance
import ServicesMatrix from "./components/home/ServicesMatrix";
import PerformanceBenchmark from "./components/home/PerformanceBenchmark";
import ProcessPipeline from "./components/home/ProcessPipeline";

// Proof & Engagement
import SystemLog from "./components/home/SystemLog";
import KnowledgeBase from "./components/home/KnowledgeBase";
import ContactTerminal from "./components/home/ContactTerminal";
import FinalDirective from "./components/home/FinalDirective";
import CommandTrigger from "@/components/shared/CommandTrigger";

export default function HomePage() {
  const [isMaintenanceMode] = useState(false);

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-500 flex flex-col">
      {isMaintenanceMode && <ComingSoonModal />}
      
      <Navbar />

      <main className="flex-grow">
        {/* Phase 1: Identity & Hook */}
        <Hero />
        <PartnerMarquee />
        <FoundersSection />
        
        {/* Phase 2: Technical Infrastructure */}
        <InfrastructureSection />
        <EngineRoom />
        <CurrentBuild />
        
        {/* Phase 3: Capabilities & Strategy */}
        <ServicesMatrix />
        <PerformanceBenchmark />
        <Features />
        
        {/* Phase 4: Method & People */}
        <ProcessPipeline />
        <AssetRoster />
        
        {/* Phase 5: Knowledge & Contact */}
        <SystemLog />
        <KnowledgeBase />
        <ContactTerminal />
        <FinalDirective />
      </main>

      <Footer />

      <CommandTrigger />
    </div>
  );
}