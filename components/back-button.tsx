"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-muted-foreground hover:text-foreground -ml-1 inline-flex items-center gap-1.5 py-2 pr-2 text-sm font-medium transition-colors"
      aria-label="Back to sweetener list"
    >
      <ArrowLeft size={18} />
      All Sweeteners
    </button>
  );
}
