import * as React from "react";
import type { SVGProps } from "react";
const SvgSafeSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM6.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7Zm3.78.47a.75.75 0 1 0-1.06 1.06l1.401 1.402A3.733 3.733 0 0 0 10.25 12c0 .764.229 1.475.621 2.068L9.47 15.47a.75.75 0 1 0 1.06 1.06l1.402-1.401A3.733 3.733 0 0 0 14 15.75c.764 0 1.475-.229 2.068-.621l1.402 1.401a.75.75 0 1 0 1.06-1.06l-1.401-1.402A3.733 3.733 0 0 0 17.75 12c0-.764-.229-1.475-.621-2.068L18.53 8.53a.75.75 0 0 0-1.06-1.06L16.068 8.87A3.732 3.732 0 0 0 14 8.25c-.764 0-1.475.229-2.068.621L10.53 7.47Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSafeSquare;
