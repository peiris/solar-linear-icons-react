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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6.293 9.31a.75.75 0 0 0-.586 1.38l.002.001.002.001.01.004.032.014a15.047 15.047 0 0 0 .572.225c.38.145.914.338 1.527.53.988.312 2.236.64 3.398.748v1.24c0 .43-.124.853-.357 1.216l-2.524 3.925a.75.75 0 0 0 1.262.812l2.37-3.686 2.368 3.686a.75.75 0 0 0 1.262-.812l-2.524-3.925a2.25 2.25 0 0 1-.357-1.217v-1.239c1.162-.108 2.41-.436 3.399-.748a28.01 28.01 0 0 0 2.098-.755l.033-.014.01-.004.002-.001a.75.75 0 0 0-.585-1.381l-.007.003-.027.011-.11.045a26.576 26.576 0 0 1-1.864.666c-1.178.37-2.588.715-3.699.715-1.111 0-2.52-.345-3.698-.715a26.578 26.578 0 0 1-1.974-.711L6.3 9.313l-.006-.003h-.001Z"
      />
    </svg>
  );
};
export default SvgAccessibility;
