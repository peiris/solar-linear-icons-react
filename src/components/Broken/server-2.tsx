import * as React from "react";
import type { SVGProps } from "react";
const SvgServer2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21h-1M11 2h7c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6c0 1.886 0 2.828-.586 3.414C20.828 10 19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586C2 8.828 2 7.886 2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h1M13.5 6H18M6 7V5M9 7V5M13.5 17H18M6 18v-2M9 18v-2"
      />
    </svg>
  );
};
export default SvgServer2;
