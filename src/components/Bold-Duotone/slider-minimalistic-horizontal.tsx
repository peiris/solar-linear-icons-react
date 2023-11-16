import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderMinimalisticHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.25 2.77a.76.76 0 0 1-.75.768h-15a.76.76 0 0 1-.75-.769A.76.76 0 0 1 4.5 2h15a.76.76 0 0 1 .75.77Zm0 18.46a.76.76 0 0 1-.75.77h-15a.76.76 0 0 1-.75-.77.76.76 0 0 1 .75-.768h15a.76.76 0 0 1 .75.769Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M16 5.846c2.828 0 4.243 0 5.121.901C22 7.65 22 9.1 22 12c0 2.901 0 4.352-.879 5.253-.878.9-2.293.9-5.121.9H8c-2.828 0-4.243 0-5.121-.9C2 16.352 2 14.9 2 12c0-2.9 0-4.351.879-5.253.878-.9 2.293-.9 5.121-.9h8Z"
      />
    </svg>
  );
};
export default SvgSliderMinimalisticHorizontal;
