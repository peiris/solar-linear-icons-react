import * as React from "react";
import type { SVGProps } from "react";
const SvgGamepadMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15 3.25a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 6.75h-1a.25.25 0 0 0-.25.25v1h.422c2.54 0 3.809 0 4.785.614.247.155.476.337.683.542.82.81 1.11 2.047 1.687 4.52l1.023 4.373A2.858 2.858 0 0 1 16 19.957l-.12-.246a3.203 3.203 0 0 0-2.877-1.794h-2.005a3.203 3.203 0 0 0-2.876 1.794l-.12.246a2.858 2.858 0 0 1-5.35-1.908l1.022-4.374c.578-2.472.867-3.708 1.686-4.519a4 4 0 0 1 .684-.542C7.02 8 8.29 8 10.83 8h.422V7c0-.966.783-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V4a.75.75 0 0 1 .75-.75ZM16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7.5-.75a.75.75 0 0 1 .75.75v.75H10a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H7a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75ZM17 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGamepadMinimalistic;
