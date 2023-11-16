import * as React from "react";
import type { SVGProps } from "react";
const SvgCity = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-5V16c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v5.25H2ZM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M8 4.5c.943 0 1.414 0 1.707.293C10 5.086 10 5.557 10 6.5v1.792c.157.077.293.173.414.294.404.404.53.978.569 1.914V12c-1.874 0-2.813.002-3.397.586C7 13.172 7 14.114 7 16v5.25H3V12c0-1.886 0-2.828.586-3.414A1.51 1.51 0 0 1 4 8.292V6.5c0-.943 0-1.414.293-1.707C4.586 4.5 5.057 4.5 6 4.5h.25V3a.75.75 0 0 1 1.5 0v1.5H8ZM20.644 5.247c-.356-.514-.984-.75-2.24-1.22-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12c1.886 0 2.828 0 3.414.586C17 13.172 17 14.114 17 16v5.25h4V7.772c0-1.34 0-2.011-.356-2.525Z" />
      </g>
    </svg>
  );
};
export default SvgCity;
