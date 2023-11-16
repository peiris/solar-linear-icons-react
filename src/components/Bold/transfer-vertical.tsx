import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferVertical = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 13.75a.75.75 0 0 0-.507 1.303l6 5.5A.75.75 0 0 0 10.75 20V4a.75.75 0 0 0-1.5 0v9.75H4ZM20 10.25h-5.25V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 1.257-.553l6 5.5A.75.75 0 0 1 20 10.25Z"
      />
    </svg>
  );
};
export default SvgTransferVertical;
