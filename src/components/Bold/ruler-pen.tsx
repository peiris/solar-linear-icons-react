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
        d="M12.586 21.414C13.172 22 14.114 22 16 22h2c1.886 0 2.828 0 3.414-.586C22 20.828 22 19.886 22 18V6c0-1.886 0-2.828-.586-3.414C20.828 2 19.886 2 18 2h-2c-1.886 0-2.828 0-3.414.586-.503.502-.574 1.267-.584 2.664H14a.75.75 0 0 1 0 1.5h-2v1.5h3a.75.75 0 0 1 0 1.5h-3v1.5h2a.75.75 0 0 1 0 1.5h-2v1.5h3a.75.75 0 0 1 0 1.5h-3v1.5h2a.75.75 0 0 1 0 1.5h-1.998c.01 1.397.081 2.162.584 2.664ZM8 15.194v-7.98a7.85 7.85 0 0 1-3 .59 7.85 7.85 0 0 1-3-.59v7.98c0 .622 0 .934.038 1.239a5 5 0 0 0 .25 1.057c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.836.52-1.126a5 5 0 0 0 .25-1.057C8 16.128 8 15.816 8 15.193ZM8 5a3 3 0 0 0-6 0v.957l.08.04c.681.33 1.675.662 2.92.662a6.678 6.678 0 0 0 3-.702V5Z"
      />
    </svg>
  );
};
export default SvgRulerPen;
