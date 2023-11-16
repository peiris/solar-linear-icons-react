import * as React from "react";
import type { SVGProps } from "react";
const SvgDislike = (props: SVGProps<SVGSVGElement>) => {
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
        d="m20.27 8.485.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.182a.833.833 0 0 0-.821.969l.663 4.045c.107.657.077 1.329-.09 1.974-.14.533-.551.962-1.093 1.136l-.145.047c-.327.105-.684.08-.993-.068a1.264 1.264 0 0 1-.68-.818l-.476-1.834a7.628 7.628 0 0 0-.656-1.679c-.416-.777-1.058-1.4-1.725-1.975l-1.44-1.24a1.668 1.668 0 0 1-.572-1.406l.813-9.393A1.666 1.666 0 0 1 8.596 2.75h4.649c3.481 0 6.452 2.426 7.024 5.735Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75Z"
        clipRule="evenodd"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgDislike;
