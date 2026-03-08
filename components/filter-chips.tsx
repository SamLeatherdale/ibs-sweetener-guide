"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { IBSStatus, SweetenerType } from "@/src/types";
import { ibsStatusOptions, sweetenerTypeOptions } from "@/src/config/sweetener-config";

interface FilterChipProps {
  label: string;
  icon: React.ElementType;
  active: boolean;
  activeClass: string;
  hoverClass: string;
  onClick?: () => void;
}

function FilterChip({
  label,
  icon: Icon,
  active,
  activeClass,
  hoverClass,
  onClick,
}: FilterChipProps) {
  const className = cn(
    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap",
    active
      ? cn(activeClass, "shadow-sm")
      : onClick
        ? cn("bg-background text-muted-foreground border-border", hoverClass)
        : "bg-background text-muted-foreground border-border opacity-50",
  );

  return onClick ? (
    <button
      onClick={onClick}
      role="radio"
      aria-checked={active}
      className={cn(className, "transition-all duration-150")}
    >
      <Icon size={12} />
      {label}
    </button>
  ) : (
    <span className={className}>
      <Icon size={12} />
      {label}
    </span>
  );
}

interface FilterChipRowProps<T extends string> {
  options: {
    id: T;
    label: string;
    icon: React.ElementType;
    activeClass: string;
    hoverClass: string;
  }[];
  activeId: T | null;
  ariaLabel: string;
  scrollable?: boolean;
  onSelect?: (id: T | null) => void;
}

function ScrollableChipRow({
  ariaLabel,
  children,
}: {
  ariaLabel: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  return (
    <div className="relative">
      <div
        ref={ref}
        className="scrollbar-none flex items-center gap-1.5 overflow-x-auto"
        role="radiogroup"
        aria-label={ariaLabel}
        onScroll={update}
      >
        {children}
      </div>
      <div
        className={cn(
          "from-background pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r to-transparent transition-opacity duration-150",
          showLeft ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className={cn(
          "from-background pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l to-transparent transition-opacity duration-150",
          showRight ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

function FilterChipRow<T extends string>({
  options,
  activeId,
  ariaLabel,
  scrollable,
  onSelect,
}: FilterChipRowProps<T>) {
  const chips = options.map(({ id, label, icon, activeClass, hoverClass }) => (
    <FilterChip
      key={id}
      label={label}
      icon={icon}
      active={activeId === id}
      activeClass={activeClass}
      hoverClass={hoverClass}
      onClick={onSelect ? () => onSelect(activeId === id ? null : id) : undefined}
    />
  ));

  if (scrollable) {
    return <ScrollableChipRow ariaLabel={ariaLabel}>{chips}</ScrollableChipRow>;
  }

  return (
    <div className="flex flex-wrap items-center gap-1.5" role="radiogroup" aria-label={ariaLabel}>
      {chips}
    </div>
  );
}

interface FilterChipsProps {
  activeStatus?: IBSStatus | null;
  activeType?: SweetenerType | null;
  onSelectStatus?: (id: IBSStatus | null) => void;
  onSelectType?: (id: SweetenerType | null) => void;
}

export function FilterChips({
  activeStatus = null,
  activeType = null,
  onSelectStatus,
  onSelectType,
}: FilterChipsProps) {
  return (
    <div className="flex flex-col gap-2">
      <FilterChipRow
        options={ibsStatusOptions}
        activeId={activeStatus}
        ariaLabel="Filter by IBS safety"
        onSelect={onSelectStatus}
      />
      <FilterChipRow
        options={sweetenerTypeOptions}
        activeId={activeType}
        ariaLabel="Filter by sweetener type"
        scrollable
        onSelect={onSelectType}
      />
    </div>
  );
}
