import * as React from "react";
import type { SVGProps } from "react";
const SvgListHeartMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20 6H3M10 16H3M9 11H3"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="m16.49 16.308.445-.604-.445.604Zm1.01-6.202-.536.525a.75.75 0 0 0 1.072 0l-.536-.525Zm1.01 6.202.445.604-.445-.604Zm-1.01.502v-.75.75Zm-.565-1.105c-.644-.475-1.467-1.148-2.123-1.897-.68-.775-1.062-1.502-1.062-2.093h-1.5c0 1.16.699 2.242 1.433 3.081.758.865 1.679 1.613 2.362 2.116l.89-1.207Zm-3.185-3.99c0-1.108.495-1.691 1.003-1.882.518-.193 1.342-.09 2.211.798l1.072-1.05c-1.156-1.18-2.581-1.611-3.808-1.153-1.235.462-1.978 1.717-1.978 3.287h1.5Zm5.205 5.197c.683-.503 1.604-1.25 2.362-2.116.734-.839 1.433-1.92 1.433-3.081h-1.5c0 .591-.383 1.318-1.062 2.093-.655.749-1.48 1.422-2.123 1.896l.89 1.208Zm3.795-5.197c0-1.57-.743-2.825-1.978-3.287-1.227-.458-2.652-.027-3.808 1.153l1.072 1.05c.869-.888 1.694-.99 2.21-.798.51.19 1.004.774 1.004 1.882h1.5Zm-6.705 5.197c.392.289.83.648 1.455.648v-1.5c-.015 0-.032.003-.101-.035a4.676 4.676 0 0 1-.464-.32l-.89 1.207Zm2.02-1.207c-.243.179-.366.267-.464.32-.07.038-.086.035-.101.035v1.5c.625 0 1.063-.36 1.455-.648l-.89-1.207Z"
      />
    </svg>
  );
};
export default SvgListHeartMinimalistic;
