import * as React from "react";
import type { SVGProps } from "react";
const SvgReel2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm5.48 18.5A10.745 10.745 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75h10a.75.75 0 0 0 0-1.5h-4.52ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
    </svg>
  );
};
export default SvgReel2;
