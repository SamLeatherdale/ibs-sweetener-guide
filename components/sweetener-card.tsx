import Link from "next/link";
import type { Sweetener, SweetenerType } from "@/src/types";
import { cn } from "@/lib/utils";
import { statusConfig, typeConfig } from "@/src/config/sweetener-config";

interface SweetenerCardProps {
  sweetener: Sweetener;
  activeType?: SweetenerType | null;
}

export function SweetenerCard({ sweetener, activeType }: SweetenerCardProps) {
  const status = statusConfig[sweetener.ibsStatus];
  const type = typeConfig[sweetener.type];
  const TypeIcon = type.icon;

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
        <div className="flex flex-wrap items-center gap-1.5">
          {!activeType && (
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                type.pillBg,
              )}
            >
              <TypeIcon size={11} />
              {type.label}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
