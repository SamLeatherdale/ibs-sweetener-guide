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
  "Natural Sweetener": {
    bg: "bg-emerald-50 text-emerald-700",
    darkBg: "dark:bg-emerald-950/40 dark:text-emerald-400",
  },
  Artificial: { bg: "bg-sky-50 text-sky-700", darkBg: "dark:bg-sky-950/40 dark:text-sky-400" },
  "Sugar Alcohol": {
    bg: "bg-violet-50 text-violet-700",
    darkBg: "dark:bg-violet-950/40 dark:text-violet-400",
  },
  Sugar: { bg: "bg-amber-50 text-amber-700", darkBg: "dark:bg-amber-950/40 dark:text-amber-400" },
};

export function SweetenerCard({ sweetener }: SweetenerCardProps) {
  const status = statusConfig[sweetener.ibsStatus];
  const type = typeConfig[sweetener.type];

  return (
    <Link
      href={`/sweetener/${sweetener.id}`}
      className="bg-card border-border hover:bg-accent/40 focus-visible:ring-ring flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-150 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98]"
      aria-label={`View details for ${sweetener.name}${/^\d/.test(sweetener.code) ? `, E number ${sweetener.code}` : ""}`}
    >
      {/* Code badge */}
      <div
        className={cn(
          "flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl",
          status.bg,
          status.border,
          "border",
        )}
      >
        {/^\d/.test(sweetener.code) ? (
          <>
            <span className="text-muted-foreground mb-0.5 text-[10px] leading-none font-semibold">
              E
            </span>
            <span className={cn("text-xl leading-none font-bold tabular-nums", status.color)}>
              {sweetener.code}
            </span>
          </>
        ) : (
          <span className={cn("text-2xl leading-none font-bold tracking-tight", status.color)}>
            <span>{sweetener.code[0]}</span>
            <span className="text-base">{sweetener.code[1]}</span>
          </span>
        )}
      </div>

      {/* Main info */}
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="text-foreground truncate text-base leading-tight font-semibold">
            {sweetener.name}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
              type.bg,
              type.darkBg,
            )}
          >
            {sweetener.type}
          </span>
        </div>
      </div>

      {/* Status pill */}
      <div
        className={cn(
          "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
          status.bg,
          status.color,
        )}
      >
        <span className={cn("h-1.5 w-1.5 rounded-full", status.dot)} />
        {status.label}
      </div>
    </Link>
  );
}
