import * as React from "react";
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.728 3.884c1.434-1.44 3.532-1.47 4.694-.304 1.164 1.168 1.132 3.28-.303 4.72l-2.424 2.433a.75.75 0 0 0 1.063 1.059l2.424-2.433c1.91-1.919 2.15-4.982.303-6.838-1.85-1.857-4.907-1.615-6.82.304L9.818 7.692c-1.912 1.919-2.152 4.982-.303 6.837a.75.75 0 1 0 1.062-1.058c-1.163-1.168-1.132-3.28.303-4.72l4.848-4.867Z"
      />
      <path
        fill="currentColor"
        d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.132 3.279-.303 4.72L8.27 20.116c-1.434 1.44-3.532 1.47-4.694.304-1.163-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 1 0-1.062-1.059l-2.424 2.433C.906 16.56.666 19.623 2.515 21.48c1.85 1.858 4.907 1.615 6.819-.304l4.848-4.867c1.91-1.918 2.15-4.982.303-6.837Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgLink;
