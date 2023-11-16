import * as React from "react";
import type { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0 5.523-4.477 10-10 10a9.986 9.986 0 0 1-3.321-.564A8.973 8.973 0 0 1 8 18c0-2.22.805-4.254 2.138-5.824A6.493 6.493 0 0 0 15.5 15a6.496 6.496 0 0 0 5.567-3.143c.24-.396.933-.32.933.143Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M2 12c0 4.359 2.789 8.066 6.679 9.435A8.973 8.973 0 0 1 8 18c0-2.221.805-4.254 2.138-5.824A6.47 6.47 0 0 1 9 8.5a6.496 6.496 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2 6.477 2 2 6.477 2 12Z"
      />
    </svg>
  );
};
export default SvgMoon;
