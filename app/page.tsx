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
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.code.includes(q) ||
          (s.alsoKnownAs && s.alsoKnownAs.toLowerCase().includes(q)),
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
      if (isNaN(numA) && isNaN(numB)) return a.name.localeCompare(b.name);
      if (isNaN(numA)) return 1;
      if (isNaN(numB)) return -1;
      return numA - numB;
    });
  }, [query, activeStatus, activeType]);

  const isFiltered = query.trim() !== "" || activeStatus !== null || activeType !== null;

  return (
    <main className="bg-background min-h-screen">
      {/* Header */}
      <header className="bg-background/80 border-border sticky top-0 z-30 border-b backdrop-blur-md">
        <div className="mx-auto max-w-lg px-4 pt-4 pb-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 rounded-lg p-1.5">
                <IntestineIcon size={18} className="text-primary" />
              </div>
              <h1 className="text-foreground text-base leading-none font-bold">
                IBS Sweetener Guide
              </h1>
            </div>
            <ThemeToggle />
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search
              size={16}
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2"
            />
            <input
              type="search"
              placeholder="Search by name or E number..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-muted/60 border-border text-foreground placeholder:text-muted-foreground focus:ring-ring h-10 w-full rounded-xl border pr-4 pl-9 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none"
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

      <div className="mx-auto max-w-lg px-4 py-4">
        {/* Results count */}
        <p className="text-muted-foreground mb-3 text-xs font-medium">
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
          <div className="py-16 text-center">
            <p className="text-muted-foreground text-sm">No sweeteners match your filters</p>
            <p className="text-muted-foreground/60 mt-1 text-xs">
              Try adjusting your search or filter selection
            </p>
          </div>
        )}

        {/* Footer disclaimer */}
        <footer className="pt-6 pb-4">
          <p className="text-muted-foreground/60 text-center text-xs leading-relaxed">
            Based on FSANZ and Monash University FODMAP guidelines. Not medical advice — consult a
            dietitian for personalised guidance.
          </p>
        </footer>
      </div>
    </main>
  );
}
