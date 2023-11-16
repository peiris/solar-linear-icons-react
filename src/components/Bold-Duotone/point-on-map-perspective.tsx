import * as React from "react";
import type { SVGProps } from "react";
const SvgPointOnMapPerspective = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 16c0-2.828 0-4.243-.879-5.121-.49-.49-1.146-.707-2.12-.803-.834-.025-2.8-.076-4-.076H8c-2.046 0-3.351 0-4.25.332l17.936 9.865C22 19.3 22 18.006 22 16Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M10.758 15.898 2.51 11.362C2 12.264 2 13.64 2 16c0 2.666 0 4.075.736 4.964l8.022-5.066ZM8 22h8c2.482 0 3.875 0 4.773-.594l-8.514-4.682-8.043 5.08C5.087 22 6.283 22 8 22ZM17 2a3 3 0 0 0-.75 5.905V13a.75.75 0 0 0 1.5 0V7.905A3.001 3.001 0 0 0 17 2Z"
      />
    </svg>
  );
};
export default SvgPointOnMapPerspective;
