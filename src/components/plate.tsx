import * as React from "react";
import type { SVGProps } from "react";
const SvgPlate = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M15 4.001c3.114.01 4.765.108 5.828 1.17C22 6.344 22 8.23 22 12s0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.658 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.235 4.109 5.886 4.01 9 4M12 5V3M8 10.5h8M8 14h5.5" />
    </svg>
  );
};
export default SvgPlate;