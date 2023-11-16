import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordCircle1 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM8 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.26-8.25a3.25 3.25 0 1 1 2.74 1.5H8a3.25 3.25 0 1 1 2.74-1.5h2.52Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRecordCircle1;
