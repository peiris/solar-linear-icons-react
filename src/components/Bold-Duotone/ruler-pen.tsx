import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerPen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16 22c-1.886 0-2.828 0-3.414-.586-.503-.502-.574-1.267-.584-2.664L12 17.25V6.75l.002-1.5c.01-1.397.081-2.162.584-2.664C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22h-2Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M15 8.25h-3v1.5h3a.75.75 0 0 0 0-1.5ZM14 5.25h-1.998L12 6.75h2a.75.75 0 0 0 0-1.5ZM14 11.25h-2v1.5h2a.75.75 0 0 0 0-1.5ZM15 14.25h-3v1.5h3a.75.75 0 0 0 0-1.5ZM14 17.25h-2l.002 1.5H14a.75.75 0 0 0 0-1.5ZM8 14.98V7a7.85 7.85 0 0 1-3 .59A7.85 7.85 0 0 1 2 7v7.98c0 .622 0 .934.038 1.24a5 5 0 0 0 .25 1.056c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.835.52-1.126a5 5 0 0 0 .25-1.057C8 15.914 8 15.602 8 14.98Z"
      />
      <path
        fill="currentColor"
        d="M5 2a3 3 0 0 1 3 3v2a7.85 7.85 0 0 1-3 .589A7.85 7.85 0 0 1 2 7V5a3 3 0 0 1 3-3Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgRulerPen;
