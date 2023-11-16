import * as React from "react";
import type { SVGProps } from "react";
const SvgServer2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.586 3.586C2 4.172 2 5.114 2 7c0 1.886 0 2.828.586 3.414C3.172 11 4.114 11 6 11h12c1.886 0 2.828 0 3.414-.586C22 9.828 22 8.886 22 7c0-1.886 0-2.828-.586-3.414C20.828 3 19.886 3 18 3H6c-1.886 0-2.828 0-3.414.586ZM9 8.75A.75.75 0 0 1 8.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Zm4.5-2.5a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5h-4.5ZM6 8.75A.75.75 0 0 1 5.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM2.586 13.586C2 14.172 2 15.114 2 17c0 1.886 0 2.828.586 3.414C3.172 21 4.114 21 6 21h12c1.886 0 2.828 0 3.414-.586C22 19.828 22 18.886 22 17c0-1.886 0-2.828-.586-3.414C20.828 13 19.886 13 18 13H6c-1.886 0-2.828 0-3.414.586ZM12.75 17a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-7.5 1a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2Zm3.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgServer2;
