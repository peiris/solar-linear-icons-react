import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareArrowRightUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.536 20.536C22 19.07 22 16.714 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465ZM14.827 8.421a.75.75 0 0 1 .75.75v4.242a.75.75 0 0 1-1.5 0v-2.432L9.702 15.36a.75.75 0 1 1-1.06-1.06l4.376-4.377h-2.432a.75.75 0 0 1 0-1.5h4.242Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSquareArrowRightUp;
