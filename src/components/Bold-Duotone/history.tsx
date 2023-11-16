import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069 3.82 3.82 3.86 9.993.064 13.788-3.795 3.795-9.968 3.756-13.788-.064a9.812 9.812 0 0 1-2.798-8.28.75.75 0 1 1 1.487.203 8.312 8.312 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064 3.199-3.2 3.18-8.423-.064-11.668-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008l.004.748Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.427-2.426a1 1 0 0 1-.293-.708V8a.75.75 0 0 1 .75-.75Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgHistory;
