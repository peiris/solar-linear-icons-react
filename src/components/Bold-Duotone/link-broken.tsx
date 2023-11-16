import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkBroken = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.5}>
        <path d="M19.99 3.991c-1.553-1.521-3.681-1.58-4.765-.518l-3.7 3.625a.75.75 0 1 1-1.05-1.071l3.7-3.625c1.837-1.799 4.914-1.393 6.865.518 1.953 1.913 2.378 4.955.528 6.768l-2.907 2.848a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.022-3.106-.528-4.625ZM6.728 12.506a.75.75 0 0 0-1.107-1.012l-1.261 1.38c-1.727 1.889-1.35 5.053.504 7.081 1.865 2.04 4.87 2.505 6.655.552l4.035-4.414a.75.75 0 0 0-1.107-1.012l-4.035 4.414c-1 1.095-2.963 1.065-4.44-.552-1.49-1.628-1.564-3.9-.505-5.058l1.26-1.379Z" />
      </g>
      <path
        fill="currentColor"
        d="M6.624 3.584a.75.75 0 0 0-1.248.832l2 3a.75.75 0 1 0 1.248-.832l-2-3ZM2.237 7.288a.75.75 0 1 0-.474 1.423l6 2a.75.75 0 0 0 .474-1.423l-6-2Z"
      />
    </svg>
  );
};
export default SvgLinkBroken;
