import * as React from "react";
import type { SVGProps } from "react";
const SvgShop2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.528 2H7.472c-1.203 0-1.804 0-2.288.299-.483.298-.752.836-1.29 1.912L2.491 7.76c-.325.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.538-1.076-.806-1.614-1.29-1.912C18.332 2 17.73 2 16.528 2ZM9.5 21.25V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v2.75h-5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 11a2 2 0 0 0 2-2 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 2 2v10.25h-5.5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v2.75H4V11Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M14.5 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-7.5Z"
      />
    </svg>
  );
};
export default SvgShop2;
