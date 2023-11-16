import * as React from "react";
import type { SVGProps } from "react";
const SvgAugmentedReality = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        fill="currentColor"
        d="M14 8v-.75a.75.75 0 0 0-.75.75H14Zm-.75 8a.75.75 0 0 0 1.5 0h-1.5ZM8.5 8l.716-.224a.75.75 0 0 0-1.432 0L8.5 8Zm-1.625 5.2-.716-.224.716.224Zm-1.59 2.576a.75.75 0 0 0 1.43.448l-1.43-.448Zm5 .448a.75.75 0 0 0 1.43-.448l-1.43.448ZM14 12h-.75v.75H14V12Zm3.364 4.398a.75.75 0 1 0 1.272-.796l-1.272.796Zm-9.58-8.622-1.625 5.2 1.432.448 1.625-5.2-1.432-.448Zm-1.625 5.2-.875 2.8 1.432.448.875-2.8-1.432-.448Zm1.625-4.752 1.625 5.2 1.432-.448-1.625-5.2-1.432.448Zm1.625 5.2.875 2.8 1.432-.448-.875-2.8-1.432.448Zm-2.534.526h3.25v-1.5h-3.25v1.5ZM14 8.75h2v-1.5h-2v1.5Zm.75 3.25V8h-1.5v4h1.5Zm2.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 10h-1.5ZM16 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 7.25v1.5ZM13.25 8v8h1.5V8h-1.5ZM16 11.25h-.5v1.5h.5v-1.5Zm-.5 0H14v1.5h1.5v-1.5Zm-.636 1.148 2.5 4 1.272-.796-2.5-4-1.272.796Z"
      />
    </svg>
  );
};
export default SvgAugmentedReality;
