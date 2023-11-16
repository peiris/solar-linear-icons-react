import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoRight = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.47 3.47a.75.75 0 0 0 0 1.06L18.94 7l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m18.94 7-.75-.75H8.963c-.904 0-1.633 0-2.222.053-.606.055-1.136.172-1.617.45a3.75 3.75 0 0 0-1.373 1.372c-.277.481-.394 1.011-.449 1.617-.053.589-.053 1.318-.053 2.222v.072c0 .904 0 1.633.053 2.222.055.606.172 1.136.45 1.617a3.75 3.75 0 0 0 1.372 1.373c.481.277 1.011.394 1.617.449.589.053 1.318.053 2.222.053H16a.75.75 0 0 0 0-1.5H9c-.948 0-1.61 0-2.122-.047-.503-.046-.788-.13-1.003-.254a2.25 2.25 0 0 1-.824-.824c-.124-.215-.208-.5-.254-1.003-.046-.512-.047-1.174-.047-2.122s0-1.61.047-2.122c.046-.503.13-.788.254-1.003a2.25 2.25 0 0 1 .824-.824c.215-.124.5-.208 1.003-.254C7.39 7.751 8.052 7.75 9 7.75h9.19l.75-.75Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgUndoRight;
