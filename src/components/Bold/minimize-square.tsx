import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimizeSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.134 0 6.455 0 7.952.988L14.75 8.189V6.25a.75.75 0 0 0-1.5 0V10c0 .414.336.75.75.75h3.75a.75.75 0 0 0 0-1.5h-1.94l5.202-5.202C22 5.545 22 7.866 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-4.134 0-6.455 0-7.952-.988l5.202-5.201v1.939a.75.75 0 0 0 1.5 0V14a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0 0 1.5h1.94l-5.202 5.202C2 18.455 2 16.134 2 12Z"
      />
    </svg>
  );
};
export default SvgMinimizeSquare;
