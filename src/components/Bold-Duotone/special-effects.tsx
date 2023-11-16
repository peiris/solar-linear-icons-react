import * as React from "react";
import type { SVGProps } from "react";
const SvgSpecialEffects = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.25 8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6.75v2.5H10a.75.75 0 0 1 0 1.5H6.75V16a.75.75 0 1 1-1.5 0V8ZM11.55 7.4a.75.75 0 0 1 1.05.15l2.4 3.2 2.4-3.2a.75.75 0 0 1 1.2.9L15.937 12l2.663 3.55a.75.75 0 1 1-1.2.9l-2.4-3.2-2.4 3.2a.75.75 0 1 1-1.2-.9L14.062 12 11.4 8.45a.75.75 0 0 1 .15-1.05Z"
      />
    </svg>
  );
};
export default SvgSpecialEffects;
