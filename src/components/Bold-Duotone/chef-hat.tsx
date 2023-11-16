import * as React from "react";
import type { SVGProps } from "react";
const SvgChefHat = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.999 18H5.002c.01 1.397.082 2.912.584 3.414C6.172 22 7.115 22 9 22h6c1.886 0 2.829 0 3.415-.586.502-.502.573-2.017.584-3.414Z"
      />
      <path
        fill="currentColor"
        d="M7 5a5 5 0 0 0-2 9.584V18h14v-3.416a5.001 5.001 0 0 0-2.737-9.53 4.502 4.502 0 0 0-8.526 0A5.04 5.04 0 0 0 7 5Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgChefHat;
