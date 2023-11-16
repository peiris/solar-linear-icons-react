import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadphonesRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2.793a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.5 0V17h-1v-5a8.25 8.25 0 0 0-16.5 0v5h-1v.5a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1-.707V12Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M8 14.05c0-.85 0-1.274-.21-1.57a1.185 1.185 0 0 0-.409-.358c-.325-.174-.763-.134-1.64-.053-1.48.134-2.218.202-2.748.571a2.346 2.346 0 0 0-.661.7C2 13.885 2 14.6 2 16.03v1.74c0 1.417 0 2.126.338 2.673.127.205.286.39.471.547.495.423 1.217.555 2.662.818 1.016.186 1.525.279 1.9.083.138-.072.26-.17.36-.287C8 21.285 8 20.786 8 19.789v-5.74ZM16 14.05c0-.85 0-1.274.21-1.57.105-.148.245-.271.409-.358.325-.174.763-.134 1.64-.053 1.48.134 2.218.202 2.748.571.268.188.493.426.661.7.332.544.332 1.26.332 2.69v1.74c0 1.417 0 2.126-.338 2.673-.127.205-.286.39-.471.547-.495.423-1.217.555-2.662.818-1.016.186-1.525.279-1.9.083a1.193 1.193 0 0 1-.36-.287C16 21.285 16 20.786 16 19.789v-5.74Z"
      />
    </svg>
  );
};
export default SvgHeadphonesRound;
