import * as React from "react";
import type { SVGProps } from "react";
const SvgDialog = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M10 22a8 8 0 1 0-7.22-4.55c.172.36.232.766.13 1.15l-.328 1.227a1.3 1.3 0 0 0 1.591 1.592L5.4 21.09a1.671 1.671 0 0 1 1.15.13c1.045.5 2.215.78 3.451.78Z" />
      <path d="M18 14.502a6.45 6.45 0 0 0 .198-.087c.362-.165.768-.227 1.153-.124l.476.127a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 1 0 9.5 5.996M6.518 14h.01m3.481 0h.009m3.482 0h.009" />
    </svg>
  );
};
export default SvgDialog;