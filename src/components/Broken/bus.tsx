import * as React from "react";
import type { SVGProps } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 2.009c-2.48.036-3.885.22-4.828 1.163C4 4.343 4 6.229 4 10v2c0 3.771 0 5.657 1.172 6.828C6.343 20 8.229 20 12 20c3.771 0 5.657 0 6.828-1.172C20 17.658 20 15.771 20 12v-2c0-3.771 0-5.657-1.172-6.828-.943-.943-2.348-1.127-4.828-1.163"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 13h-4M4 13h8M15.5 16H17M7 16h1.5M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1M18 19.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.5 5h3.75M19.5 5H12"
      />
    </svg>
  );
};
export default SvgBus;