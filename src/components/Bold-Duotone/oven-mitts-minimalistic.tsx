import * as React from "react";
import type { SVGProps } from "react";
const SvgOvenMittsMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="m7.588 20.026-3.57-3.49C2.674 15.222 2 14.564 2 13.747c0-.537.29-1.005.87-1.635.59-.643.886-.964 1.02-1.3.133-.336.137-.714.144-1.47l.032-3.342C4.032 3.817 5.441 2.027 7.213 2c1.455-.022 2.702 1.152 3.121 2.78l.466-.456c2.562-2.505 6.716-2.505 9.278 0a6.314 6.314 0 0 1 0 9.072l-6.78 6.63C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M7.04 12.86a.75.75 0 1 0-1.048 1.073l4.283 4.187a.75.75 0 0 0 1.048-1.073L7.041 12.86Z"
      />
    </svg>
  );
};
export default SvgOvenMittsMinimalistic;
