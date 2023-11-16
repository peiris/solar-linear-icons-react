import * as React from "react";
import type { SVGProps } from "react";
const SvgTranslation = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12a9.969 9.969 0 0 1-2.922 7.064M19.141 5a10.015 10.015 0 0 1 2.027 3M5 19.142A9.97 9.97 0 0 1 2 12a9.969 9.969 0 0 1 2.936-7.078M6 11.982C6 10.427 6.673 9.018 7.762 8m8.523.044C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16a5.738 5.738 0 0 1-.865-1"
      />
      <circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default SvgTranslation;
