import * as React from "react";
import type { SVGProps } from "react";
const SvgArmchair = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.179 21H6.82c-.745 0-1.21 0-1.571-.042v1.291a.75.75 0 0 1-1.5 0v-1.865a4.002 4.002 0 0 1-1.656-2.494C2 17.45 2 16.92 2 15.857v-4.611C2 10.006 2.943 9 4.105 9c1.163 0 2.106 1.005 2.106 2.246v3.087c0 .943 0 1.415.292 1.707.293.293.765.293 1.708.293h7.579c.942 0 1.414 0 1.707-.293.293-.292.293-.764.293-1.707v-3.087c0-1.24.942-2.246 2.105-2.246C21.057 9 22 10.005 22 11.246v4.611c0 1.063 0 1.594-.094 2.033a4.003 4.003 0 0 1-1.656 2.494v1.866a.75.75 0 0 1-1.5 0v-1.292c-.36.042-.826.042-1.571.042Z"
      />
      <path
        fill="currentColor"
        d="M6 8.154V17h12V8.154c0-2.3 0-3.451-.482-4.308A3.648 3.648 0 0 0 16.2 2.495C15.365 2 14.243 2 12 2c-2.243 0-3.365 0-4.2.495a3.647 3.647 0 0 0-1.318 1.351C6 4.703 6 5.853 6 8.154Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgArmchair;
