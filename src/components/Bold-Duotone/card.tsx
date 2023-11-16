import * as React from "react";
import type { SVGProps } from "react";
const SvgCard = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-.442-.002-1.608-.004-2H2c-.002.392 0 1.558 0 2 0 3.771 0 5.657 1.171 6.828C4.343 20 6.23 20 10 20Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4ZM12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5h-1.5ZM6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H6Z"
      />
    </svg>
  );
};
export default SvgCard;
