import * as React from "react";
import type { SVGProps } from "react";
const SvgSsdRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.842 13.376c1.126 0 2.14.453 2.891 1.181l-2.365-9.379C18.842 3.545 17.9 3 16.737 3H7.263C6.1 3 5.158 3.545 4.632 5.178l-2.365 9.38a4.135 4.135 0 0 1 2.89-1.182h13.685Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.158 14.405c-1.167 0-2.2.663-2.75 1.674A3.393 3.393 0 0 0 2 17.703C2 19.552 3.442 21 5.158 21h13.684C20.558 21 22 19.552 22 17.703c0-.593-.15-1.146-.409-1.624-.549-1.01-1.582-1.674-2.749-1.674H5.158ZM11.21 17.4a.78.78 0 0 0-.789-.771.78.78 0 0 0-.79.771v1.029a.78.78 0 0 0 .79.771.78.78 0 0 0 .79-.771V17.4Zm1.843-.771a.78.78 0 0 1 .79.771v1.029a.78.78 0 0 1-.79.771.78.78 0 0 1-.79-.771V17.4a.78.78 0 0 1 .79-.771Zm3.42.771a.78.78 0 0 0-.789-.771.78.78 0 0 0-.79.771v1.029a.78.78 0 0 0 .79.771.78.78 0 0 0 .79-.771V17.4Zm2.632 0a.78.78 0 0 0-.79-.771.78.78 0 0 0-.789.771v1.029a.78.78 0 0 0 .79.771.78.78 0 0 0 .79-.771V17.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSsdRound;
