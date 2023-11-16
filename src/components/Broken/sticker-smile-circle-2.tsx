import * as React from "react";
import type { SVGProps } from "react";
const SvgStickerSmileCircle2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10 0 .648-.3 1.25-.758 1.708l-7.534 7.534C13.25 21.7 12.648 22 12 22 6.477 22 2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 17c-1.115 0-2.15-.37-3-1"
      />
      <ellipse cx={15} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"
      />
    </svg>
  );
};
export default SvgStickerSmileCircle2;
