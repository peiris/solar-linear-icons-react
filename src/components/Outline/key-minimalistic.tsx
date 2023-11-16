import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.68 4.493a7.657 7.657 0 1 1 3.502 12.83c-.15-.04-.264.006-.32.061L8.15 21.098a2.23 2.23 0 0 1-1.823.64l-2.089-.233a1.737 1.737 0 0 1-1.036-.498l-.208-.208a1.737 1.737 0 0 1-.498-1.036l-.232-2.089a2.23 2.23 0 0 1 .64-1.823l3.711-3.712c.056-.056.101-.17.063-.32a7.653 7.653 0 0 1 2.001-7.325Zm9.767 1.06A6.157 6.157 0 0 0 8.13 11.445c.15.588.028 1.271-.455 1.754L3.964 16.91a.73.73 0 0 0-.21.597l.233 2.088c.005.054.03.103.067.141l.209.209a.237.237 0 0 0 .14.067l2.09.232a.73.73 0 0 0 .596-.209l.707-.707-1.212-1.2a.75.75 0 1 1 1.054-1.066l1.219 1.205 1.945-1.944c.482-.483 1.165-.606 1.753-.455a6.157 6.157 0 0 0 5.891-10.316Zm-6.391 2.502a2.75 2.75 0 1 1 3.889 3.89 2.75 2.75 0 0 1-3.89-3.89Zm2.828 1.061a1.25 1.25 0 1 0-1.768 1.768 1.25 1.25 0 0 0 1.768-1.768Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgKeyMinimalistic;
