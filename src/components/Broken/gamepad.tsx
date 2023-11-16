import * as React from "react";
import type { SVGProps } from "react";
const SvgGamepad = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M21.22 8c-.689-2.184-1.792-3.365-3.13-3.84-.38-.135-.788-.16-1.193-.16h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.308 2.308 0 0 1-2.666 0l-.502-.355A4.241 4.241 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16-2.383.846-4.022 3.935-3.903 10.943.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19a2.74 2.74 0 0 0 1.53-.437c.915-.599 1.584-1.6 2.554-2.102a4.106 4.106 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46.97.504 1.64 1.504 2.553 2.103.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581A34.554 34.554 0 0 0 21.918 12M7.5 9v3M6 10.5h3"
      />
      <path
        fill="currentColor"
        d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
};
export default SvgGamepad;
