import * as React from "react";
import type { SVGProps } from "react";
const SvgStructure = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.907 4.256a3.001 3.001 0 1 0-3.651 3.651A.756.756 0 0 0 4.25 8v8c0 .032.002.063.006.093a3.001 3.001 0 1 0 3.651 3.651c.03.004.061.006.093.006h8a.75.75 0 0 0 .093-.006 3.001 3.001 0 1 0 3.651-3.651.75.75 0 0 0 .006-.093V8a.752.752 0 0 0-.006-.093 3.001 3.001 0 1 0-3.651-3.651A.756.756 0 0 0 16 4.25H8a.756.756 0 0 0-.093.006ZM5.744 7.907c.004.03.006.061.006.093v8a.756.756 0 0 1-.006.093 3.005 3.005 0 0 1 2.163 2.163A.752.752 0 0 1 8 18.25h8a.75.75 0 0 1 .093.006 3.005 3.005 0 0 1 2.163-2.163.75.75 0 0 1-.006-.093V8c0-.032.002-.063.006-.093a3.005 3.005 0 0 1-2.163-2.163.756.756 0 0 1-.093.006H8a.758.758 0 0 1-.093-.006 3.005 3.005 0 0 1-2.163 2.163Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStructure;
