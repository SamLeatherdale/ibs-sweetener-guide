"use client";

import type { Sweetener } from "@/src/types";
import { cn } from "@/lib/utils";
import { X, ShieldCheck, AlertTriangle, ShieldX, ChevronLeft } from "lucide-react";
import { useEffect } from "react";

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
  },
  Caution: {
    label: "Caution",
    icon: AlertTriangle,
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
    border: "border-[#f97316]/30",
  },
  Trigger: {
    label: "IBS Trigger",
    icon: ShieldX,
    color: "text-[#ef4444]",
    bg: "bg-[#ef4444]/10",
    border: "border-[#ef4444]/30",
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-50 bg-background flex flex-col transition-transform duration-300 ease-in-out",
        isOpen ? "translate-y-0" : "translate-y-full pointer-events-none"
      )}
    >
      {isOpen && sweetener && <PanelContent sweetener={sweetener} onClose={onClose} />}
    </div>
  );
}

function PanelContent({ sweetener, onClose }: { sweetener: Sweetener; onClose: () => void }) {
  const status = statusConfig[sweetener.ibsStatus];
  const StatusIcon = status.icon;
  const advice = statusAdvice[sweetener.ibsStatus];

  return (
    <>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border shrink-0">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Back to list"
          >
            <ChevronLeft size={18} />
            Back
          </button>
          <span className="flex-1 text-sm font-semibold text-foreground text-center truncate pr-14">
            {sweetener.name}
          </span>
        </div>
      </div>

      {/* Scrollable content — full panel scrolls, no inner container */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto px-4 py-6 space-y-5">
          {/* Identity block */}
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "w-20 h-20 rounded-2xl flex flex-col items-center justify-center border shrink-0",
                status.bg,
                status.border
              )}
            >
              <span className="text-[10px] font-semibold text-muted-foreground leading-none mb-0.5">E</span>
              <span className={cn("text-3xl font-bold leading-none tabular-nums", status.color)}>
                {sweetener.code}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground text-balance leading-tight">
                {sweetener.name}
              </h1>
              <span className={cn("inline-block mt-1.5 text-xs font-medium px-2.5 py-1 rounded-full", typeConfig[sweetener.type])}>
                {sweetener.type}
              </span>
            </div>
          </div>

          {/* IBS Status Banner */}
          <div className={cn("rounded-2xl p-4 border", status.bg, status.border)}>
            <div className="flex items-center gap-2 mb-1.5">
              <StatusIcon size={15} className={status.color} />
              <span className={cn("text-sm font-bold", status.color)}>{advice.title}</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{advice.body}</p>
          </div>

          {/* About */}
          <div>
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">About</h2>
            <p className="text-sm text-foreground leading-relaxed">{sweetener.description}</p>
          </div>

          {sweetener.alsKnownAs && (
            <div>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Also Known As</h2>
              <p className="text-sm text-foreground">{sweetener.alsKnownAs}</p>
            </div>
          )}

          {sweetener.commonUses && (
            <div>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Common Uses</h2>
              <p className="text-sm text-foreground">{sweetener.commonUses}</p>
            </div>
          )}

          <p className="text-xs text-muted-foreground pt-4 border-t border-border leading-relaxed">
            Based on Monash University FODMAP guidelines and Food Standards Australia New Zealand (FSANZ) classifications. This is informational only — consult your dietitian for personal advice.
          </p>
        </div>
      </div>
    </>
  );
}
