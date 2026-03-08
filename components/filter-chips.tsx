"use client";

import { cn } from "@/lib/utils";
import type { IBSStatus, SweetenerType } from "@/src/types";
import { ShieldCheck, AlertTriangle, ShieldX, Leaf, FlaskConical, Droplets } from "lucide-react";

const ibsOptions: {
  value: IBSStatus;
  label: string;
  icon: React.ElementType;
  activeClass: string;
  hoverClass: string;
}[] = [
  {
    value: "Safe",
    label: "Safe",
    icon: ShieldCheck,
    activeClass: "bg-[#22c55e] text-white border-[#22c55e]",
    hoverClass: "hover:border-[#22c55e]/60 hover:text-[#22c55e]",
  },
  {
    value: "Caution",
    label: "Caution",
    icon: AlertTriangle,
    activeClass: "bg-[#f97316] text-white border-[#f97316]",
    hoverClass: "hover:border-[#f97316]/60 hover:text-[#f97316]",
  },
  {
    value: "Trigger",
    label: "Trigger",
    icon: ShieldX,
    activeClass: "bg-[#ef4444] text-white border-[#ef4444]",
    hoverClass: "hover:border-[#ef4444]/60 hover:text-[#ef4444]",
  },
];

const typeOptions: {
  value: SweetenerType;
  label: string;
  icon: React.ElementType;
  activeClass: string;
  hoverClass: string;
}[] = [
  {
    value: "Natural",
    label: "Natural",
    icon: Leaf,
    activeClass: "bg-emerald-500 text-white border-emerald-500",
    hoverClass: "hover:border-emerald-500/60 hover:text-emerald-600",
  },
  {
    value: "Artificial",
    label: "Artificial",
    icon: FlaskConical,
    activeClass: "bg-sky-500 text-white border-sky-500",
    hoverClass: "hover:border-sky-500/60 hover:text-sky-600",
  },
  {
    value: "Sugar Alcohol",
    label: "Sugar Alcohol",
    icon: Droplets,
    activeClass: "bg-violet-500 text-white border-violet-500",
    hoverClass: "hover:border-violet-500/60 hover:text-violet-600",
  },
];

interface FilterChipsProps {
  activeStatus: IBSStatus | null;
  activeType: SweetenerType | null;
  onSelectStatus: (s: IBSStatus | null) => void;
  onSelectType: (t: SweetenerType | null) => void;
}

export function FilterChips({
  activeStatus,
  activeType,
  onSelectStatus,
  onSelectType,
}: FilterChipsProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* IBS Safety row */}
      <div className="flex gap-1.5 flex-wrap" role="radiogroup" aria-label="Filter by IBS safety">
        {ibsOptions.map(({ value, label, icon: Icon, activeClass, hoverClass }) => {
          const active = activeStatus === value;
          return (
            <button
              key={value}
              onClick={() => onSelectStatus(active ? null : value)}
              aria-pressed={active}
              role="radio"
              aria-checked={active}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-150",
                active
                  ? cn(activeClass, "shadow-sm")
                  : cn("bg-background text-muted-foreground border-border", hoverClass)
              )}
            >
              <Icon size={12} />
              {label}
            </button>
          );
        })}
      </div>

      {/* Type row */}
      <div className="flex gap-1.5 flex-wrap" role="radiogroup" aria-label="Filter by sweetener type">
        {typeOptions.map(({ value, label, icon: Icon, activeClass, hoverClass }) => {
          const active = activeType === value;
          return (
            <button
              key={value}
              onClick={() => onSelectType(active ? null : value)}
              aria-pressed={active}
              role="radio"
              aria-checked={active}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-150",
                active
                  ? cn(activeClass, "shadow-sm")
                  : cn("bg-background text-muted-foreground border-border", hoverClass)
              )}
            >
              <Icon size={12} />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
