import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentationGraph = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 10.5V2.75h16v7.75c0 3.064 0 4.596-1.004 5.548s-2.62.952-5.853.952h-2.286c-3.232 0-4.849 0-5.853-.952C4 15.096 4 13.564 4 10.5Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M15.53 9.03a.75.75 0 0 0-1.06-1.06l-1.293 1.293-.177.175-.177-.175-.61-.61a4.853 4.853 0 0 0-.452-.417A1.24 1.24 0 0 0 11 7.957a1.24 1.24 0 0 0-.761.279c-.15.114-.307.271-.452.416L8.47 9.97a.75.75 0 1 0 1.06 1.06l1.293-1.293.177-.175.177.175.61.61c.145.146.302.303.452.417.176.134.427.279.761.279s.585-.145.761-.279c.15-.114.307-.271.452-.416L15.53 9.03ZM2 1.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H2ZM11.25 17v3.537l-1.585.792a.75.75 0 1 0 .67 1.342L12 21.839l1.665.832a.75.75 0 1 0 .67-1.342l-1.585-.793V17h-1.5Z"
      />
    </svg>
  );
};
export default SvgPresentationGraph;
