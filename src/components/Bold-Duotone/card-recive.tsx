import * as React from "react";
import type { SVGProps } from "react";
const SvgCardRecive = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 20h4c.66 0 1.261 0 1.812-.006l-.403-.403a2.25 2.25 0 0 1 1.341-3.827V14a2.25 2.25 0 0 1 4.5 0v1.764c.224.025.445.083.654.175C22 14.917 22 13.636 22 12c0-.442 0-1.608-.002-2H2.002C2 10.392 2 11.558 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.47 20.53a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V14a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5h-1.5ZM6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H6ZM9.995 4h4.01c3.781 0 5.672 0 6.846 1.116.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4Z"
      />
    </svg>
  );
};
export default SvgCardRecive;
