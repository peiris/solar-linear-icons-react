import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsLeft = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.382 22C3.067 22 2 20.88 2 19.5h4.765c0 1.38-1.067 2.5-2.383 2.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 7.889V5.542c0-.194 0-.29-.004-.372-.08-1.713-1.385-3.082-3.017-3.166C7.902 2 7.81 2 7.625 2c-.307 0-.46 0-.59.007-2.72.14-4.895 2.422-5.029 5.276C2 7.419 2 7.58 2 7.903v9.93h4.765v-5.5c0-.613.474-1.11 1.059-1.11C9.578 11.222 11 9.73 11 7.888ZM9.324 5.125c0-.46-.336-.833-.75-.833-.415 0-.75.373-.75.833v2.778c0 .46.335.833.75.833.414 0 .75-.373.75-.833V5.125Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.5 22a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M15.25 13a.75.75 0 0 1 .75.75V18h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.265 4.95a.75.75 0 0 0 .586.885 4.256 4.256 0 0 1 3.314 3.314.75.75 0 0 0 1.47-.298 5.756 5.756 0 0 0-4.486-4.486.75.75 0 0 0-.884.586Z"
        clipRule="evenodd"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgAirbudsLeft;
