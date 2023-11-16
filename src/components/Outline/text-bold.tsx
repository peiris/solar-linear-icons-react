import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBold = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.609 1.25A3.359 3.359 0 0 0 4.25 4.609V19.94a2.809 2.809 0 0 0 2.809 2.809H14a5.75 5.75 0 0 0 1.608-11.272A5.75 5.75 0 0 0 12 1.25H7.609Zm4.391 10a4.25 4.25 0 0 0 0-8.5H7.609A1.859 1.859 0 0 0 5.75 4.609v6.641H12Zm-6.25 1.5v7.191c0 .723.586 1.309 1.309 1.309H14a4.25 4.25 0 0 0 0-8.5H5.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextBold;
