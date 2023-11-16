import * as React from "react";
import type { SVGProps } from "react";
const SvgCupHot = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.977 1.327a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 0 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175Zm4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175Zm4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9.613 22h.774c2.66 0 3.991 0 4.856-.81.67-.626.874-1.564 1.015-3.19H3.742c.14 1.626.344 2.564 1.014 3.19.865.81 2.196.81 4.856.81Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634.162.173.275.374.35.616H17a4.75 4.75 0 1 1 0 9.5h-.722l-.02.25H3.742a85.855 85.855 0 0 1-.116-1.6l-.343-5.134Zm13.1 4.984H17a3.25 3.25 0 0 0 0-6.5h-.2c-.012.43-.045.93-.084 1.516l-.333 4.984Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCupHot;
