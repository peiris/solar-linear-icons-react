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
        d="M17.952 2.874c-1.812-.406-4.018.2-5.658 1.84-1.58 1.58-2.659 4.174-2.583 6.272.002.059.005.117.009.175.185-.354.4-.712.628-1.063.97-1.493 2.315-3.043 3.228-3.956.915-.914 2.272-2.066 3.58-2.842.26-.155.528-.3.796-.426Zm3.126.047c-2.6-2.6-7.087-2.025-9.845.733C9.385 5.502 8.12 8.49 8.212 11.04c.045 1.27.432 2.504 1.338 3.41.906.906 2.14 1.292 3.411 1.338 2.55.09 5.537-1.174 7.385-3.022 2.758-2.758 3.333-7.244.732-9.845Zm-1.06 1.06c-.046-.044-.178-.134-.587-.05-.403.083-.92.31-1.51.66-1.168.693-2.428 1.756-3.284 2.612-.857.857-2.13 2.327-3.032 3.713-.454.698-.785 1.331-.937 1.83-.076.247-.095.422-.086.532a.31.31 0 0 0 .018.093.048.048 0 0 0 .01.018.047.047 0 0 0 .018.01.31.31 0 0 0 .093.019c.11.008.285-.01.533-.087.499-.152 1.132-.482 1.83-.936 1.386-.902 2.856-2.175 3.713-3.032.856-.856 1.92-2.115 2.613-3.284.35-.59.576-1.107.659-1.51.084-.41-.006-.542-.051-.587ZM12.839 14.28c.354-.185.712-.4 1.063-.628 1.493-.97 3.043-2.315 3.956-3.228.914-.915 2.066-2.272 2.842-3.58.155-.26.3-.528.426-.796.406 1.812-.2 4.017-1.84 5.658-1.58 1.58-4.174 2.658-6.271 2.583a5.505 5.505 0 0 1-.176-.01Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.269 11.705c.141 1.029.535 1.998 1.281 2.744.747.747 1.717 1.141 2.745 1.282L6.86 21.166a2.847 2.847 0 0 1-4.026-4.026l5.435-5.435Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgWhisk;
