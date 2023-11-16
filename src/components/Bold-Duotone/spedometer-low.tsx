import * as React from "react";
import type { SVGProps } from "react";
const SvgSpedometerLow = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.811 14.38a3.001 3.001 0 0 0 0-4.248 3.011 3.011 0 0 0-4.254 0c-.447.446-.76 1.373-.974 2.35-.322 1.46-.483 2.19.1 2.772.582.581 1.313.42 2.776.1.978-.216 1.905-.527 2.352-.974Z"
      />
      <path
        fill="currentColor"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M4.42 5.476c.326-.377.679-.73 1.057-1.055a.758.758 0 0 1 .053.048l1.5 1.5A.75.75 0 0 1 5.97 7.03l-1.5-1.5a.756.756 0 0 1-.05-.054ZM2.028 12.75a10.14 10.14 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5H2.028ZM5.476 19.58a10.06 10.06 0 0 1-1.055-1.056.76.76 0 0 1 .049-.055l1.5-1.5a.75.75 0 0 1 1.06 1.061l-1.5 1.5a.751.751 0 0 1-.054.05ZM19.58 18.524c-.326.377-.679.73-1.056 1.055a.752.752 0 0 1-.054-.049l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5a.752.752 0 0 1 .05.053ZM21.972 11.25a10.124 10.124 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5h1.972ZM18.524 4.42c.377.326.73.679 1.055 1.056a.724.724 0 0 1-.049.054l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.737.737 0 0 1 .053-.05ZM12.75 2.028V4a.75.75 0 0 1-1.5 0V2.028a10.14 10.14 0 0 1 1.5 0Z"
      />
    </svg>
  );
};
export default SvgSpedometerLow;
