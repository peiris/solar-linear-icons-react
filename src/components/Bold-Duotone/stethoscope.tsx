import * as React from "react";
import type { SVGProps } from "react";
const SvgStethoscope = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={19} cy={16} r={3} fill="currentColor" />
      <path
        fill="currentColor"
        d="M12 1.25a.75.75 0 0 1 .75.75v.251a3.75 3.75 0 0 1 3.7 3.418c.014.166.014.354.014.629V7.52A7.464 7.464 0 0 1 9 14.985a7.75 7.75 0 0 1-7.75-7.75v-.937c0-.275 0-.463.015-.628A3.75 3.75 0 0 1 4.67 2.265a6.88 6.88 0 0 1 .58-.015V2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25c-.263 0-.366.001-.448.009a2.25 2.25 0 0 0-2.043 2.043c-.008.09-.009.206-.009.535v.898A6.25 6.25 0 0 0 9 13.485a5.964 5.964 0 0 0 5.964-5.964V6.337c0-.329 0-.445-.008-.535a2.25 2.25 0 0 0-2.206-2.05V4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z"
      />
      <path
        fill="currentColor"
        d="M8.25 14.95V17A5.75 5.75 0 0 0 14 22.75h.882a4.866 4.866 0 0 0 4.23-2.458c.247-.432.37-.896.43-1.34a3.015 3.015 0 0 1-1.5-.108 2.07 2.07 0 0 1-.232.705 3.366 3.366 0 0 1-2.928 1.701H14A4.25 4.25 0 0 1 9.75 17v-2.052a7.526 7.526 0 0 1-1.5.002Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgStethoscope;
