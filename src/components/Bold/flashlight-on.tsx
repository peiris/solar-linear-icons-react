import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashlightOn = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2ZM6.53 2.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06l-2-2ZM18.53 2.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06ZM20 10v.25H4V10c0-.943 0-1.414.293-1.707C4.586 8 5.057 8 6 8h12c.943 0 1.414 0 1.707.293C20 8.586 20 9.057 20 10ZM16.172 14.828c-.163.163-.302.302-.422.427v-.005h-7.5v.005c-.12-.125-.26-.264-.421-.427L4.75 11.75h14.5l-3.078 3.078Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 20v-2.343c0-.378 0-.668-.015-.907h6.03c-.015.24-.015.53-.015.907V20c0 .943 0 1.414-.293 1.707C14.414 22 13.943 22 13 22h-2c-.943 0-1.414 0-1.707-.293C9 21.414 9 20.943 9 20Zm3-1.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFlashlightOn;
