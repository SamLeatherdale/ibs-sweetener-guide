"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { IntestineIcon } from "@/components/icons/intestine";
import { sweeteners } from "@/src/data/sweeteners";
import type { IBSStatus, SweetenerType } from "@/src/types";
import { SweetenerCard } from "@/components/sweetener-card";
import { FilterChips } from "@/components/filter-chips";
import { ThemeToggle } from "@/components/theme-toggle";



export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState<IBSStatus | null>(null);
  const [activeType, setActiveType] = useState<SweetenerType | null>(null);

  const filtered = useMemo(() => {
    let result = sweeteners;

    if (query.trim()) {
      const q = query.toLowerCase().trim();
      result = result.filter(
        (s) => s.name.toLowerCase().includes(q) || s.code.includes(q)
      );
    }
    if (activeStatus) {
      result = result.filter((s) => s.ibsStatus === activeStatus);
    }
    if (activeType) {
      result = result.filter((s) => s.type === activeType);
    }

    return [...result].sort((a, b) => {
      const numA = parseInt(a.code.replace(/\D/g, ""), 10);
      const numB = parseInt(b.code.replace(/\D/g, ""), 10);
      return numA - numB;
    });
  }, [query, activeStatus, activeType]);

  const isFiltered = query.trim() !== "" || activeStatus !== null || activeType !== null;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-4 pt-4 pb-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <IntestineIcon size={18} className="text-primary" />
              </div>
              <h1 className="text-base font-bold text-foreground leading-none">
                IBS Sweetener Guide
              </h1>
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
            activeStatus={activeStatus}
            activeType={activeType}
            onSelectStatus={setActiveStatus}
            onSelectType={setActiveType}
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
                <SweetenerCard sweetener={sweetener} />
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

        {/* Footer disclaimer */}
        <footer className="pt-6 pb-4">
          <p className="text-xs text-muted-foreground/60 text-center leading-relaxed">
            Based on FSANZ and Monash University FODMAP guidelines. Not medical advice — consult a dietitian for personalised guidance.
          </p>
        </footer>
      </div>
    </main>
  );
}
