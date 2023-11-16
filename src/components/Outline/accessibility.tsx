import * as React from "react";
import type { SVGProps } from "react";
const SvgAccessibility = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM12 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.31 9.707a.75.75 0 0 1 .983-.398l.001.001.006.003.027.011.11.045a26.572 26.572 0 0 0 1.864.666c1.179.37 2.588.715 3.699.715 1.111 0 2.52-.345 3.698-.715a26.569 26.569 0 0 0 1.974-.711l.028-.011.006-.003h.001a.75.75 0 0 1 .586 1.38l-.004.002-.01.004-.032.014-.123.05a28.085 28.085 0 0 1-1.976.706c-.988.31-2.236.639-3.398.747v1.24c0 .43.124.853.357 1.216l2.524 3.925a.75.75 0 0 1-1.262.812L12 15.72l-2.37 3.686a.75.75 0 1 1-1.26-.812l2.523-3.925a2.25 2.25 0 0 0 .357-1.217v-1.239c-1.162-.108-2.41-.436-3.399-.747a28.1 28.1 0 0 1-2.098-.756l-.033-.014-.009-.004-.004-.001a.75.75 0 0 1-.397-.984Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAccessibility;
