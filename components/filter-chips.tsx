"use client";

import { cn } from "@/lib/utils";
import { ShieldCheck, Leaf } from "lucide-react";

interface FilterChipsProps {
  showSafeOnly: boolean;
  showNaturalOnly: boolean;
  onToggleSafe: () => void;
  onToggleNatural: () => void;
}

export function FilterChips({
  showSafeOnly,
  showNaturalOnly,
  onToggleSafe,
  onToggleNatural,
}: FilterChipsProps) {
  return (
    <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter sweeteners">
      <button
        onClick={onToggleSafe}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-150",
          showSafeOnly
            ? "bg-[#22c55e] text-white border-[#22c55e] shadow-sm"
            : "bg-background text-muted-foreground border-border hover:border-[#22c55e]/50 hover:text-[#22c55e]"
        )}
        aria-pressed={showSafeOnly}
      >
        <ShieldCheck size={14} />
        IBS Safe
      </button>
      <button
        onClick={onToggleNatural}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-150",
          showNaturalOnly
            ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
            : "bg-background text-muted-foreground border-border hover:border-emerald-500/50 hover:text-emerald-600"
        )}
        aria-pressed={showNaturalOnly}
      >
        <Leaf size={14} />
        Natural
      </button>
    </div>
  );
}
