import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundLike = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M7.5 11.11c0 1.368 1.319 2.804 2.529 3.833.823.7 1.235 1.05 1.971 1.05s1.148-.35 1.971-1.05c1.21-1.03 2.529-2.465 2.529-3.834 0-2.677-2.475-3.676-4.5-1.608-2.025-2.068-4.5-1.069-4.5 1.608Z"
      />
    </svg>
  );
};
export default SvgChatRoundLike;
