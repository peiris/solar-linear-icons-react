import * as React from "react";
import type { SVGProps } from "react";
const SvgBone = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="m12.356 15.206-1.425 1.425c-.393.394-.369 1.043-.22 1.58.28 1.013-.105 2.308-.848 3.051A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848.536.149 1.185.173 1.579-.22l5.7-5.7c.393-.394.369-1.043.22-1.58-.28-1.013.105-2.308.848-3.051A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848-.536-.149-1.185-.173-1.579.22l-1.425 1.425"
      />
    </svg>
  );
};
export default SvgBone;
