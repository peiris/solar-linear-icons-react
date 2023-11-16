import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsCaseOpen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.207 11.391C3 11.661 3 12.051 3 12.833V13c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-.167c0-.781 0-1.172-.207-1.442a1.002 1.002 0 0 0-.184-.184c-.27-.207-.66-.207-1.442-.207H16.75A2.75 2.75 0 0 1 14 13.75h-4A2.75 2.75 0 0 1 7.25 11H4.833c-.782 0-1.172 0-1.442.207-.07.053-.131.115-.184.184Z"
      />
      <path
        fill="currentColor"
        d="M8.75 11c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25h-6.5Z"
      />
      <path
        fill="currentColor"
        d="M14 13.75A2.75 2.75 0 0 0 16.75 11h-1.5c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 13.75h4Z"
        opacity={0.5}
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M3.5 4.625v1.316a2.47 2.47 0 0 0 2.47 2.471c.455 0 .824.369.824.824V11H10.5V6.375A4.375 4.375 0 0 0 6.125 2 2.625 2.625 0 0 0 3.5 4.625ZM20.5 4.625v1.316a2.47 2.47 0 0 1-2.47 2.471.824.824 0 0 0-.824.824V11H13.5V6.375A4.375 4.375 0 0 1 17.875 2 2.625 2.625 0 0 1 20.5 4.625Z" />
      </g>
    </svg>
  );
};
export default SvgAirbudsCaseOpen;
