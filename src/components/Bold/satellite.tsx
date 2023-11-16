import * as React from "react";
import type { SVGProps } from "react";
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => {
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
        d="m21.565 10.492.266.067a6.001 6.001 0 0 0-8.399-8.384l.076.26.284.854.003.007.017.045c.017.043.045.113.088.206.084.187.225.47.44.829.432.718 1.164 1.747 2.35 2.934 1.187 1.186 2.216 1.918 2.935 2.35.359.215.642.356.828.44a4.157 4.157 0 0 0 .25.105l.006.002h.001l.855.285Zm-7.907 11.144 4.913-8.844a5.965 5.965 0 0 0 2.47-1.356l-6.072 10.928a.75.75 0 0 1-1.311-.728Zm-.337-9.896 2.849-2.849c1.053.98 1.98 1.633 2.683 2.055.21.126.4.23.567.318l-.849 1.528a6.002 6.002 0 0 1-5.25-1.052Zm-1.061-1.06a6.049 6.049 0 0 0 1.06 1.06l-7.79 7.79a.75.75 0 0 1-1.06-1.06l7.79-7.79Zm-1.052-5.25 1.528-.85c.087.167.193.357.319.567.421.703 1.074 1.63 2.054 2.683l-2.85 2.85a6.003 6.003 0 0 1-1.05-5.25Zm0 0a5.967 5.967 0 0 1 1.356-2.47L1.636 9.031a.75.75 0 0 0 .728 1.311l8.844-4.913Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSatellite;
