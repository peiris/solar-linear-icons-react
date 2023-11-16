import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 6.634a4.634 4.634 0 1 1 9.268 0 4.634 4.634 0 0 1-9.268 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.732 17.366a4.634 4.634 0 1 1 9.269 0 4.634 4.634 0 0 1-9.269 0Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M2 17.5c0-2.121 0-3.182.659-3.841C3.318 13 4.379 13 6.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.659C2 20.682 2 19.621 2 17.5Z"
      />
      <path
        fill="currentColor"
        d="M13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWidget2;
