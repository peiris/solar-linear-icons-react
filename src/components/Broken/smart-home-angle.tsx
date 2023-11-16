import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartHomeAngle = (props: SVGProps<SVGSVGElement>) => {
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
        d="m21.636 12.958-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093-1.069.92-2.591 1.004-5.451 1.011m7.665-14.124c-.54-1.127-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2c-1.154 0-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183-.286.598-.368 1.25-.324 2.125M11 22a9 9 0 0 0-9-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 22a6 6 0 0 0-6-6M5 22a3 3 0 0 0-3-3"
      />
    </svg>
  );
};
export default SvgSmartHomeAngle;
