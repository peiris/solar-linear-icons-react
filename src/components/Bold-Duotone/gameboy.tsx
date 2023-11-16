import * as React from "react";
import type { SVGProps } from "react";
const SvgGameboy = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.318 20.536C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.465C21 19.072 21 16.714 21 12s0-7.071-1.318-8.536C18.364 2 16.242 2 12 2 7.757 2 5.636 2 4.318 3.464 3 4.93 3 7.286 3 12c0 4.714 0 7.071 1.318 8.535Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9.25 14a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V17a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75V14ZM16.333 13.833a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0ZM16.333 17.167a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0ZM13.833 16.333a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM18 15.5a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0ZM7.051 7.112C7 7.302 7 7.535 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06Z"
      />
    </svg>
  );
};
export default SvgGameboy;
