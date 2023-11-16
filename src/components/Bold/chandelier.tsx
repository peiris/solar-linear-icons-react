import * as React from "react";
import type { SVGProps } from "react";
const SvgChandelier = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 0 1.5h-2.25V16.5a2.75 2.75 0 1 0 5.5 0v-.594A3.001 3.001 0 0 1 16 13v-1.8a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3.001 3.001 0 0 1-2.25 2.906v.594A4.25 4.25 0 0 1 12 18.912 4.25 4.25 0 0 1 4.25 16.5v-.594A3.001 3.001 0 0 1 2 13v-2.143c0-.473.384-.857.857-.857h4.286c.473 0 .857.384.857.857V13a3.001 3.001 0 0 1-2.25 2.906v.594a2.75 2.75 0 1 0 5.5 0V4.75H9A.75.75 0 0 1 8.25 4Z"
      />
    </svg>
  );
};
export default SvgChandelier;
