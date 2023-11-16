import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerAngular = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 9h-1c-.943 0-1.414 0-1.707.293C9 9.586 9 10.057 9 11v7.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5V6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h12.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C22 3.393 22 4.096 22 5.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C20.607 9 19.904 9 18.5 9H16M12 2v2m6-2v2M9 2v3m6-3v3M2 12h2m-2 6h2m-2-3h3M2 9h3"
      />
    </svg>
  );
};
export default SvgRulerAngular;
