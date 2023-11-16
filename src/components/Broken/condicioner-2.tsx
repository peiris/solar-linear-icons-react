import * as React from "react";
import type { SVGProps } from "react";
const SvgCondicioner2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 5c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11c0 3.771 0 5.657 1.172 6.828C4.343 19 6.229 19 10 19h4c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5h-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 18.5c0-1.404 0-2.107-.337-2.611a1.999 1.999 0 0 0-.552-.552C16.607 15 15.904 15 14.5 15h-5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6 16.393 6 17.096 6 18.5M6 11.5h2m10 0h-6M6 9h6m6 0h-2"
      />
    </svg>
  );
};
export default SvgCondicioner2;
