"use client";

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
    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
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
    value: T;
    label: string;
    icon: React.ElementType;
    activeClass: string;
    hoverClass: string;
  }[];
  activeValue: T | null;
  ariaLabel: string;
  onSelect?: (value: T | null) => void;
}

function FilterChipRow<T extends string>({
  options,
  activeValue,
  ariaLabel,
  onSelect,
}: FilterChipRowProps<T>) {
  return (
    <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label={ariaLabel}>
      {options.map(({ value, label, icon, activeClass, hoverClass }) => (
        <FilterChip
          key={value}
          label={label}
          icon={icon}
          active={activeValue === value}
          activeClass={activeClass}
          hoverClass={hoverClass}
          onClick={onSelect ? () => onSelect(activeValue === value ? null : value) : undefined}
        />
      ))}
    </div>
  );
}

interface FilterChipsProps {
  activeStatus?: IBSStatus | null;
  activeType?: SweetenerType | null;
  onSelectStatus?: (s: IBSStatus | null) => void;
  onSelectType?: (t: SweetenerType | null) => void;
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
        activeValue={activeStatus}
        ariaLabel="Filter by IBS safety"
        onSelect={onSelectStatus}
      />
      <FilterChipRow
        options={sweetenerTypeOptions}
        activeValue={activeType}
        ariaLabel="Filter by sweetener type"
        onSelect={onSelectType}
      />
    </div>
  );
}
