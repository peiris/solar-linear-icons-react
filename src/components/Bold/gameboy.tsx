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
        fillRule="evenodd"
        d="M12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536C5.636 2 7.758 2 12 2c4.243 0 6.364 0 7.682 1.464C21 4.93 21 7.286 21 12c0 4.714 0 7.071-1.318 8.535C18.364 22 16.242 22 12 22Zm-2.75-8a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V17a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75V14Zm7.083-.167a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0Zm0 3.334a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0Zm-2.5-.834a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM18 15.5a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0ZM7.051 7.112C7 7.302 7 7.535 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGameboy;
