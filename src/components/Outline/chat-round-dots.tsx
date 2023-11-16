import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundDots = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12c0 1.718.404 3.345 1.122 4.787.107.215.13.435.08.62l-.595 2.226c-.408 1.524.986 2.918 2.51 2.51l2.226-.596a.885.885 0 0 1 .62.08A10.709 10.709 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75ZM12 2.75a9.25 9.25 0 0 1 0 18.5 9.208 9.208 0 0 1-4.118-.965 2.383 2.383 0 0 0-1.676-.187l-2.227.596a.55.55 0 0 1-.673-.674l.596-2.226a2.383 2.383 0 0 0-.187-1.676A9.209 9.209 0 0 1 2.75 12 9.25 9.25 0 0 1 12 2.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChatRoundDots;
