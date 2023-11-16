import * as React from "react";
import type { SVGProps } from "react";
const SvgBombEmoji = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.558.558 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.558.558 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.558.558 0 0 0 .314-.315l.654-1.659Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-5 2.25a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5.448 1.5 1 1.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m16.767 8.294-.75.75a8.555 8.555 0 0 0-1.06-1.061l.75-.75.76.3.3.76Z"
      />
    </svg>
  );
};
export default SvgBombEmoji;
