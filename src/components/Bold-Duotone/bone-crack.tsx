import * as React from "react";
import type { SVGProps } from "react";
const SvgBoneCrack = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.738 17.7a2.519 2.519 0 0 0 3.562 0 2.519 2.519 0 1 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.186.22-1.579l4.452-4.452-3.03.881v-1.414l-2.12.707-.014-2.134-2.85 2.85c-.394.393-1.043.369-1.58.22-1.013-.28-2.308.105-3.051.848a2.519 2.519 0 0 0 0 3.563Z"
      />
      <path
        fill="currentColor"
        d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-2.85 2.85.013 2.135 2.121-.708v1.415l3.03-.882 1.248-1.248c.393-.393 1.043-.369 1.58-.22 1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 1 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBoneCrack;
