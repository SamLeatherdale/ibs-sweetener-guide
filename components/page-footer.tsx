"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface PageFooterProps {
  showDisclaimer?: boolean;
  showBackButton?: boolean;
}

export function PageFooter({ showDisclaimer = true, showBackButton = true }: PageFooterProps) {
  const router = useRouter();

  return (
    <footer className="pt-6 pb-4">
      {showDisclaimer && (
        <p className="text-muted-foreground/60 mb-4 text-center text-xs leading-relaxed">
          Based on FSANZ and Monash University FODMAP guidelines. Not medical advice — consult a
          dietitian for personalised guidance.
        </p>
      )}
      <div className="flex items-center justify-center gap-4">
        {showBackButton && (
          <button
            onClick={() => router.back()}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs font-medium transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft size={13} />
            Back
          </button>
        )}
        <ThemeToggle />
      </div>
    </footer>
  );
}
