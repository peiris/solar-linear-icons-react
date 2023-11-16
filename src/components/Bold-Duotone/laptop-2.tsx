import * as React from "react";
import type { SVGProps } from "react";
const SvgLaptop2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.5 2h5c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v7h-3.833a3.5 3.5 0 0 0-2.1.7l-.934.7a.5.5 0 0 1-.3.1h-2.666a.5.5 0 0 1-.3-.1l-.934-.7a3.5 3.5 0 0 0-2.1-.7H3.5V8c0-2.828 0-4.243.879-5.121C5.257 2 6.672 2 9.5 2Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M5 22h14a3 3 0 0 0 3-3v-1.5a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1V19a3 3 0 0 0 3 3Z"
      />
    </svg>
  );
};
export default SvgLaptop2;
