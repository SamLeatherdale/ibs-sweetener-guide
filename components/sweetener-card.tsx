import Link from "next/link";
import type { Sweetener } from "@/src/types";
import { cn } from "@/lib/utils";

interface SweetenerCardProps {
  sweetener: Sweetener;
}

const statusConfig = {
  Safe: {
    label: "IBS Safe",
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10",
    border: "border-[#22c55e]/20",
    dot: "bg-[#22c55e]",
  },
  Caution: {
    label: "Caution",
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
    border: "border-[#f97316]/20",
    dot: "bg-[#f97316]",
  },
  Trigger: {
    label: "IBS Trigger",
    color: "text-[#ef4444]",
    bg: "bg-[#ef4444]/10",
    border: "border-[#ef4444]/20",
    dot: "bg-[#ef4444]",
  },
};

const typeConfig = {
  Natural: { bg: "bg-emerald-50 text-emerald-700", darkBg: "dark:bg-emerald-950/40 dark:text-emerald-400" },
  Artificial: { bg: "bg-sky-50 text-sky-700", darkBg: "dark:bg-sky-950/40 dark:text-sky-400" },
  "Sugar Alcohol": { bg: "bg-violet-50 text-violet-700", darkBg: "dark:bg-violet-950/40 dark:text-violet-400" },
};

export function SweetenerCard({ sweetener }: SweetenerCardProps) {
  const status = statusConfig[sweetener.ibsStatus];
  const type = typeConfig[sweetener.type];

  return (
    <Link
      href={`/sweetener/${sweetener.id}`}
      className="w-full text-left bg-card border border-border rounded-2xl p-4 flex items-center gap-4 hover:bg-accent/40 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`View details for ${sweetener.name}, E number ${sweetener.code}`}
    >
      {/* E-number badge */}
      <div
        className={cn(
          "shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center",
          status.bg,
          status.border,
          "border"
        )}
      >
        <span className="text-[10px] font-semibold text-muted-foreground leading-none mb-0.5">E</span>
        <span className={cn("text-xl font-bold leading-none tabular-nums", status.color)}>
          {sweetener.code}
        </span>
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-foreground text-base leading-tight truncate">
            {sweetener.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={cn(
              "inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full",
              type.bg,
              type.darkBg
            )}
          >
            {sweetener.type}
          </span>
        </div>
      </div>

      {/* Status pill */}
      <div
        className={cn(
          "shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold",
          status.bg,
          status.color
        )}
      >
        <span className={cn("w-1.5 h-1.5 rounded-full", status.dot)} />
        {status.label}
      </div>
    </Link>
  );
}
