import * as React from "react";
import type { SVGProps } from "react";
const SvgBonfire = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20 15 4 22M4 15l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6 8.86C6 13.772 9.733 15 11.6 15c.956 0 2.34-.246 3.577-.96m1.92-1.803c.551-.86.903-1.967.903-3.377 0-3.126-2.001-5.36-3.81-6.64-.818-.578-1.837.057-1.837 1.045v.223c0 .996-.428 2.814-1.617 3.57-.607.386-1.263-.192-1.336-.896l-.061-.58c-.07-.672-.77-1.08-1.32-.67a5.2 5.2 0 0 0-1.335 1.454"
      />
    </svg>
  );
};
export default SvgBonfire;
