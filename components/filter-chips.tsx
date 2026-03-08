"use client";

import { cn } from "@/lib/utils";
import type { IBSStatus, SweetenerType } from "@/src/types";

const ibsOptions: { value: IBSStatus; label: string; activeClass: string; hoverClass: string }[] = [
  {
    value: "Safe",
    label: "Safe",
    activeClass: "bg-[#22c55e] text-white border-[#22c55e]",
    hoverClass: "hover:border-[#22c55e]/60 hover:text-[#22c55e]",
  },
  {
    value: "Caution",
    label: "Caution",
    activeClass: "bg-[#f97316] text-white border-[#f97316]",
    hoverClass: "hover:border-[#f97316]/60 hover:text-[#f97316]",
  },
  {
    value: "Trigger",
    label: "Trigger",
    activeClass: "bg-[#ef4444] text-white border-[#ef4444]",
    hoverClass: "hover:border-[#ef4444]/60 hover:text-[#ef4444]",
  },
];

const typeOptions: { value: SweetenerType; label: string; activeClass: string; hoverClass: string }[] = [
  {
    value: "Natural",
    label: "Natural",
    activeClass: "bg-primary text-primary-foreground border-primary",
    hoverClass: "hover:border-primary/60 hover:text-primary",
  },
  {
    value: "Artificial",
    label: "Artificial",
    activeClass: "bg-primary text-primary-foreground border-primary",
    hoverClass: "hover:border-primary/60 hover:text-primary",
  },
  {
    value: "Sugar Alcohol",
    label: "Sugar Alcohol",
    activeClass: "bg-primary text-primary-foreground border-primary",
    hoverClass: "hover:border-primary/60 hover:text-primary",
  },
];

interface FilterChipsProps {
  activeStatuses: Set<IBSStatus>;
  activeTypes: Set<SweetenerType>;
  onToggleStatus: (s: IBSStatus) => void;
  onToggleType: (t: SweetenerType) => void;
}

export function FilterChips({
  activeStatuses,
  activeTypes,
  onToggleStatus,
  onToggleType,
}: FilterChipsProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* IBS Safety row */}
      <div className="flex items-center gap-2" role="group" aria-label="Filter by IBS safety">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground w-10 shrink-0">
          Safety
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {ibsOptions.map(({ value, label, activeClass, hoverClass }) => {
            const active = activeStatuses.has(value);
            return (
              <button
                key={value}
                onClick={() => onToggleStatus(value)}
                aria-pressed={active}
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-150",
                  active
                    ? cn(activeClass, "shadow-sm")
                    : cn("bg-background text-muted-foreground border-border", hoverClass)
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Type row */}
      <div className="flex items-center gap-2" role="group" aria-label="Filter by sweetener type">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground w-10 shrink-0">
          Type
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {typeOptions.map(({ value, label, activeClass, hoverClass }) => {
            const active = activeTypes.has(value);
            return (
              <button
                key={value}
                onClick={() => onToggleType(value)}
                aria-pressed={active}
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-150",
                  active
                    ? cn(activeClass, "shadow-sm")
                    : cn("bg-background text-muted-foreground border-border", hoverClass)
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
