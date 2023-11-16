import * as React from "react";
import type { SVGProps } from "react";
const SvgScanner2 = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M6 13s1.8-2 6-2 6 2 6 2M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10M22 14v1m-8 7c3.771 0 5.657 0 6.828-1.172.654-.653.943-1.528 1.07-2.828M2 10V9m8-7C6.229 2 4.343 2 3.172 3.172 2.518 3.825 2.229 4.7 2.102 6"
      />
    </svg>
  );
};
export default SvgScanner2;
