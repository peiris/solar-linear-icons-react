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
        d="M20.828 16.828C22 15.657 22 13.771 22 10c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.864 3.864 0 0 0 14 2C10.229 2 8.343 2 7.17 3.172c-.377.377-.633.83-.807 1.395C7.371 4.5 8.55 4.5 9.896 4.5H10c1.427 0 2.789.571 3.792 1.575l4.133 4.133A5.363 5.363 0 0 1 19.5 14v.104c0 1.346 0 2.525-.067 3.532.565-.174 1.018-.43 1.395-.808Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6c1.025 0 2.006.41 2.731 1.136l4.133 4.133A3.864 3.864 0 0 1 18 14c0 3.771 0 5.657-1.172 6.828C15.657 22 13.771 22 10 22Zm-2.707-3.293C7.586 19 8.057 19 9 19h.5v-5H9c-.943 0-1.414 0-1.707.293C7 14.586 7 15.057 7 16v1c0 .943 0 1.414.293 1.707Zm5.414 0C12.414 19 11.943 19 11 19h-.5v-2H13c0 .943 0 1.414-.293 1.707ZM11 14c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707h-2.5v-2h.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSimCards;
