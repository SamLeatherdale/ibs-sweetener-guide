"use client";

import { useMemo, useTransition, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, Info } from "lucide-react";
import { IntestineIcon } from "@/components/icons/intestine";
import { sweeteners } from "@/src/data/sweeteners";
import type { IBSStatus, SweetenerType } from "@/src/types";
import { SweetenerCard } from "@/components/sweetener-card";
import { FilterChips } from "@/components/filter-chips";
import { PageFooter } from "@/components/page-footer";

export default function HomePage() {
  return (
    <Suspense>
      <HomePageContent />
    </Suspense>
  );
}

function HomePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const query = searchParams.get("q") ?? "";
  const activeStatus = (searchParams.get("status") as IBSStatus) || null;
  const activeType = (searchParams.get("type") as SweetenerType) || null;

  function updateParams(updates: {
    q?: string | null;
    status?: string | null;
    type?: string | null;
  }) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }
    const search = params.toString();
    startTransition(() => {
      router.replace(search ? `/?${search}` : "/", { scroll: false });
    });
  }

  function setQuery(value: string) {
    updateParams({ q: value || null });
  }

  function setActiveStatus(value: IBSStatus | null) {
    updateParams({ status: value });
  }

  function setActiveType(value: SweetenerType | null) {
    updateParams({ type: value });
  }

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
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-lg p-1 text-xs font-medium transition-colors"
              aria-label="About this guide"
            >
              <Info size={16} />
              <span className="hidden min-[360px]:inline">About</span>
            </Link>
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
                <SweetenerCard sweetener={sweetener} activeType={activeType} />
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

        <PageFooter showBackButton={false} />
      </div>
    </main>
  );
}
