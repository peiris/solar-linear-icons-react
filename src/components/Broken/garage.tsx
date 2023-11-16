import * as React from "react";
import type { SVGProps } from "react";
const SvgGarage = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 22H2M3 22V11.347a3 3 0 0 1 1.007-2.242M21 22v-6M7.253 6.22l2.754-2.448a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V12M9 18.5h6M6 22v-3m12 3v-6c0-1.886 0-2.828-.586-3.414C16.828 12 15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586-.472.471-.564 1.174-.582 2.414M10 9h.5M14 9h-1.5M9 15.5h1.5m4.5 0h-2.5"
      />
    </svg>
  );
};
export default SvgGarage;
