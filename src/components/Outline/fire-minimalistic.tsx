import * as React from "react";
import type { SVGProps } from "react";
const SvgFireMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M8.887 4.29C6.937 6.135 4.75 9.309 4.75 13.505c0 3.68 3.2 6.746 7.25 6.746s7.25-3.065 7.25-6.746c0-3.267-1.679-5.889-2.975-7.278-.393.83-.96 1.8-1.675 2.601-.777.872-1.834 1.66-3.123 1.679-.873.098-1.964-.247-2.55-1.457-.497-1.023-.574-2.557-.04-4.758Zm1.21-1.808c.404.294.617.829.458 1.376-.743 2.555-.59 3.896-.28 4.536.27.557.704.665 1.054.619l.05-.007h.05c.678 0 1.377-.42 2.052-1.177.662-.742 1.2-1.698 1.554-2.5.326-.736 1.364-1.103 2.055-.417 1.49 1.479 3.66 4.583 3.66 8.592 0 4.6-3.964 8.246-8.75 8.246s-8.75-3.647-8.75-8.246c0-5.295 3.076-9.095 5.36-10.969a1.201 1.201 0 0 1 1.487-.053Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFireMinimalistic;
