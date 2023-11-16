import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareSortVertical = (props: SVGProps<SVGSVGElement>) => {
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
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12.555 11.255a.75.75 0 0 1-1.11-1.01l2.5-2.75a.75.75 0 0 1 1.11 0l2.5 2.75a.75.75 0 0 1-1.11 1.01L15.25 9.94V16a.75.75 0 0 1-1.5 0V9.94l-1.195 1.315Z"
      />
      <path
        fill="currentColor"
        d="M7.555 12.746a.75.75 0 1 0-1.11 1.008l2.5 2.75a.75.75 0 0 0 1.11 0l2.5-2.75a.75.75 0 0 0-1.11-1.008L10.25 14.06V8a.75.75 0 1 0-1.5 0v6.06l-1.195-1.315Z"
      />
    </svg>
  );
};
export default SvgSquareSortVertical;
