import * as React from "react";
import type { SVGProps } from "react";
const SvgExpressionlessSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9 16.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5H9ZM15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5ZM9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5Z"
      />
    </svg>
  );
};
export default SvgExpressionlessSquare;
