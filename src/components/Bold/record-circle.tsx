import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-14.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRecordCircle;
