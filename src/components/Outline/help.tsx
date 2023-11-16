import * as React from "react";
import type { SVGProps } from "react";
const SvgHelp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12c0-2.284.828-4.375 2.2-5.989l3.203 3.202A4.729 4.729 0 0 0 7.25 12c0 1.041.335 2.004.903 2.787L4.95 17.989A9.213 9.213 0 0 1 2.75 12Zm6.463-3.847L6.011 4.95A9.213 9.213 0 0 1 12 2.75c2.284 0 4.375.828 5.989 2.2l-3.203 3.203A4.728 4.728 0 0 0 12 7.25a4.729 4.729 0 0 0-2.787.903ZM6.011 19.05A9.213 9.213 0 0 0 12 21.25a9.213 9.213 0 0 0 5.989-2.2l-3.203-3.203A4.728 4.728 0 0 1 12 16.75a4.729 4.729 0 0 1-2.787-.903L6.011 19.05Zm9.836-4.264 3.203 3.203A9.213 9.213 0 0 0 21.25 12a9.213 9.213 0 0 0-2.2-5.989l-3.203 3.202c.568.783.903 1.746.903 2.787a4.728 4.728 0 0 1-.903 2.787ZM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHelp;
