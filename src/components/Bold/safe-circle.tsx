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
        d="M12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM7.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V8Zm3.78.47a.75.75 0 1 0-1.06 1.06l1 1c.043.043.09.08.14.11-.23.401-.36.865-.36 1.36 0 .495.13.959.36 1.36a.751.751 0 0 0-.14.11l-1 1a.75.75 0 1 0 1.06 1.06l1-1a.751.751 0 0 0 .11-.14c.401.23.865.36 1.36.36.495 0 .959-.13 1.36-.36.03.05.067.097.11.14l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.751.751 0 0 0-.14-.11c.23-.401.36-.865.36-1.36 0-.495-.13-.959-.36-1.36a.751.751 0 0 0 .14-.11l1-1a.75.75 0 0 0-1.06-1.06l-1 1a.752.752 0 0 0-.11.14A2.737 2.737 0 0 0 14 9.25c-.495 0-.959.13-1.36.36a.752.752 0 0 0-.11-.14l-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSafeCircle;
