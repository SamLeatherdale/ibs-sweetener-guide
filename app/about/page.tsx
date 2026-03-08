import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { IntestineIcon } from "@/components/icons/intestine";
import { PageFooter } from "@/components/page-footer";
import { statusConfig, typeConfig } from "@/src/config/sweetener-config";
import type { IBSStatus, SweetenerType } from "@/src/types";

export const metadata: Metadata = {
  title: "About – IBS Sweetener Guide",
  description:
    "Learn how the IBS Sweetener Guide works, what each status and sweetener type means, and how to use the filter chips.",
};

const ibsStatusDescriptions: Record<IBSStatus, string[]> = {
  safe: [
    "These sweeteners are generally well tolerated by people with IBS. They are not classified as FODMAPs by Monash University and do not cause significant fermentation or osmotic effects in the gut at typical serving sizes.",
    "They are suitable for regular consumption at normal serving sizes.",
  ],
  caution: [
    "Sweeteners marked with Caution may be tolerated in small amounts, but can provoke IBS symptoms at larger doses.",
    "Individual tolerance varies widely — some people handle them fine, while others are very sensitive. The general advice is to start with very small portions, monitor your response, and increase gradually only if tolerated.",
  ],
  trigger: [
    "These are known IBS triggers. They are high-FODMAP or otherwise problematic for the gut, causing symptoms like bloating, cramps, gas, abdominal pain, and diarrhoea in most IBS sufferers.",
    "They are best avoided entirely, or consumed only in very small amounts with caution.",
  ],
};

const sweetenerTypeDescriptions: Record<SweetenerType, string[]> = {
  natural: [
    "Sweeteners derived from plants or other natural sources with minimal chemical processing. Examples include stevia (from the Stevia rebaudiana plant), monk fruit extract (from the luo han guo melon), and thaumatin (a protein from the West African katemfe fruit).",
    'While "natural" sounds inherently safe, IBS suitability still depends on chemical structure — inulin and FOS, for example, are natural fructans and high-FODMAP triggers.',
    'Always check the IBS status rather than relying on the "natural" label alone.',
  ],
  artificial: [
    "Synthetically manufactured sweeteners created through chemical processes. These include aspartame, sucralose, acesulfame K, saccharin, neotame, and advantame. They are typically hundreds to thousands of times sweeter than sugar, so only tiny amounts are needed.",
    "Most artificial sweeteners pass through the body without being metabolised or fermented, which is why the majority are rated IBS Safe.",
    "All artificial sweeteners listed here are approved for use in Australia by FSANZ (Food Standards Australia New Zealand).",
  ],
  alcohol: [
    "Also known as sugar alcohols, polyols are chemically similar to both sugars and alcohols — though they are technically neither. Examples include sorbitol, mannitol, xylitol, erythritol, maltitol, and isomalt. They occur naturally in some fruits and are also manufactured commercially.",
    "Most polyols are only partially absorbed in the small intestine. The unabsorbed portion reaches the colon where gut bacteria ferment it, producing gas, and it draws water into the bowel through osmotic effects — causing the bloating and diarrhoea typical of IBS symptoms.",
    "Erythritol is a notable exception: approximately 90% is absorbed before reaching the colon, making it much better tolerated than other sugar alcohols.",
  ],
  sugar: [
    "Traditional caloric sugars including sucrose (table sugar), glucose, fructose, lactose, and various syrups such as honey, maple syrup, and golden syrup.",
    "Their IBS safety depends primarily on the fructose-to-glucose ratio. Sugars where fructose is balanced by or bound to glucose — sucrose, maple syrup, golden syrup, rice malt syrup — are generally well tolerated.",
    "Sugars with excess free fructose (honey, agave, high-fructose corn syrup) or those requiring specific enzymes for digestion (lactose) are common IBS triggers.",
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <header className="bg-background/80 border-border sticky top-0 z-30 border-b backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center gap-3 px-4 py-3">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground -ml-1 flex items-center gap-1 rounded-lg p-1 transition-colors"
            aria-label="Back to sweetener list"
          >
            <ArrowLeft size={18} />
          </Link>
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 rounded-lg p-1.5">
              <IntestineIcon size={18} className="text-primary" />
            </div>
            <h1 className="text-foreground text-base leading-none font-bold">About</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-lg px-4 py-6">
        {/* Intro */}
        <section className="mb-8">
          <h2 className="text-foreground mb-2 text-lg font-bold">What is this guide?</h2>
          <div className="text-muted-foreground space-y-3 text-sm leading-relaxed">
            <p>
              The IBS Sweetener Guide is a quick-reference tool for people with Irritable Bowel
              Syndrome (IBS) who need to check whether a sweetener is likely to trigger their
              symptoms.
            </p>
            <p>
              Every sweetener is categorised by its{" "}
              <strong className="text-foreground">IBS safety status</strong> and its{" "}
              <strong className="text-foreground">sweetener type</strong>. You can filter and search
              to quickly find what you need — whether you&apos;re reading a product label in the
              supermarket or choosing an ingredient for a recipe.
            </p>
            <p>
              The information is based on guidance from{" "}
              <strong className="text-foreground">Monash University&apos;s FODMAP research</strong>{" "}
              and <strong className="text-foreground">FSANZ</strong> (Food Standards Australia New
              Zealand).
            </p>
          </div>
        </section>

        {/* IBS Status */}
        <section className="mb-8">
          <h2 className="text-foreground mb-3 text-lg font-bold">IBS safety status</h2>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            Each sweetener is assigned one of three safety statuses based on how it typically
            affects people with IBS:
          </p>
          <ul className="space-y-4">
            {(Object.keys(statusConfig) as IBSStatus[]).map((status) => {
              const { label, icon: Icon, activeClass } = statusConfig[status];
              const description = ibsStatusDescriptions[status];
              return (
                <li key={status} className="border-border rounded-xl border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${activeClass}`}
                    >
                      <Icon size={12} />
                      {label}
                    </span>
                  </div>
                  <div className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                    {description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Sweetener Types */}
        <section className="mb-8">
          <h2 className="text-foreground mb-3 text-lg font-bold">Sweetener types</h2>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            Sweeteners are grouped into four categories based on their origin and chemical
            structure. Understanding these categories can help you make more informed decisions,
            since sweeteners within the same type often share similar properties and gut behaviour.
          </p>
          <ul className="space-y-4">
            {(Object.keys(typeConfig) as SweetenerType[]).map((type) => {
              const { label, icon: Icon, activeClass } = typeConfig[type];
              const description = sweetenerTypeDescriptions[type];
              return (
                <li key={type} className="border-border rounded-xl border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${activeClass}`}
                    >
                      <Icon size={12} />
                      {label}
                    </span>
                  </div>
                  <div className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                    {description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Disclaimer */}
        <section className="border-border rounded-xl border p-4">
          <h2 className="text-foreground mb-2 text-sm font-bold">Disclaimer</h2>
          <div className="text-muted-foreground space-y-2 text-xs leading-relaxed">
            <p>This guide is for general informational purposes only and is not medical advice.</p>
            <p>
              Individual tolerance varies — what is safe for one person may not be for another.
              Always consult a FODMAP-trained dietitian or healthcare professional for personalised
              guidance.
            </p>
            <p>
              Information is based on publicly available research from Monash University and FSANZ.
            </p>
          </div>
        </section>

        <PageFooter showDisclaimer={false} />
      </div>
    </main>
  );
}
