import type { SVGProps } from "react";

export function IntestineIcon({ size = 24, className, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Entrance tube from top */}
      <path d="M9 2 C9 2 9 4 9 5 C9 7 7 7 7 9 C7 11 9 11 9 13 C9 15 7 15 7 17 C7 19 9 19 9 20" />
      {/* U-bend at bottom connecting to return path */}
      <path d="M9 20 C9 22 12 22 12 20 C12 18 15 18 15 16 C15 14 13 14 13 12 C13 10 15 10 15 8 C15 6 13 6 13 5 C13 4 13 2 13 2" />
    </svg>
  );
}
