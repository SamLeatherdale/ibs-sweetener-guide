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
  Candy,
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
  "Natural Sweetener": {
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
  Sugar: {
    icon: Candy,
    bg: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
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
    title: `${sweetener.name}${/^\d/.test(sweetener.code) ? ` (E${sweetener.code})` : ""} — IBS Sweetener Guide`,
    description: sweetener.description.join(" "),
  };
}

export default async function SweetenerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sweetener = sweeteners.find((s) => s.id === id);
  if (!sweetener) notFound();

  const status = statusConfig[sweetener.ibsStatus];
  const type = typeConfig[sweetener.type];
  const StatusIcon = status.icon;
  const TypeIcon = type.icon;

  return (
    <main className="bg-background min-h-screen">
      {/* Sticky back bar */}
      <header className="bg-background/80 border-border sticky top-0 z-30 border-b backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-lg items-center gap-3 px-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground -ml-1 inline-flex items-center gap-1.5 py-2 pr-2 text-sm font-medium transition-colors"
            aria-label="Back to sweetener list"
          >
            <ArrowLeft size={18} />
            All Sweeteners
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-lg space-y-5 px-4 py-6">
        {/* Hero card */}
        <div className={cn("rounded-2xl border p-5", status.bg, status.border)}>
          <div className="flex items-start gap-4">
            {/* Code badge */}
            <div
              className={cn(
                "bg-background/60 flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl border",
                status.border,
              )}
            >
              {/^\d/.test(sweetener.code) ? (
                <>
                  <span className="text-muted-foreground mb-0.5 text-[10px] leading-none font-semibold">
                    E
                  </span>
                  <span
                    className={cn("text-2xl leading-none font-bold tabular-nums", status.color)}
                  >
                    {sweetener.code}
                  </span>
                </>
              ) : (
                <span
                  className={cn("text-3xl leading-none font-bold tracking-tight", status.color)}
                >
                  <span>{sweetener.code[0]}</span>
                  <span className="text-xl">{sweetener.code[1]}</span>
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-foreground text-xl leading-tight font-bold text-balance">
                {sweetener.name}
              </h1>

              <div className="mt-2 flex flex-wrap gap-2">
                {/* Type pill */}
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                    type.bg,
                  )}
                >
                  <TypeIcon size={11} />
                  {sweetener.type}
                </span>

                {/* Status pill */}
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                    status.badgeBg,
                    status.color,
                  )}
                >
                  <StatusIcon size={11} />
                  {status.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* IBS advice banner */}
        <div
          className={cn("flex gap-3 rounded-xl border p-4", status.adviceBg, status.adviceBorder)}
        >
          <StatusIcon size={18} className={cn("mt-0.5 shrink-0", status.color)} />
          <div>
            <p className={cn("mb-0.5 text-sm font-semibold", status.color)}>{status.label}</p>
            <p className="text-foreground/80 text-sm leading-relaxed">{status.advice}</p>
          </div>
        </div>

        {/* Description */}
        <section>
          <h2 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
            About
          </h2>
          <div className="bg-card border-border space-y-2 rounded-xl border p-4">
            {sweetener.description.map((para, i) => (
              <p key={i} className="text-foreground text-sm leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Also known as */}
        {sweetener.alsoKnownAs && (
          <section>
            <h2 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
              Also known as
            </h2>
            <div className="bg-card border-border flex gap-3 rounded-xl border p-4">
              <Tag size={16} className="text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-foreground text-sm leading-relaxed">{sweetener.alsoKnownAs}</p>
            </div>
          </section>
        )}

        {/* Common uses */}
        {sweetener.commonUses && (
          <section>
            <h2 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
              Common uses
            </h2>
            <div className="bg-card border-border flex gap-3 rounded-xl border p-4">
              <UtensilsCrossed size={16} className="text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-foreground text-sm leading-relaxed">{sweetener.commonUses}</p>
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <p className="text-muted-foreground/70 pb-4 text-center text-xs leading-relaxed">
          Based on FSANZ and Monash University FODMAP guidelines. Not medical advice — consult a
          dietitian for personalised guidance.
        </p>
      </div>
    </main>
  );
}
