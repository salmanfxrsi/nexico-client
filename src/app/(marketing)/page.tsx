"use client";

import { useState } from "react";
import ComingSoonModal from "@/components/motion/ComingSoonModal";
import Navbar from "@/components/shared/Navbar";

export default function HomePage() {
  const [isMaintenanceMode] = useState(false);

  return (
    <main className="relative min-h-screen">
      {/* Modal */}
      {isMaintenanceMode && <ComingSoonModal />}

      {/* Navbar */}
      <Navbar />
    </main>
  );
}
