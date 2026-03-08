"use client";

import type { Sweetener } from "@/src/types";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface SweetenerDrawerProps {
  sweetener: Sweetener | null;
  onClose: () => void;
}

const statusConfig = {
  Safe: {
    label: "IBS Safe",
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10",
    border: "border-[#22c55e]/30",
    dot: "bg-[#22c55e]",
    pill: "bg-[#22c55e]",
  },
  Caution: {
    label: "Caution",
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
    border: "border-[#f97316]/30",
    dot: "bg-[#f97316]",
    pill: "bg-[#f97316]",
  },
  Trigger: {
    label: "IBS Trigger",
    color: "text-[#ef4444]",
    bg: "bg-[#ef4444]/10",
    border: "border-[#ef4444]/30",
    dot: "bg-[#ef4444]",
    pill: "bg-[#ef4444]",
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
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!sweetener) return null;

  const status = statusConfig[sweetener.ibsStatus];
  const advice = statusAdvice[sweetener.ibsStatus];

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Details for ${sweetener.name}`}
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 max-w-lg mx-auto",
          "bg-background rounded-t-3xl shadow-2xl",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-border" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-5 pt-3 pb-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-16 h-16 rounded-2xl flex flex-col items-center justify-center border",
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
            className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground"
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* IBS Status Banner */}
        <div className={cn("mx-5 rounded-2xl p-4 border mb-4", status.bg, status.border)}>
          <div className="flex items-center gap-2 mb-1">
            <span className={cn("w-2 h-2 rounded-full", status.dot)} />
            <span className={cn("text-sm font-bold", status.color)}>{advice.title}</span>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">{advice.body}</p>
        </div>

        {/* Content */}
        <div className="px-5 pb-safe-bottom space-y-4 max-h-[45vh] overflow-y-auto pb-8">
          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">About</h3>
            <p className="text-sm text-foreground leading-relaxed">{sweetener.description}</p>
          </div>

          {/* Also known as */}
          {sweetener.alsKnownAs && (
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Also Known As</h3>
              <p className="text-sm text-foreground">{sweetener.alsKnownAs}</p>
            </div>
          )}

          {/* Common uses */}
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
    </>
  );
}
