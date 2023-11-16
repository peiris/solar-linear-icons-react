import * as React from "react";
import type { SVGProps } from "react";
const SvgUsb = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={20} r={2} fill="currentColor" />
      <circle cx={6} cy={6} r={2} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a.75.75 0 0 1 .624.334l2 3a.75.75 0 1 1-1.248.832L12 3.352l-1.376 2.064a.75.75 0 1 1-1.248-.832l2-3A.75.75 0 0 1 12 1.25Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 8c0-.943 0-1.414.293-1.707C16.586 6 17.057 6 18 6c.943 0 1.414 0 1.707.293C20 6.586 20 7.057 20 8c0 .943 0 1.414-.293 1.707C19.414 10 18.943 10 18 10c-.943 0-1.414 0-1.707-.293C16 9.414 16 8.943 16 8Z"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M12.008 1.25ZM12.616 1.571l.008.013.003.004-.011-.017ZM12 3.352l.75 1.125v10.515c.121-.062.248-.115.38-.16l3.265-1.088c.51-.17.855-.647.855-1.186V9.991c.21.009.458.009.75.009s.54 0 .75-.009V12.558a2.75 2.75 0 0 1-1.88 2.61l-3.265 1.088a1.25 1.25 0 0 0-.855 1.186v.703a1.995 1.995 0 0 0-1.5 0v-3.703a1.25 1.25 0 0 0-.855-1.186L7.13 12.167a2.75 2.75 0 0 1-1.88-2.609V7.855a1.994 1.994 0 0 0 1.5 0v1.703c0 .539.344 1.016.855 1.186l3.265 1.089c.132.044.259.097.38.159V4.477L12 3.352Z" />
      </g>
    </svg>
  );
};
export default SvgUsb;
