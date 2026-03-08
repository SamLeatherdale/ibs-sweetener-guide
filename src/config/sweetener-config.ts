import {
  ShieldCheck,
  AlertTriangle,
  ShieldX,
  Leaf,
  FlaskConical,
  Droplets,
  Box,
} from "lucide-react";
import type { IBSStatus, SweetenerType } from "@/src/types";

export const statusConfig: Record<
  IBSStatus,
  {
    label: string;
    icon: React.ElementType;
    color: string;
    bg: string;
    border: string;
    badgeBg: string;
    adviceBg: string;
    adviceBorder: string;
    advice: string;
    dot: string;
    activeClass: string;
    hoverClass: string;
  }
> = {
  safe: {
    label: "IBS Safe",
    icon: ShieldCheck,
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10",
    border: "border-[#22c55e]/30",
    badgeBg: "bg-[#22c55e]/10",
    adviceBg: "bg-[#22c55e]/8 dark:bg-[#22c55e]/10",
    adviceBorder: "border-[#22c55e]/20",
    advice:
      "Generally well tolerated by people with IBS. Suitable for regular consumption at typical serving sizes.",
    dot: "bg-[#22c55e]",
    activeClass: "bg-[#22c55e] text-white border-[#22c55e]",
    hoverClass: "hover:border-[#22c55e]/60 hover:text-[#22c55e]",
  },
  caution: {
    label: "Caution",
    icon: AlertTriangle,
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
    border: "border-[#f97316]/30",
    badgeBg: "bg-[#f97316]/10",
    adviceBg: "bg-[#f97316]/8 dark:bg-[#f97316]/10",
    adviceBorder: "border-[#f97316]/20",
    advice:
      "May be tolerated in small amounts but can cause symptoms in larger quantities. Start with very small portions and monitor your response.",
    dot: "bg-[#f97316]",
    activeClass: "bg-[#f97316] text-white border-[#f97316]",
    hoverClass: "hover:border-[#f97316]/60 hover:text-[#f97316]",
  },
  trigger: {
    label: "IBS Trigger",
    icon: ShieldX,
    color: "text-[#ef4444]",
    bg: "bg-[#ef4444]/10",
    border: "border-[#ef4444]/30",
    badgeBg: "bg-[#ef4444]/10",
    adviceBg: "bg-[#ef4444]/8 dark:bg-[#ef4444]/10",
    adviceBorder: "border-[#ef4444]/20",
    advice:
      "Known to trigger IBS symptoms including bloating, cramps, and altered bowel habits. Best avoided if you have IBS.",
    dot: "bg-[#ef4444]",
    activeClass: "bg-[#ef4444] text-white border-[#ef4444]",
    hoverClass: "hover:border-[#ef4444]/60 hover:text-[#ef4444]",
  },
};

export const typeConfig: Record<
  SweetenerType,
  {
    label: string;
    icon: React.ElementType;
    bg: string;
    darkBg: string;
    pillBg: string;
    activeClass: string;
    hoverClass: string;
  }
> = {
  natural: {
    label: "Natural",
    icon: Leaf,
    bg: "bg-emerald-50 text-emerald-700",
    darkBg: "dark:bg-emerald-950/40 dark:text-emerald-400",
    pillBg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
    activeClass: "bg-emerald-500 text-white border-emerald-500",
    hoverClass: "hover:border-emerald-500/60 hover:text-emerald-600",
  },
  artificial: {
    label: "Artificial",
    icon: FlaskConical,
    bg: "bg-sky-50 text-sky-700",
    darkBg: "dark:bg-sky-950/40 dark:text-sky-400",
    pillBg: "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-400",
    activeClass: "bg-sky-500 text-white border-sky-500",
    hoverClass: "hover:border-sky-500/60 hover:text-sky-600",
  },
  alcohol: {
    label: "Sugar Alcohol",
    icon: Droplets,
    bg: "bg-violet-50 text-violet-700",
    darkBg: "dark:bg-violet-950/40 dark:text-violet-400",
    pillBg: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400",
    activeClass: "bg-violet-500 text-white border-violet-500",
    hoverClass: "hover:border-violet-500/60 hover:text-violet-600",
  },
  sugar: {
    label: "Sugar",
    icon: Box,
    bg: "bg-amber-50 text-amber-700",
    darkBg: "dark:bg-amber-950/40 dark:text-amber-400",
    pillBg: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
    activeClass: "bg-amber-500 text-white border-amber-500",
    hoverClass: "hover:border-amber-500/60 hover:text-amber-600",
  },
};

export const ibsStatusOptions = (Object.keys(statusConfig) as IBSStatus[]).map((id) => ({
  id,
  label: statusConfig[id].label,
  icon: statusConfig[id].icon,
  activeClass: statusConfig[id].activeClass,
  hoverClass: statusConfig[id].hoverClass,
}));

export const sweetenerTypeOptions = (Object.keys(typeConfig) as SweetenerType[]).map((id) => ({
  id,
  label: typeConfig[id].label,
  icon: typeConfig[id].icon,
  activeClass: typeConfig[id].activeClass,
  hoverClass: typeConfig[id].hoverClass,
}));
