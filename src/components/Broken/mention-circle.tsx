import * as React from "react";
import type { SVGProps } from "react";
const SvgMentionCircle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 18a6 6 0 1 1 5.64-3.946 1.54 1.54 0 0 1-.413.599l-.08.074a1.637 1.637 0 0 1-2.747-1.203V12m0 0a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgMentionCircle;
