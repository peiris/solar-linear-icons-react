import * as React from "react";
import type { SVGProps } from "react";
const SvgBonfire = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.313 14.7a.75.75 0 0 1 .988-.387l5 2.188a.75.75 0 1 1-.601 1.374l-5-2.188a.75.75 0 0 1-.387-.987Zm17.374 0a.75.75 0 0 1-.386.987l-16 7a.75.75 0 0 1-.601-1.374l16-7a.75.75 0 0 1 .987.387Zm-6.874 4.593a.75.75 0 0 1 .988-.386l5.5 2.406a.75.75 0 1 1-.601 1.374l-5.5-2.406a.75.75 0 0 1-.387-.988ZM11.6 15c2.133 0 6.4-1.239 6.4-6.193 0-3.031-1.849-5.23-3.6-6.542-.897-.674-2.047.025-2.047 1.124 0 .743-.21 1.977-.793 2.891-.682 1.07-1.809.141-1.987-1.104-.09-.624-.777-.882-1.312-.523C7.208 5.358 6 6.71 6 8.807 6 13.761 9.733 15 11.6 15Zm3.616-5.718a.75.75 0 0 1 .502.934c-.268.896-1.384 2.534-3.718 2.534a.75.75 0 0 1 0-1.5c1.506 0 2.15-1.028 2.282-1.466a.75.75 0 0 1 .934-.502Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBonfire;
