"use client";

import { useRef, useState } from "react";
import { Hash, Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const [isNumericMode, setIsNumericMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleToggle() {
    setIsNumericMode((current) => !current);
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }

  function handleChange(nextValue: string) {
    onChange(isNumericMode ? nextValue.replace(/\D/g, "") : nextValue);
  }

  const toggleLabel = isNumericMode ? "Disable E-number keypad" : "Enable E-number keypad";

  return (
    <div className="relative">
      <Search
        size={16}
        className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2"
      />
      <input
        ref={inputRef}
        type="search"
        inputMode={isNumericMode ? "numeric" : "search"}
        pattern={isNumericMode ? "[0-9]*" : undefined}
        placeholder="Search by name or E number..."
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        className="bg-muted/60 border-border text-foreground placeholder:text-muted-foreground focus:ring-ring h-10 w-full rounded-xl border pr-12 pl-9 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none"
        aria-label="Search sweeteners"
      />
      <button
        type="button"
        aria-label={toggleLabel}
        aria-pressed={isNumericMode}
        title={toggleLabel}
        onClick={handleToggle}
        className={`focus-visible:ring-ring absolute top-1/2 right-1 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border transition-colors focus-visible:ring-2 focus-visible:outline-none ${
          isNumericMode
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
        }`}
      >
        <Hash size={17} aria-hidden="true" />
      </button>
    </div>
  );
}
