"use client";

import { useState, useMemo } from "react";
import { Search, Activity } from "lucide-react";
import { sweeteners } from "@/src/data/sweeteners";
import type { Sweetener } from "@/src/types";
import { SweetenerCard } from "@/components/sweetener-card";
import { SweetenerDrawer } from "@/components/sweetener-drawer";
import { FilterChips } from "@/components/filter-chips";

const statusOrder = { Trigger: 0, Caution: 1, Safe: 2 };

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [showSafeOnly, setShowSafeOnly] = useState(false);
  const [showNaturalOnly, setShowNaturalOnly] = useState(false);
  const [selectedSweetener, setSelectedSweetener] = useState<Sweetener | null>(null);

  const filtered = useMemo(() => {
    let result = sweeteners;

    if (query.trim()) {
      const q = query.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.code.includes(q)
      );
    }
    if (showSafeOnly) {
      result = result.filter((s) => s.ibsStatus === "Safe");
    }
    if (showNaturalOnly) {
      result = result.filter((s) => s.type === "Natural");
    }

    return [...result].sort(
      (a, b) => statusOrder[a.ibsStatus] - statusOrder[b.ibsStatus]
    );
  }, [query, showSafeOnly, showNaturalOnly]);

  const counts = useMemo(
    () => ({
      safe: sweeteners.filter((s) => s.ibsStatus === "Safe").length,
      caution: sweeteners.filter((s) => s.ibsStatus === "Caution").length,
      trigger: sweeteners.filter((s) => s.ibsStatus === "Trigger").length,
    }),
    []
  );

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-4 pt-4 pb-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Activity size={18} className="text-primary" />
            </div>
            <div>
              <h1 className="text-base font-bold text-foreground leading-none">IBS Sweetener Guide</h1>
              <p className="text-xs text-muted-foreground leading-none mt-0.5">FSANZ &amp; Monash FODMAP</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <input
              type="search"
              placeholder="Search by name or E number..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-xl bg-muted/60 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              aria-label="Search sweeteners"
            />
          </div>

          {/* Filter chips */}
          <FilterChips
            showSafeOnly={showSafeOnly}
            showNaturalOnly={showNaturalOnly}
            onToggleSafe={() => setShowSafeOnly((v) => !v)}
            onToggleNatural={() => setShowNaturalOnly((v) => !v)}
          />
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-4">
        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="rounded-xl border border-[#22c55e]/20 bg-[#22c55e]/5 p-3 text-center">
            <span className="block text-xl font-bold text-[#22c55e] tabular-nums">{counts.safe}</span>
            <span className="text-xs text-muted-foreground font-medium">Safe</span>
          </div>
          <div className="rounded-xl border border-[#f97316]/20 bg-[#f97316]/5 p-3 text-center">
            <span className="block text-xl font-bold text-[#f97316] tabular-nums">{counts.caution}</span>
            <span className="text-xs text-muted-foreground font-medium">Caution</span>
          </div>
          <div className="rounded-xl border border-[#ef4444]/20 bg-[#ef4444]/5 p-3 text-center">
            <span className="block text-xl font-bold text-[#ef4444] tabular-nums">{counts.trigger}</span>
            <span className="text-xs text-muted-foreground font-medium">Trigger</span>
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs text-muted-foreground mb-3 font-medium">
          {filtered.length === sweeteners.length
            ? `${sweeteners.length} sweeteners`
            : `${filtered.length} of ${sweeteners.length} sweeteners`}
        </p>

        {/* List */}
        {filtered.length > 0 ? (
          <ul className="space-y-2.5" role="list" aria-label="Sweetener list">
            {filtered.map((sweetener) => (
              <li key={sweetener.id}>
                <SweetenerCard
                  sweetener={sweetener}
                  onClick={setSelectedSweetener}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-sm">No sweeteners found for &ldquo;{query}&rdquo;</p>
            <p className="text-muted-foreground/60 text-xs mt-1">Try searching by name or E number</p>
          </div>
        )}
      </div>

      {/* Drawer */}
      <SweetenerDrawer
        sweetener={selectedSweetener}
        onClose={() => setSelectedSweetener(null)}
      />
    </main>
  );
}
