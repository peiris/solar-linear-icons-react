import * as React from "react";
import type { SVGProps } from "react";
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.47 10.918a5.224 5.224 0 0 1-7.388-7.388m7.388 7.388a5.224 5.224 0 0 0-7.388-7.388m7.388 7.388s-1.847-.615-4.31-3.078m4.31 3.078L14.313 22M13.082 3.53s.616 1.847 3.078 4.31m-3.078-4.31L2 9.687M16.16 7.84 5 19"
      />
    </svg>
  );
};
export default SvgSatellite;
