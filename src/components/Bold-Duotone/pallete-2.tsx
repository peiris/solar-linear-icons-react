import * as React from "react";
import type { SVGProps } from "react";
const SvgPallete2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.847 21.934C5.867 21.362 2 17.133 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37-1.618-.209-3.075-.397-3.652.518-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M11.085 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM14.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
};
export default SvgPallete2;
