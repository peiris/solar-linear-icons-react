import * as React from "react";
import type { SVGProps } from "react";
const SvgRemoteController2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M19 15V9c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104c-.589.881-.663 2.064-.673 4.222M18.81 19c-.1.482-.252.875-.484 1.222a4.003 4.003 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15v-3"
      />
      <path
        stroke="currentColor"
        
        d="M15 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <circle cx={10} cy={6} r={1} fill="currentColor" />
      <path fill="currentColor" d="M15 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <circle cx={14} cy={6} r={1} fill="currentColor" />
    </svg>
  );
};
export default SvgRemoteController2;
