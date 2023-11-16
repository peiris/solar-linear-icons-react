import * as React from "react";
import type { SVGProps } from "react";
const SvgAsteroid = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12C2 6.477 6.477 2 12 2c2.127 0 4.098.664 5.719 1.796a6.752 6.752 0 0 0 3.936 10.82C20.505 18.87 16.618 22 12 22c-.639 0-1.263-.06-1.868-.174a6.75 6.75 0 0 0-8.117-9.279A10.16 10.16 0 0 1 2 12Zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5.5-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 8c0-1.231.423-2.361 1.131-3.256a9.972 9.972 0 0 1 3.055 8.398A5.252 5.252 0 0 1 17.75 8ZM8.658 21.428a10.018 10.018 0 0 1-6.445-7.368l.111-.037a5.25 5.25 0 0 1 6.386 7.299l-.052.106Z"
      />
    </svg>
  );
};
export default SvgAsteroid;
