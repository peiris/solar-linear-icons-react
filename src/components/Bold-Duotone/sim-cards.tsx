import * as React from "react";
import type { SVGProps } from "react";
const SvgSimCards = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.172 20.828C4.343 22 6.229 22 10 22c3.771 0 5.657 0 6.828-1.172C18 19.657 18 17.771 18 14c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.864 3.864 0 0 0 10 6C6.229 6 4.343 6 3.172 7.172 2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828ZM11 14c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707h-2.5v-2h.5Zm-1.5 5H9c-.943 0-1.414 0-1.707-.293C7 18.414 7 17.943 7 17v-1c0-.943 0-1.414.293-1.707C7.586 14 8.057 14 9 14h.5v5Zm1.5 0h-.5v-2H13c0 .943 0 1.414-.293 1.707C12.414 19 11.943 19 11 19Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.093 6.093c.123-1.352.41-2.253 1.079-2.921C8.343 2 10.229 2 14 2c1.025 0 2.006.41 2.731 1.136l4.133 4.133A3.863 3.863 0 0 1 22 10c0 3.771 0 5.657-1.172 6.828-.668.669-1.57.956-2.92 1.08C18 16.89 18 15.618 18 14c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.863 3.863 0 0 0 10.001 6c-1.62 0-2.892 0-3.908.093Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSimCards;
