import * as React from "react";
import type { SVGProps } from "react";
const SvgBones = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12C2 7.286 2 4.93 3.464 3.465c1.177-1.177 2.93-1.408 6.017-1.454v2.05c0 .556-.476.998-.96 1.273-.915.518-1.56 1.706-1.56 2.757a2.519 2.519 0 1 0 5.039 0 2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.757-.484-.275-.96-.717-.96-1.273V2.01c3.088.046 4.84.277 6.016 1.454C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536c-1.171 1.171-2.914 1.406-5.978 1.452v-2.003c0-.557.476-.999.96-1.273.915-.518 1.559-1.706 1.559-2.758a2.519 2.519 0 0 0-5.038 0 2.519 2.519 0 0 0-5.038 0c0 1.052.644 2.24 1.558 2.758.485.274.961.716.961 1.273v2.005c-3.111-.045-4.873-.273-6.055-1.454C2 19.07 2 16.714 2 12Z"
      />
    </svg>
  );
};
export default SvgBones;
