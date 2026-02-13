"use client";

import { useState } from "react";
import ComingSoonModal from "@/components/motion/ComingSoonModal";

export default function HomePage() {
  const [isMaintenanceMode] = useState(true);

  return (
    <main className="relative min-h-screen bg-black">
      {/* Modal */}
      {isMaintenanceMode && <ComingSoonModal />}
    </main>
  );
}
