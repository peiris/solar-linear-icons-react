import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.889 16C3.74 16 2 14.21 2 12s1.741-4 3.889-4c2.148 0 3.889 1.79 3.889 4a4.06 4.06 0 0 1-.697 2.286h5.838A4.06 4.06 0 0 1 14.222 12c0-2.21 1.741-4 3.89-4C20.258 8 22 9.79 22 12s-1.741 4-3.889 4H5.89Z"
      />
    </svg>
  );
};
export default SvgRecordMinimalistic;
