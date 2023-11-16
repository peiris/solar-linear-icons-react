import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperclipRounded = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.885 15.95c1.424-1.437 2.136-2.156 2.525-2.926a5.503 5.503 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925-1.424-1.437-2.136-2.156-2.899-2.548a5.367 5.367 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548m7.04 14.512c-.356.358-.534.538-.703.668a3.223 3.223 0 0 1-3.951 0c-.17-.13-.347-.31-.702-.668-.355-.359-.533-.538-.663-.708a3.298 3.298 0 0 1 0-3.988c.13-.17.308-.35.663-.708l2.83-2.856m-8.243-2.49c-.8.808-1.2 1.211-1.473 1.608a5.499 5.499 0 0 0 0 6.242c.274.396.673.8 1.473 1.607"
      />
    </svg>
  );
};
export default SvgPaperclipRounded;
