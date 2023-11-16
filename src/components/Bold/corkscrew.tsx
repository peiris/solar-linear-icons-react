import * as React from "react";
import type { SVGProps } from "react";
const SvgCorkscrew = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19.357 8.383a3.652 3.652 0 0 0-3.117 3.078l-1.32-1.32-1.325 1.324a.345.345 0 0 0-.05.425l.647 1.05c.737 1.198-.693 2.549-1.847 1.744l-4.618-3.218 4.944 7.094c.81 1.162-.563 2.597-1.76 1.837l-6.116-3.884.65 1.37c.333.705.19 1.543-.362 2.095L2.53 22.53a.75.75 0 0 1-1.06-1.06l2.552-2.553a.344.344 0 0 0 .067-.39l-.95-2.005c-.556-1.176.771-2.348 1.87-1.65l5.855 3.718-5.016-7.197c-.828-1.188.618-2.634 1.807-1.806l4.75 3.31-.137-.221a1.845 1.845 0 0 1 .267-2.272l1.324-1.324-3.341-3.341a2.19 2.19 0 1 1 3.097-3.098l5.742 5.742Z"
      />
      <path
        fill="currentColor"
        d="M21.359 13.482c.419-.419.633-.966.64-1.515a2.15 2.15 0 1 0-3.174 1.923 2.191 2.191 0 0 0 2.534-.408Z"
      />
    </svg>
  );
};
export default SvgCorkscrew;
