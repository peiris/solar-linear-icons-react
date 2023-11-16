import * as React from "react";
import type { SVGProps } from "react";
const Svg4K = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M19.02 7.46a.75.75 0 0 1 .02 1.06l-2.666 2.773 2.757 4.302a.75.75 0 1 1-1.262.81l-2.564-4-1.055 1.097V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 1.5 0v3.338l3.71-3.858a.75.75 0 0 1 1.06-.02ZM5.5 7.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2.25V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H7.5A2.75 2.75 0 0 1 4.75 10V8a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
};
export default Svg4K;
