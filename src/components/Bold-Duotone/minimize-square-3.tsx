import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimizeSquare3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 12a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v1.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-3.72 3.72h1.94a.75.75 0 0 1 .75.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 17.5c0-2.121 0-3.182.659-3.841C3.318 13 4.379 13 6.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.659C2 20.682 2 19.621 2 17.5Z"
      />
    </svg>
  );
};
export default SvgMinimizeSquare3;
