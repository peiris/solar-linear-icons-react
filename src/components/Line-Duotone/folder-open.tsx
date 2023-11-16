import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderOpen = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M4 11.5V5.712c0-.662 0-.993.055-1.268C4.3 3.23 5.312 2.28 6.607 2.052 6.9 2 7.254 2 7.96 2c.31 0 .464 0 .612.013.641.056 1.25.292 1.745.677a6.7 6.7 0 0 1 .443.397l.44.413c.653.612.979.918 1.37 1.122.214.112.442.2.678.263.43.115.892.115 1.815.115h.299c2.106 0 3.158 0 3.843.577.063.053.123.11.18.168.615.642.615 1.63.615 3.603V11.5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 17h4"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.477 17.484C3 14.768 2.76 13.41 3.339 12.433c.148-.25.33-.475.54-.67C4.704 11 6.038 11 8.705 11h6.59c2.667 0 4 0 4.826.763.21.195.392.42.54.67.578.977.34 2.335-.138 5.05-.343 1.956-.515 2.934-1.11 3.582a2.926 2.926 0 0 1-.515.445c-.723.49-1.683.49-3.603.49h-6.59c-1.92 0-2.88 0-3.603-.49a2.925 2.925 0 0 1-.515-.445c-.595-.648-.767-1.626-1.11-3.581Z"
      />
    </svg>
  );
};
export default SvgFolderOpen;
