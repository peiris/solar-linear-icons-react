import * as React from "react";
import type { SVGProps } from "react";
const SvgRefresh = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.68 11.333h-.75.75Zm0 1.667-.528.532a.75.75 0 0 0 1.056 0L3.68 13Zm2.208-1.134A.75.75 0 1 0 4.83 10.8l1.057 1.065ZM2.528 10.8a.75.75 0 0 0-1.056 1.065L2.528 10.8Zm16.088-3.408a.75.75 0 1 0 1.277-.786l-1.277.786ZM12.079 2.25c-5.047 0-9.15 4.061-9.15 9.083h1.5c0-4.182 3.42-7.583 7.65-7.583v-1.5Zm-9.15 9.083V13h1.5v-1.667h-1.5Zm1.28 2.2 1.679-1.667L4.83 10.8l-1.68 1.667 1.057 1.064Zm0-1.065L2.528 10.8l-1.057 1.065 1.68 1.666 1.056-1.064Zm15.684-5.86A9.158 9.158 0 0 0 12.08 2.25v1.5a7.658 7.658 0 0 1 6.537 3.643l1.277-.786ZM20.314 11l.527-.533a.75.75 0 0 0-1.054 0l.527.533ZM18.1 12.133a.75.75 0 0 0 1.055 1.067L18.1 12.133Zm3.373 1.067a.75.75 0 1 0 1.054-1.067L21.473 13.2ZM5.318 16.606a.75.75 0 1 0-1.277.788l1.277-.788Zm6.565 5.144c5.062 0 9.18-4.058 9.18-9.083h-1.5c0 4.18-3.43 7.583-7.68 7.583v1.5Zm9.18-9.083V11h-1.5v1.667h1.5Zm-1.276-2.2L18.1 12.133l1.055 1.067 1.686-1.667-1.054-1.066Zm0 1.066 1.686 1.667 1.054-1.067-1.686-1.666-1.054 1.066ZM4.04 17.393a9.197 9.197 0 0 0 7.842 4.357v-1.5a7.697 7.697 0 0 1-6.565-3.644l-1.277.788Z"
      />
    </svg>
  );
};
export default SvgRefresh;
