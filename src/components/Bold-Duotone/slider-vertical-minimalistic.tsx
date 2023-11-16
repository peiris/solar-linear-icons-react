import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVerticalMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.846 8c0-2.828 0-4.243.901-5.121C7.65 2 9.1 2 12 2c2.901 0 4.352 0 5.253.879.9.878.9 2.293.9 5.121v8c0 2.828 0 4.243-.9 5.121C16.352 22 14.9 22 12 22c-2.9 0-4.351 0-5.253-.879-.9-.878-.9-2.293-.9-5.121V8Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.77 3.75a.76.76 0 0 1 .768.75v15a.76.76 0 0 1-.769.75A.76.76 0 0 1 2 19.5v-15a.76.76 0 0 1 .77-.75Zm18.46 0a.76.76 0 0 1 .77.75v15a.76.76 0 0 1-.77.75.76.76 0 0 1-.768-.75v-15a.76.76 0 0 1 .769-.75Z"
        clipRule="evenodd"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSliderVerticalMinimalistic;
