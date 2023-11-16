import * as React from "react";
import type { SVGProps } from "react";
const SvgRadialBlur = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17 20.66C12.217 23.421 6.1 21.783 3.34 17 .577 12.217 2.216 6.1 7 3.34a9.956 9.956 0 0 1 6.195-1.27A9.985 9.985 0 0 1 20.66 7a9.985 9.985 0 0 1 .536 8.929A9.956 9.956 0 0 1 17 20.66ZM14.25 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM9.75 11a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-12.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5 2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM6.5 9.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm11.75 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-11.75.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRadialBlur;
