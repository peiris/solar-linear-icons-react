import * as React from "react";
import type { SVGProps } from "react";
const SvgRestartSquare = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
      <path d="m15.978 8.715-.442-.453a4.918 4.918 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.919 4.919 0 0 0 7.072 0 5.184 5.184 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6" />
    </svg>
  );
};
export default SvgRestartSquare;