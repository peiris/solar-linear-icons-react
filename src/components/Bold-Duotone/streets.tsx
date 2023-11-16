import * as React from "react";
import type { SVGProps } from "react";
const SvgStreets = (props: SVGProps<SVGSVGElement>) => {
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
        d="m21.012 4.048-7.952 7.951 7.952 7.952C22 18.455 22 16.134 22 12c0-4.133 0-6.455-.988-7.951ZM12 13.06l-7.952 7.952C5.544 22 7.866 22 11.999 22c4.135 0 6.456 0 7.952-.988L12 13.06Z"
      />
      <path
        fill="currentColor"
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.134 0 6.455.988 7.952L19.952 2.988C18.455 2 16.134 2 12 2 7.286 2 4.929 2 3.464 3.464Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgStreets;
