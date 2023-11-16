import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudBolt = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.286 18C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.626 17.453 1.148-1.553c.743-1.005 1.114-1.507 1.46-1.4.346.106.346.722.346 1.953v.116c0 .445 0 .667.142.806l.008.007c.145.137.376.137.838.137.832 0 1.249 0 1.39.252l.006.013c.133.256-.108.582-.59 1.234l-1.148 1.553c-.743 1.005-1.114 1.507-1.46 1.4-.346-.105-.346-.721-.346-1.953v-.116c0-.445 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137-.832 0-1.248 0-1.39-.252a.427.427 0 0 1-.006-.013c-.133-.256.108-.582.59-1.234Z"
      />
    </svg>
  );
};
export default SvgCloudBolt;
