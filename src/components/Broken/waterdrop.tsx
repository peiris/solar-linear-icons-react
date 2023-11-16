import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterdrop = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3.447 16A8.98 8.98 0 0 1 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.434 5.434 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22h-.777A8.467 8.467 0 0 1 6 19.874"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"
      />
    </svg>
  );
};
export default SvgWaterdrop;
