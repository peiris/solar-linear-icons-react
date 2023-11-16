import * as React from "react";
import type { SVGProps } from "react";
const SvgTv = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12v4c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8V6Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22 12v4c0 2.828 0 4.242-.879 5.121-.825.825-2.123.876-4.621.879H16V6h.5c2.498.003 3.796.053 4.621.878C22 7.758 22 9.171 22 12ZM13.416 6l2.153-2.512a.75.75 0 0 0-1.138-.976L12 5.348 9.57 2.512a.75.75 0 0 0-1.14.976L10.585 6h2.832Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M19 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM19 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
    </svg>
  );
};
export default SvgTv;
