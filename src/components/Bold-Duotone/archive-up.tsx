import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.75 21c3.605 0 5.433-.026 6.578-1.172C20.5 18.657 20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828C5.817 20.974 7.645 21 11.25 21v-7.046l-1.693 1.881a.75.75 0 0 1-1.114-1.003l3-3.334a.75.75 0 0 1 1.114 0l3 3.334a.75.75 0 0 1-1.114 1.003l-1.693-1.88V21Z"
      />
      <path
        fill="currentColor"
        d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgArchiveUp;
