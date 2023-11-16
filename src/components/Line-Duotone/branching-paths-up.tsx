import * as React from "react";
import type { SVGProps } from "react";
const SvgBranchingPathsUp = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M11.25 18a.75.75 0 0 0 1.5 0h-1.5ZM18 8l.53.53a.75.75 0 0 0 0-1.06L18 8Zm-.97-2.03a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 3a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM12.75 18v-6h-1.5v6h1.5ZM16 8.75h2v-1.5h-2v1.5Zm2.53-1.28-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06Zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5-1.06-1.06ZM12.75 12A3.25 3.25 0 0 1 16 8.75v-1.5A4.75 4.75 0 0 0 11.25 12h1.5Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M11.25 18a.75.75 0 0 0 1.5 0h-1.5ZM6 8l-.53-.53a.75.75 0 0 0 0 1.06L6 8Zm2.03-.97a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-1.06 3a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12.75 18v-6h-1.5v6h1.5ZM8 7.25H6v1.5h2v-1.5ZM6.53 8.53l1.5-1.5-1.06-1.06-1.5 1.5 1.06 1.06Zm-1.06 0 1.5 1.5 1.06-1.06-1.5-1.5-1.06 1.06ZM12.75 12A4.75 4.75 0 0 0 8 7.25v1.5A3.25 3.25 0 0 1 11.25 12h1.5Z"
      />
    </svg>
  );
};
export default SvgBranchingPathsUp;
