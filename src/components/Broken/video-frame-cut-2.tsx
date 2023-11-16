import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFrameCut2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 10c0-2.828 0-4.243-.879-5.121C20.243 4 18.828 4 16 4h-.5M22 14c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-.5m-7-16H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h.5M17 4v16M7 4v16M2.5 9H7m14.5 0H17M2.5 15H7m14.5 0H17M13.138 2h-2.276a.5.5 0 0 0-.434.748l1.138 1.992a.5.5 0 0 0 .868 0l1.139-1.992A.5.5 0 0 0 13.138 2ZM13.138 22h-2.276a.5.5 0 0 1-.434-.748l1.138-1.992a.5.5 0 0 1 .868 0l1.139 1.992a.5.5 0 0 1-.435.748ZM12 11.5v1M12 7.5v1M12 15.5v1"
      />
    </svg>
  );
};
export default SvgVideoFrameCut2;
