import * as React from "react";
import type { SVGProps } from "react";
const SvgWashingMachine = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 9h18v4c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-1.129C16.18 21 14.806 21 13 21h-2c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697C3 18.657 3 16.771 3 13V9Zm9 2.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.172 3.172c-.974.974-1.139 2.442-1.166 5.078V9H21v-.75c-.028-2.636-.197-4.104-1.171-5.078C18.657 2 16.77 2 13 2h-2C7.23 2 5.343 2 4.172 3.172Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M6.5 4.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};
export default SvgWashingMachine;
