import * as React from "react";
import type { SVGProps } from "react";
const SvgSleeping = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0v-1.25h18.5V18a.75.75 0 0 0 1.5 0V15.469c0-1.828 0-2.944-.323-3.868A5.75 5.75 0 0 0 18.9 8.073c-.924-.324-2.04-.323-3.868-.323h-.3c-.673 0-1.195-.001-1.64.154a2.75 2.75 0 0 0-1.687 1.688c-.155.444-.155.966-.154 1.64v4.018h-8.5V6Zm18.5 9.25h-8.5v-3.893c0-.86.01-1.1.07-1.27a1.25 1.25 0 0 1 .767-.767c.17-.06.41-.07 1.27-.07 2.058 0 2.895.01 3.547.239a4.25 4.25 0 0 1 2.608 2.607c.212.608.236 1.38.238 3.154Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 7.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM5.25 11a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSleeping;
