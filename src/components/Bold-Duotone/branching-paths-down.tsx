import * as React from "react";
import type { SVGProps } from "react";
const SvgBranchingPathsDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.75 6.5a.75.75 0 0 0-1.5 0v6A3.25 3.25 0 0 1 8 15.75h-.19l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-.22-.22H8c1.68 0 3.155-.872 4-2.187a4.746 4.746 0 0 0 4 2.187h.19l-.22.22a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l.22.22H16a3.25 3.25 0 0 1-3.25-3.25v-6Z"
      />
    </svg>
  );
};
export default SvgBranchingPathsDown;
