import * as React from "react";
import type { SVGProps } from "react";
const SvgMapArrowRight = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M1.987 2.953a2.546 2.546 0 0 1 2.816-.473l16.51 7.363a2.338 2.338 0 0 1 0 4.315L4.802 21.52a2.546 2.546 0 0 1-2.816-.473c-.69-.659-1.009-1.735-.458-2.767l3.152-5.904.662.354-.662-.354a.789.789 0 0 0 0-.752L1.53 5.72c-.55-1.031-.232-2.108.458-2.767Zm1.036 1.085c-.274.262-.36.62-.17.976l-.662.353.661-.353 3.153 5.904c.363.68.363 1.485 0 2.165l-3.153 5.904c-.19.356-.103.714.171.976.28.267.72.387 1.169.187l16.51-7.362c.73-.326.73-1.25 0-1.575L4.192 3.85c-.448-.2-.889-.079-1.169.188Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMapArrowRight;
