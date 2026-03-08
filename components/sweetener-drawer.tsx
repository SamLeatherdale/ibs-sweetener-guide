"use client";

import type { Sweetener } from "@/src/types";
import { cn } from "@/lib/utils";
import { X, ShieldCheck, AlertTriangle, ShieldX } from "lucide-react";
import { useEffect, useRef } from "react";

interface SweetenerDrawerProps {
  sweetener: Sweetener | null;
  onClose: () => void;
}

const statusConfig = {
  Safe: {
    label: "IBS Safe",
    icon: ShieldCheck,
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10",
    border: "border-[#22c55e]/30",
    dot: "bg-[#22c55e]",
  },
  Caution: {
    label: "Caution",
    icon: AlertTriangle,
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
    border: "border-[#f97316]/30",
    dot: "bg-[#f97316]",
  },
  Trigger: {
    label: "IBS Trigger",
    icon: ShieldX,
    color: "text-[#ef4444]",
    bg: "bg-[#ef4444]/10",
    border: "border-[#ef4444]/30",
    dot: "bg-[#ef4444]",
  },
};

const typeConfig: Record<string, string> = {
  Natural: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
  Artificial: "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-400",
  "Sugar Alcohol": "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400",
};

const statusAdvice: Record<string, { title: string; body: string }> = {
  Safe: {
    title: "Generally safe for IBS",
    body: "This sweetener is not classified as a FODMAP and is unlikely to trigger IBS symptoms in most people. As always, individual tolerance can vary.",
  },
  Caution: {
    title: "May cause symptoms in some people",
    body: "This sweetener may be tolerated in small amounts but can cause issues at higher doses. Consider limiting intake and monitoring your response.",
  },
  Trigger: {
    title: "Known IBS trigger",
    body: "This sweetener is a high-FODMAP ingredient that commonly triggers IBS symptoms including bloating, cramping, and altered bowel habits. Avoid or minimise intake.",
  },
};

export function SweetenerDrawer({ sweetener, onClose }: SweetenerDrawerProps) {
  const isOpen = sweetener !== null;
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll panel into view when opened
  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [isOpen, sweetener]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!sweetener) return null;

  const status = statusConfig[sweetener.ibsStatus];
  const StatusIcon = status.icon;
  const advice = statusAdvice[sweetener.ibsStatus];

  return (
    <div
      ref={panelRef}
      role="region"
      aria-label={`Details for ${sweetener.name}`}
      className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between px-5 pt-5 pb-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-16 h-16 rounded-2xl flex flex-col items-center justify-center border shrink-0",
              status.bg,
              status.border
            )}
          >
            <span className="text-[10px] font-semibold text-muted-foreground leading-none mb-0.5">E</span>
            <span className={cn("text-2xl font-bold leading-none tabular-nums", status.color)}>
              {sweetener.code}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground text-balance">{sweetener.name}</h2>
            <span className={cn("inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full", typeConfig[sweetener.type])}>
              {sweetener.type}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground shrink-0"
          aria-label="Close details"
        >
          <X size={18} />
        </button>
      </div>

      {/* IBS Status Banner */}
      <div className={cn("mx-5 rounded-2xl p-4 border mb-4", status.bg, status.border)}>
        <div className="flex items-center gap-2 mb-1">
          <StatusIcon size={14} className={status.color} />
          <span className={cn("text-sm font-bold", status.color)}>{advice.title}</span>
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed">{advice.body}</p>
      </div>

      {/* Content */}
      <div className="px-5 pb-6 space-y-4">
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">About</h3>
          <p className="text-sm text-foreground leading-relaxed">{sweetener.description}</p>
        </div>

        {sweetener.alsKnownAs && (
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Also Known As</h3>
            <p className="text-sm text-foreground">{sweetener.alsKnownAs}</p>
          </div>
        )}

        {sweetener.commonUses && (
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Common Uses</h3>
            <p className="text-sm text-foreground">{sweetener.commonUses}</p>
          </div>
        )}

        <p className="text-xs text-muted-foreground pt-2 border-t border-border leading-relaxed">
          Based on Monash University FODMAP guidelines and Food Standards Australia New Zealand (FSANZ) classifications. This is informational only — consult your dietitian for personal advice.
        </p>
      </div>
    </div>
  );
}
