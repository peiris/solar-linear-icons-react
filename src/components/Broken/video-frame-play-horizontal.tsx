import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFramePlayHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.5 17h-19M21.5 7h-19M12 2v5m0 15v-5M17 2.5V7m0 14.5V17M7 2.5V7m0 14.5V17M14 12c0-.528-.53-.884-1.589-1.596-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12c0 1.432 0 2.148.4 2.413.4.265.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.817.817 1.178 1.91 1.338 3.536M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.816-.816-1.177-1.91-1.337-3.535"
      />
    </svg>
  );
};
export default SvgVideoFramePlayHorizontal;