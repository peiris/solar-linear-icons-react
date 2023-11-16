import * as React from "react";
import type { SVGProps } from "react";
const SvgTextSelection = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.86 3.263A2 2 0 1 0 3.263 5.86.754.754 0 0 0 3.25 6v12c0 .048.004.095.013.14a2 2 0 1 0 2.597 2.597.752.752 0 0 0 .14.013h12a.752.752 0 0 0 .14-.013 2 2 0 1 0 2.597-2.597.752.752 0 0 0 .013-.14V6a.752.752 0 0 0-.013-.14 2 2 0 1 0-2.597-2.597.754.754 0 0 0-.14-.013H6a.754.754 0 0 0-.14.013ZM4.737 5.86A.754.754 0 0 1 4.75 6v12a.754.754 0 0 1-.013.14c.512.203.92.611 1.123 1.123A.752.752 0 0 1 6 19.25h12c.048 0 .095.005.14.013.203-.512.611-.92 1.123-1.123a.752.752 0 0 1-.013-.14V6c0-.048.005-.095.013-.14a2.007 2.007 0 0 1-1.123-1.123.754.754 0 0 1-.14.013H6a.754.754 0 0 1-.14-.013c-.203.512-.611.92-1.123 1.123Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextSelection;
