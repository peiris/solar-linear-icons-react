import * as React from "react";
import type { SVGProps } from "react";
const SvgFullScreen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172A3.021 3.021 0 0 0 2.585 4M2 10c0-.735 0-1.4.009-2M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10M14 22c3.771 0 5.657 0 6.828-1.172a3.02 3.02 0 0 0 .587-.828M22 14c0 .736 0 1.4-.009 2"
      />
    </svg>
  );
};
export default SvgFullScreen;
