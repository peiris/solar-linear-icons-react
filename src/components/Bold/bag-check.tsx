import * as React from "react";
import type { SVGProps } from "react";
const SvgBagCheck = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084-.9-1.084-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203.601-.499 1.389-.637 2.676-.676ZM9.75 5a2.25 2.25 0 0 1 4.5 0v1H9.75V5Zm5.719 5.914a.75.75 0 0 1 .117 1.055l-4 5a.75.75 0 0 1-1.116.061l-2-2a.75.75 0 0 1 1.06-1.06l1.408 1.407 3.476-4.346a.75.75 0 0 1 1.055-.117Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBagCheck;
