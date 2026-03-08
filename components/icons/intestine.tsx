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
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Outer frame — large intestine border, clockwise */}
      <path d="M7 2 H17 Q19 2 19 4 V20 Q19 22 17 22 H7 Q5 22 5 20 V4 Q5 2 7 2 Z" />
      {/* Inner coiled path — enters top-left, snakes down in haustral folds */}
      <path d="M8 5 Q11 5 11 7 Q11 9 8 9 Q8 11 11 11 Q11 13 8 13 Q8 15 11 15 Q11 17 8 17" />
      {/* Right descending return column */}
      <path d="M16 5 L16 19" />
      {/* Bottom crossbar connecting left coil to right descender */}
      <path d="M8 19 Q12 21 16 19" />
    </svg>
  );
}
