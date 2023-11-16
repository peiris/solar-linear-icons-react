import * as React from "react";
import type { SVGProps } from "react";
const SvgScissorsSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM16.38 5.353a.75.75 0 0 0-1.026.268L12 11.346 8.647 5.62a.75.75 0 0 0-1.294.758l3.778 6.45-1.111 1.899a2.657 2.657 0 0 0-2.145-1.078c-1.42 0-2.625 1.113-2.625 2.55 0 1.437 1.204 2.55 2.625 2.55.992 0 1.88-.543 2.324-1.36L12 14.314l1.802 3.076a2.645 2.645 0 0 0 2.323 1.36c1.42 0 2.625-1.113 2.625-2.55 0-1.437-1.204-2.55-2.625-2.55-.873 0-1.664.42-2.144 1.078l-1.112-1.898 3.778-6.45a.75.75 0 0 0-.268-1.027Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgScissorsSquare;
