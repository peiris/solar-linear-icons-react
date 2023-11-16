import * as React from "react";
import type { SVGProps } from "react";
const SvgStarFall2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.58 4.776c.695-1.77 1.042-2.656 1.769-2.765.726-.11 1.35.63 2.6 2.109l.323.382c.355.42.532.63.773.75s.52.137 1.075.17l.506.029c1.955.114 2.932.172 3.271.81.34.64-.184 1.438-1.232 3.033l-.27.413c-.298.453-.447.68-.487.939-.04.258.032.52.178 1.043l.133.477c.514 1.842.77 2.762.254 3.266-.517.505-1.465.258-3.361-.235l-.491-.127c-.539-.14-.808-.21-1.074-.17-.267.04-.5.185-.965.476l-.423.265c-1.638 1.024-2.457 1.536-3.115 1.208-.659-.327-.721-1.277-.846-3.177l-.032-.492c-.035-.54-.053-.81-.177-1.044-.124-.234-.341-.406-.775-.75l-.394-.312C7.294 9.865 6.53 9.26 6.64 8.554c.11-.707 1.02-1.047 2.839-1.729l.47-.176c.517-.194.776-.29.965-.475.19-.185.288-.437.486-.94l.18-.458Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.595 8.55C3.482 10.687 1.098 14.77 2.331 22c1.092-3.014 4.382-5.428 8.057-6.59"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgStarFall2;
