import * as React from "react";
import type { SVGProps } from "react";
const SvgBedsideTable2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.172 18.828c-.844-.843-1.08-2.057-1.146-4.078L2 14h19.974v.75c-.066 2.021-.302 3.235-1.145 4.078a3.1 3.1 0 0 1-1.079.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.807 20 14 20h-4c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.172 3.172c-.844.843-1.08 2.057-1.146 4.078L2 8h20l-.026-.75c-.066-2.021-.302-3.235-1.145-4.078C19.657 2 17.77 2 14 2h-4C6.23 2 4.343 2 3.172 3.172Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 10c0-.442.002-1.608.004-2H22c.002.392 0 1.558 0 2v2c0 .442 0 1.608-.002 2H2.002C2 13.608 2 12.442 2 12v-2Z"
        clipRule="evenodd"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBedsideTable2;
