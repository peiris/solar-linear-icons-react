import * as React from "react";
import type { SVGProps } from "react";
const SvgMagicStick3 = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M3.845 7.922a2.883 2.883 0 1 1 4.077-4.077l12.234 12.233a2.884 2.884 0 0 1-4.078 4.078L3.845 7.922Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m6 10 4-4"
      />
      <path
        stroke="currentColor"
        d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095c.049.126.148.225.272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.485.485 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.485.485 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.485.485 0 0 0 .273-.274l.43-1.095ZM19.967 9.13c.161-.41.739-.41.9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.485.485 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.485.485 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.485.485 0 0 0 .272-.273l.157-.4ZM5.133 15.307c.161-.41.739-.41.9 0l.157.4c.049.125.147.224.272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.484.484 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.484.484 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.484.484 0 0 0 .272-.274l.157-.399Z"
      />
    </svg>
  );
};
export default SvgMagicStick3;
