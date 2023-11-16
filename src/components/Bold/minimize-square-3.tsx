import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimizeSquare3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 18c0-1.886 0-2.828.586-3.414C3.172 14 4.114 14 6 14c1.886 0 2.828 0 3.414.586C10 15.172 10 16.114 10 18c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.464 3.464C2 4.93 2 7.286 2 12v1.138c.509-.333 1.069-.48 1.606-.551.645-.087 1.439-.087 2.305-.087h.179c.865 0 1.659 0 2.304.087.711.095 1.463.32 2.08.938.619.618.844 1.37.94 2.08.086.646.086 1.44.086 2.305v.18c0 .865 0 1.659-.087 2.304-.072.537-.218 1.097-.55 1.605L12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM15.75 12.75a.75.75 0 0 0 0-1.5h-1.94l3.72-3.72a.75.75 0 0 0-1.06-1.06l-3.72 3.72V8.25a.75.75 0 0 0-1.5 0V12c0 .414.336.75.75.75h3.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMinimizeSquare3;
