import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareTransferVertical = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.25 7a.75.75 0 0 1 1.315-.493l3 3.437a.75.75 0 0 1-1.13.987L14.75 9v8a.75.75 0 0 1-1.5 0V7ZM7.565 13.07a.75.75 0 1 0-1.13.986l3 3.437A.75.75 0 0 0 10.75 17V7a.75.75 0 0 0-1.5 0v8l-1.685-1.93Z"
      />
    </svg>
  );
};
export default SvgSquareTransferVertical;
