import * as React from "react";
import type { SVGProps } from "react";
const SvgWhisk = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.952 2.874c-1.812-.406-4.017.2-5.658 1.84-1.168 1.168-2.079 2.91-2.43 4.614a6.815 6.815 0 0 0-.144 1.834c.185-.354.4-.713.628-1.064.971-1.493 2.316-3.043 3.229-3.956.914-.914 2.271-2.066 3.579-2.842.261-.155.528-.3.796-.426Zm3.127.047c-2.6-2.6-7.087-2.025-9.846.733-1.39 1.39-2.432 3.403-2.838 5.371a8.76 8.76 0 0 0-.187 1.68L2.304 16.61a3.597 3.597 0 1 0 5.086 5.087l5.906-5.906a8.762 8.762 0 0 0 1.679-.186c1.968-.407 3.981-1.449 5.371-2.839 2.759-2.758 3.333-7.244.733-9.845Zm-1.06 1.06c-.046-.044-.178-.134-.587-.05-.403.083-.921.31-1.51.66-1.17.693-2.429 1.756-3.285 2.612-.857.857-2.13 2.327-3.032 3.713-.454.698-.785 1.331-.937 1.83-.075.247-.094.422-.086.532a.31.31 0 0 0 .018.093.047.047 0 0 0 .01.018.047.047 0 0 0 .018.01.31.31 0 0 0 .094.019c.11.008.284-.01.533-.087.498-.152 1.131-.482 1.83-.936 1.385-.902 2.855-2.175 3.712-3.032.857-.856 1.92-2.115 2.613-3.284.35-.59.576-1.107.66-1.51.083-.41-.007-.542-.052-.587Zm-7.18 10.299c.354-.185.712-.4 1.063-.628 1.493-.97 3.043-2.315 3.956-3.228.915-.915 2.066-2.272 2.842-3.58.155-.26.3-.528.426-.796.406 1.812-.2 4.017-1.84 5.658-1.168 1.167-2.91 2.078-4.615 2.43a6.818 6.818 0 0 1-1.832.144Zm-1.417 1.264c-.7-.21-1.34-.564-1.872-1.095a4.396 4.396 0 0 1-1.094-1.87L3.364 17.67a2.097 2.097 0 1 0 2.966 2.965l5.092-5.092Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWhisk;