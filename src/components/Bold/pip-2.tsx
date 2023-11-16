import * as React from "react";
import type { SVGProps } from "react";
const SvgPip2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.955 5.061C2 6.375 2 8.251 2 12c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 2.955 5.06Zm8.219 7.38C11 12.868 11 13.412 11 14.5c0 1.087 0 1.63.174 2.06a2.31 2.31 0 0 0 1.237 1.262c.42.178.953.178 2.018.178h1.142c1.065 0 1.598 0 2.018-.178a2.31 2.31 0 0 0 1.237-1.262c.174-.43.174-.973.174-2.06 0-1.087 0-1.63-.174-2.06a2.31 2.31 0 0 0-1.237-1.262C17.169 11 16.636 11 15.571 11H14.43c-1.065 0-1.598 0-2.018.178a2.31 2.31 0 0 0-1.237 1.262Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPip2;
