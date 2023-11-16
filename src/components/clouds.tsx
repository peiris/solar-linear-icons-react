import * as React from "react";
import type { SVGProps } from "react";
const SvgClouds = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M22 12.353c0-2.472-1.607-4.573-3.845-5.338M6.285 18C3.92 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 0 1 1.55.634M17.048 15.142c.387-.13.804-.2 1.238-.2.425 0 .834.067 1.215.192m-7.176 1.622a2.948 2.948 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353 9 20.815 10.247 22 11.786 22h6.5C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.367 3.367 0 0 1-.23-1.227c0-1.949 1.662-3.529 3.714-3.529 1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396" />
    </svg>
  );
};
export default SvgClouds;