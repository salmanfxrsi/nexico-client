// src/app/(dashboards)/layout.tsx

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: DashboardLayoutProps) {
  return (
    <section className="min-h-screen flex bg-gray-50">
      {/* This is where you will later add your Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden md:block p-6">
        <h2 className="font-bold text-xl">Nexico Marketing</h2>
        <nav className="mt-10 space-y-4">
          <div className="text-gray-400 text-xs uppercase">Management</div>
          <p className="text-sm">Overview</p>
          <p className="text-sm">Settings</p>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </section>
  );
}