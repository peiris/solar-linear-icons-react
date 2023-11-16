import * as React from "react";
import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21 7.162c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888l-1.165-.388c-1.367-.456-2.05-.684-2.739-.591-.688.092-1.288.491-2.487 1.29l-1.382.922c-.936.624-1.404.936-1.93 1.06a3 3 0 0 1-.587.08c-.54.018-1.073-.16-2.14-.516-1.398-.466-2.097-.699-2.629-.462a1.5 1.5 0 0 0-.497.358C3 6.5 3 7.236 3 8.71v4.065M21 11v4.29c0 1.474 0 2.211-.393 2.64a1.5 1.5 0 0 1-.497.36c-.532.236-1.231.003-2.629-.463-1.067-.356-1.6-.534-2.14-.515a3.001 3.001 0 0 0-.588.078c-.525.125-.993.437-1.929 1.06l-1.382.922c-1.2.8-1.799 1.2-2.487 1.291-.688.093-1.372-.135-2.739-.591l-1.165-.388c-.99-.33-1.485-.495-1.768-.888-.268-.372-.282-.86-.283-1.796M15 3.5V7m0 10v-6M9 20.5V17M9 7v6"
      />
    </svg>
  );
};
export default SvgMap;
