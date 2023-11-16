import * as React from "react";
import type { SVGProps } from "react";
const SvgBedsideTable2 = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 22v-1.5M5 22v-1.5"
      />
      <path fill="currentColor" d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2M2 14h12m8 0h-4M2 8h20"
      />
    </svg>
  );
};
export default SvgBedsideTable2;
