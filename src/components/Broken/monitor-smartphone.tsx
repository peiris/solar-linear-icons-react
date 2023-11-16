import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitorSmartphone = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1c0-3.771 0-5.657 1.172-6.828.47-.47 1.054-.751 1.828-.92M22 8.5c0-2.335 0-3.502-.472-4.386a4 4 0 0 0-1.642-1.642C19.002 2 17.835 2 15.5 2H9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 15c0-1.886 0-2.828.586-3.414C15.172 11 16.114 11 18 11c1.886 0 2.828 0 3.414.586C22 12.172 22 13.114 22 15v3c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22c-1.886 0-2.828 0-3.414-.586C14 20.828 14 19.886 14 18v-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 20h-2"
      />
      <path
        fill="currentColor"
        d="M11 22v.75a.75.75 0 0 0 .75-.75H11Zm-3-.75a.75.75 0 0 0 0 1.5v-1.5ZM11.75 17a.75.75 0 0 0-1.5 0h1.5ZM11 21.25H8v1.5h3v-1.5Zm.75.75v-5h-1.5v5h1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 13H2"
      />
    </svg>
  );
};
export default SvgMonitorSmartphone;
