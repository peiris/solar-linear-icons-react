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
        fill="currentColor"
        d="M8.25 2H6c-1.886 0-2.828 0-3.414.586C2 3.172 2 4.114 2 6v2.25h3a.75.75 0 0 1 0 1.5H2v1.5h2a.75.75 0 0 1 0 1.5H2v1.5h3a.75.75 0 0 1 0 1.5H2v1.5h2a.75.75 0 0 1 0 1.5H2c.001 1.24.02 1.888.337 2.361a2 2 0 0 0 .552.552C3.393 22 4.096 22 5.5 22c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C9 20.607 9 19.904 9 18.5V11c0-.943 0-1.414.293-1.707C9.586 9 10.057 9 11 9h7.5c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C22 7.607 22 6.904 22 5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.473-.316-1.121-.336-2.361-.337v2a.75.75 0 0 1-1.5 0V2h-1.5v3a.75.75 0 0 1-1.5 0V2h-1.5v2a.75.75 0 0 1-1.5 0V2h-1.5v3a.75.75 0 0 1-1.5 0V2Z"
      />
    </svg>
  );
};
export default SvgRulerAngular;
