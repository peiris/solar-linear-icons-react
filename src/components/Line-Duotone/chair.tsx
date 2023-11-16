import * as React from "react";
import type { SVGProps } from "react";
const SvgChair = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17 21v-5M7 21v-5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 12h-7c-1.65 0-2.475 0-2.987.586-.286.326-.413.764-.469 1.415-.077.9-.116 1.351.181 1.675C5.523 16 6.015 16 7 16h10c.985 0 1.477 0 1.775-.324.297-.324.258-.774.18-1.675-.055-.65-.182-1.088-.468-1.415C17.975 12 17.15 12 15.5 12Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7V8Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgChair;
