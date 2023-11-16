import * as React from "react";
import type { SVGProps } from "react";
const SvgSafeCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.47 8.47a.75.75 0 0 1 1.06 0l1 1c.043.043.08.09.11.14.401-.23.865-.36 1.36-.36.495 0 .959.13 1.36.36a.752.752 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a.751.751 0 0 1-.14.11c.23.401.36.865.36 1.36 0 .495-.13.959-.36 1.36.05.03.097.067.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.751.751 0 0 1-.11-.14c-.401.23-.865.36-1.36.36-.495 0-.959-.13-1.36-.36a.751.751 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.751.751 0 0 1 .14-.11 2.738 2.738 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a.751.751 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06ZM12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25Z"
      />
    </svg>
  );
};
export default SvgSafeCircle;
