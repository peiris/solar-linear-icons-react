import * as React from "react";
import type { SVGProps } from "react";
const SvgMapArrowLeft = (props: SVGProps<SVGSVGElement>) => {
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
        d="m19.503 20.835-16.51-7.363c-1.324-.59-1.324-2.354 0-2.944l16.51-7.363c1.495-.667 3.047.814 2.306 2.202l-3.152 5.904c-.245.459-.245 1 0 1.458l3.152 5.904c.74 1.388-.81 2.87-2.306 2.202Z"
      />
    </svg>
  );
};
export default SvgMapArrowLeft;
