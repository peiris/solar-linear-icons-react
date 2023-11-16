import * as React from "react";
import type { SVGProps } from "react";
const SvgExplicit = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM8.25 8c0-.966.784-1.75 1.75-1.75h5a.75.75 0 0 1 0 1.5h-5a.25.25 0 0 0-.25.25v3.25H15a.75.75 0 0 1 0 1.5H9.75V16c0 .138.112.25.25.25h5a.75.75 0 0 1 0 1.5h-5A1.75 1.75 0 0 1 8.25 16V8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgExplicit;
