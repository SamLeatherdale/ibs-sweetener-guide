import { notFound } from "next/navigation";
import { sweeteners } from "@/src/data/sweeteners";
import { Tag, UtensilsCrossed } from "lucide-react";
import { BackButton } from "@/components/back-button";
import { cn } from "@/lib/utils";
import { statusConfig, typeConfig } from "@/src/config/sweetener-config";

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
          <BackButton />
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
                    type.pillBg,
                  )}
                >
                  <TypeIcon size={11} />
                  {type.label}
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
