import * as React from "react";
import type { SVGProps } from "react";
const SvgPenNewSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.3 2.806-.648.65-5.965 5.964c-.404.404-.606.606-.78.829-.205.262-.38.547-.524.848-.121.255-.211.526-.392 1.068L8.412 13.9l-.374 1.123a.742.742 0 0 0 .94.939l1.122-.374 1.735-.579c.542-.18.813-.27 1.068-.392.301-.144.586-.32.848-.524.223-.174.425-.376.83-.78l5.964-5.965.649-.649A2.753 2.753 0 0 0 17.3 2.806Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588 8.413 13.9"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgPenNewSquare;