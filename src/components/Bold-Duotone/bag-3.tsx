import * as React from "react";
import type { SVGProps } from "react";
const SvgBag3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.574 4.691c-.833.692-1.052 1.862-1.491 4.203l-.75 4c-.617 3.292-.926 4.938-.026 6.022C4.207 20 5.88 20 9.23 20h5.54c3.35 0 5.025 0 5.924-1.084.9-1.084.591-2.73-.026-6.022l-.75-4c-.439-2.34-.658-3.511-1.491-4.203C17.593 4 16.403 4 14.02 4H9.98c-2.382 0-3.572 0-4.406.691Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12 9.25a2.251 2.251 0 0 1-2.122-1.5.75.75 0 1 0-1.414.5 3.751 3.751 0 0 0 7.073 0 .75.75 0 1 0-1.414-.5A2.251 2.251 0 0 1 12 9.25Z"
      />
    </svg>
  );
};
export default SvgBag3;
