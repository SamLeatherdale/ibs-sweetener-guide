"use client";

import { useState, useMemo } from "react";
import { Search, Activity } from "lucide-react";
import { sweeteners } from "@/src/data/sweeteners";
import type { Sweetener, IBSStatus, SweetenerType } from "@/src/types";
import { SweetenerCard } from "@/components/sweetener-card";
import { SweetenerDrawer } from "@/components/sweetener-drawer";
import { FilterChips } from "@/components/filter-chips";
import { ThemeToggle } from "@/components/theme-toggle";

const statusOrder: Record<IBSStatus, number> = { Trigger: 0, Caution: 1, Safe: 2 };

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeStatuses, setActiveStatuses] = useState<Set<IBSStatus>>(new Set());
  const [activeTypes, setActiveTypes] = useState<Set<SweetenerType>>(new Set());
  const [selectedSweetener, setSelectedSweetener] = useState<Sweetener | null>(null);

  function toggleStatus(s: IBSStatus) {
    setActiveStatuses((prev) => {
      const next = new Set(prev);
      next.has(s) ? next.delete(s) : next.add(s);
      return next;
    });
  }

  function toggleType(t: SweetenerType) {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });
  }

  const filtered = useMemo(() => {
    let result = sweeteners;

    if (query.trim()) {
      const q = query.toLowerCase().trim();
      result = result.filter(
        (s) => s.name.toLowerCase().includes(q) || s.code.includes(q)
      );
    }
    if (activeStatuses.size > 0) {
      result = result.filter((s) => activeStatuses.has(s.ibsStatus));
    }
    if (activeTypes.size > 0) {
      result = result.filter((s) => activeTypes.has(s.type));
    }

    return [...result].sort(
      (a, b) => statusOrder[a.ibsStatus] - statusOrder[b.ibsStatus]
    );
  }, [query, activeStatuses, activeTypes]);

  const isFiltered =
    query.trim() !== "" || activeStatuses.size > 0 || activeTypes.size > 0;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-4 pt-4 pb-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <Activity size={18} className="text-primary" />
              </div>
              <div>
                <h1 className="text-base font-bold text-foreground leading-none">
                  IBS Sweetener Guide
                </h1>
                <p className="text-xs text-muted-foreground leading-none mt-0.5">
                  FSANZ &amp; Monash FODMAP
                </p>
              </div>
            </div>
            <ThemeToggle />
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
            activeStatuses={activeStatuses}
            activeTypes={activeTypes}
            onToggleStatus={toggleStatus}
            onToggleType={toggleType}
          />
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-4">
        {/* Results count */}
        <p className="text-xs text-muted-foreground mb-3 font-medium">
          {isFiltered
            ? `${filtered.length} of ${sweeteners.length} sweeteners`
            : `${sweeteners.length} sweeteners`}
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
            <p className="text-muted-foreground text-sm">
              No sweeteners match your filters
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">
              Try adjusting your search or filter selection
            </p>
          </div>
        )}
      </div>

      {/* Fullscreen detail panel */}
      <SweetenerDrawer
        sweetener={selectedSweetener}
        onClose={() => setSelectedSweetener(null)}
      />
    </main>
  );
}
