import * as React from "react";
import type { SVGProps } from "react";
const SvgBedsideTable = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.974 7.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172.844.843 1.08 2.057 1.146 4.078ZM13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 10c0-.442 0-.858.002-1.25h19.996C22 9.142 22 9.558 22 10v2c0 .442 0 .858-.002 1.25H2.002C2 12.858 2 12.442 2 12v-2Zm10 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM21.974 14.75H2.026c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBedsideTable;
