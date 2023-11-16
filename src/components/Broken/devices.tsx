import * as React from "react";
import type { SVGProps } from "react";
const SvgDevices = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 10c0-3.771 0-5.657-1.172-6.828C19.658 2 17.772 2 14 2 10.23 2 8.343 2 7.172 3.172 6.229 4.115 6.045 5.52 6.009 8M22 14c0 3.771 0 5.657-1.172 6.828C19.658 22 17.772 22 14 22h-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5v-4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 19h-5"
      />
    </svg>
  );
};
export default SvgDevices;
