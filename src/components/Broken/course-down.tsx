import * as React from "react";
import type { SVGProps } from "react";
const SvgCourseDown = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M14.62 10.665c-.997-.991-1.496-1.487-2.115-1.487-.619 0-1.117.496-2.115 1.488l-.24.238c-.997.992-1.497 1.489-2.116 1.489s-1.118-.497-2.115-1.49L2 7m20 11v-5.546M22 18h-5.582M22 18l-4.5-4.5"
      />
    </svg>
  );
};
export default SvgCourseDown;
