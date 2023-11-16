import * as React from "react";
import type { SVGProps } from "react";
const SvgCupHot = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3.627 16.4c.177 2.654.265 3.982 1.13 4.79.865.81 2.196.81 4.856.81h.774c2.66 0 3.99 0 4.856-.81.865-.809.953-2.136 1.13-4.79l.343-5.134c.133-2 .2-2.999-.393-3.632C15.73 7 14.728 7 12.725 7h-5.45c-2.003 0-3.005 0-3.598.634-.593.633-.526 1.633-.393 3.632l.058.867"
      />
      <path
        stroke="currentColor"
        
        d="M17 17h1a4 4 0 0 0 0-8h-1"
      />
      <path
        fill="currentColor"
        d="M10 18.75a.75.75 0 0 0 0-1.5v1.5Zm3.5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-3.5 0H4v1.5h6v-1.5Zm6 0h-2.5v1.5H16v-1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m6.05 5.061.411-.575a.707.707 0 0 0-.165-.987.707.707 0 0 1-.165-.986l.41-.575m7.51 3.123.41-.575a.707.707 0 0 0-.165-.987.707.707 0 0 1-.165-.986l.41-.575m-4.49 3.123.41-.575a.707.707 0 0 0-.165-.987.707.707 0 0 1-.165-.986l.41-.575"
      />
    </svg>
  );
};
export default SvgCupHot;
