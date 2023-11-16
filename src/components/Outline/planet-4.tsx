import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanet4 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 5.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5ZM4.013 16.78a10.18 10.18 0 0 0-.723-.03 7.252 7.252 0 0 0 12.81 1.169c-1.11.444-2.567.83-4.28.83a8.432 8.432 0 0 1-3.35-.687c-.332-.14-.642-.287-.91-.415l-.207-.099c-.329-.154-.576-.261-.794-.32a13.643 13.643 0 0 0-2.546-.447ZM2.75 14c0-.705.1-1.386.288-2.03.292.2.7.453 1.21.705a10.256 10.256 0 0 0 4.536 1.075c1.326 0 2.344-.332 3.157-.696.313-.14.603-.289.854-.417l.191-.098c.306-.155.531-.259.725-.316.947-.278 1.77-.395 2.353-.443a8.8 8.8 0 0 1 .83-.028c.231.707.356 1.463.356 2.248 0 .663-.09 1.306-.256 1.916-.12.001-.242.031-.355.093-.984.54-2.675 1.24-4.82 1.24a6.934 6.934 0 0 1-2.77-.572 17.52 17.52 0 0 1-.826-.376 55.73 55.73 0 0 0-.23-.11c-.33-.154-.682-.313-1.038-.41a15.149 15.149 0 0 0-2.828-.496 11.684 11.684 0 0 0-1.075-.033l-.066.003h-.019l-.006.001h-.004a.747.747 0 0 0-.096.012A7.294 7.294 0 0 1 2.75 14Zm.875-3.455a8.438 8.438 0 0 0 1.287.785c.934.462 2.266.92 3.872.92 1.057 0 1.862-.26 2.544-.565.273-.122.518-.247.764-.374l.216-.11c.306-.155.64-.317.98-.417a13.335 13.335 0 0 1 2.928-.518A7.246 7.246 0 0 0 10 6.75a7.248 7.248 0 0 0-6.375 3.795ZM20.53 4.045a2.018 2.018 0 0 0-.306-.53c.326-.091.549-.097.606.003.058.1-.058.29-.3.527ZM17.106 6.02c-.326.091-.548.097-.606-.003-.058-.1.058-.29.3-.527a2.006 2.006 0 0 0 .306.53Zm0 0c.455-.126 1.113-.418 1.81-.82.695-.402 1.277-.826 1.614-1.156a2 2 0 0 1-3.424 1.976Zm-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82-.696.403-1.278.826-1.615 1.157Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPlanet4;
