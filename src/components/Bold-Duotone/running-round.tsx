import * as React from "react";
import type { SVGProps } from "react";
const SvgRunningRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.972 5.81a3.712 3.712 0 0 1 2.846-.062c2.568 1 3.188 4.35 1.15 6.204l-1.04.946-.06.054a1.25 1.25 0 0 0 .148 1.938l.004.002c.059.045.093.07.125.096a7.75 7.75 0 0 1 3.005 6.045V22a.75.75 0 0 1-1.5 0V21.049a6.25 6.25 0 0 0-2.54-4.964l-.006-.005a2.75 2.75 0 0 1-.192-4.287l1.046-.95a2.212 2.212 0 0 0-2.38-3.66l-.522.23c-.545.24-.797.351-1.042.473a12.25 12.25 0 0 0-1.2.683c-.23.148-.454.308-.94.654l-1.439 1.024a.75.75 0 1 1-.87-1.222L5.021 7.99c.464-.331.717-.511.979-.68.434-.28.884-.537 1.347-.767.28-.138.563-.263 1.085-.493l.54-.239Z"
        clipRule="evenodd"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M15.272 11.818a.75.75 0 0 1 .91-.545 7.497 7.497 0 0 0 3.636 0 .75.75 0 1 1 .364 1.455 8.997 8.997 0 0 1-4.364 0 .75.75 0 0 1-.546-.91ZM9.48 16.424a.75.75 0 0 1 .096 1.056l-.26.311A8.223 8.223 0 0 1 3 20.752a.75.75 0 0 1 0-1.5 6.723 6.723 0 0 0 5.164-2.42l.26-.311a.75.75 0 0 1 1.056-.096Z" />
      </g>
    </svg>
  );
};
export default SvgRunningRound;
