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
        d="M13.106 2.815a9.206 9.206 0 0 0-5.73 1.174 9.25 9.25 0 1 0 9.25 16.021 9.205 9.205 0 0 0 3.88-4.376 9.235 9.235 0 0 0-.495-8.26 9.235 9.235 0 0 0-6.905-4.559Zm-6.48-.125a10.706 10.706 0 0 1 6.66-1.364 10.735 10.735 0 0 1 8.024 5.299 10.735 10.735 0 0 1 .577 9.598 10.706 10.706 0 0 1-4.512 5.087c-5.141 2.968-11.716 1.206-14.684-3.935C-.278 12.233 1.484 5.658 6.625 2.69Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.75 9a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM8 9.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM14.25 9a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM9.75 13.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM8 14.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM18.25 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
};
export default SvgRadialBlur;
