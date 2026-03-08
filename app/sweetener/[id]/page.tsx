import { notFound } from "next/navigation";
import Link from "next/link";
import { sweeteners } from "@/src/data/sweeteners";
import {
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  ShieldX,
  Leaf,
  FlaskConical,
  Droplets,
  Tag,
  UtensilsCrossed,
} from "lucide-react";
import { cn } from "@/lib/utils";

const statusConfig = {
  Safe: {
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
  },
  Caution: {
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
  },
  Trigger: {
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
  },
};

const typeConfig = {
  Natural: {
    icon: Leaf,
    bg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
  },
  Artificial: {
    icon: FlaskConical,
    bg: "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-400",
  },
  "Sugar Alcohol": {
    icon: Droplets,
    bg: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400",
  },
};

export async function generateStaticParams() {
  return sweeteners.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sweetener = sweeteners.find((s) => s.id === id);
  if (!sweetener) return {};
  return {
    title: `${sweetener.name} (E${sweetener.code}) — IBS Sweetener Guide`,
    description: sweetener.description,
  };
}

export default async function SweetenerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sweetener = sweeteners.find((s) => s.id === id);
  if (!sweetener) notFound();

  const status = statusConfig[sweetener.ibsStatus];
  const type = typeConfig[sweetener.type];
  const StatusIcon = status.icon;
  const TypeIcon = type.icon;

  return (
    <main className="min-h-screen bg-background">
      {/* Sticky back bar */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors -ml-1 py-2 pr-2"
            aria-label="Back to sweetener list"
          >
            <ArrowLeft size={18} />
            All Sweeteners
          </Link>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-5">
        {/* Hero card */}
        <div className={cn("rounded-2xl border p-5", status.bg, status.border)}>
          <div className="flex items-start gap-4">
            {/* E-number badge */}
            <div className={cn("shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center bg-background/60 border", status.border)}>
              <span className="text-[10px] font-semibold text-muted-foreground leading-none mb-0.5">E</span>
              <span className={cn("text-2xl font-bold leading-none tabular-nums", status.color)}>
                {sweetener.code}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold text-foreground leading-tight text-balance">
                {sweetener.name}
              </h1>

              <div className="flex flex-wrap gap-2 mt-2">
                {/* Type pill */}
                <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full", type.bg)}>
                  <TypeIcon size={11} />
                  {sweetener.type}
                </span>

                {/* Status pill */}
                <span className={cn("inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full", status.badgeBg, status.color)}>
                  <StatusIcon size={11} />
                  {status.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* IBS advice banner */}
        <div className={cn("rounded-xl border p-4 flex gap-3", status.adviceBg, status.adviceBorder)}>
          <StatusIcon size={18} className={cn("shrink-0 mt-0.5", status.color)} />
          <div>
            <p className={cn("text-sm font-semibold mb-0.5", status.color)}>
              {status.label}
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {status.advice}
            </p>
          </div>
        </div>

        {/* Description */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            About
          </h2>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-sm text-foreground leading-relaxed">
              {sweetener.description}
            </p>
          </div>
        </section>

        {/* Also known as */}
        {sweetener.alsKnownAs && (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              Also known as
            </h2>
            <div className="bg-card border border-border rounded-xl p-4 flex gap-3">
              <Tag size={16} className="shrink-0 mt-0.5 text-muted-foreground" />
              <p className="text-sm text-foreground leading-relaxed">
                {sweetener.alsKnownAs}
              </p>
            </div>
          </section>
        )}

        {/* Common uses */}
        {sweetener.commonUses && (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              Common uses
            </h2>
            <div className="bg-card border border-border rounded-xl p-4 flex gap-3">
              <UtensilsCrossed size={16} className="shrink-0 mt-0.5 text-muted-foreground" />
              <p className="text-sm text-foreground leading-relaxed">
                {sweetener.commonUses}
              </p>
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground/70 text-center leading-relaxed pb-4">
          Based on FSANZ and Monash University FODMAP guidelines. Not medical advice — consult a dietitian for personalised guidance.
        </p>
      </div>
    </main>
  );
}
