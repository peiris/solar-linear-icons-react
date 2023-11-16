import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartVacuumCleaner2 = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
      <path d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 18v-2M2 22l2.5-2.5M22 22l-2.5-2.5" />
    </svg>
  );
};
export default SvgSmartVacuumCleaner2;