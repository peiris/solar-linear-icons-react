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
        fillRule="evenodd"
        d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 0 1.5h-2.25V16.5a2.75 2.75 0 0 0 5.495.174A3.751 3.751 0 0 1 15.25 13v-1.8a1.95 1.95 0 0 1 1.95-1.95h3.6a1.95 1.95 0 0 1 1.95 1.95V13c0 1.816-1.29 3.33-3.004 3.676A4.25 4.25 0 0 1 12 18.912a4.25 4.25 0 0 1-7.746-2.236A3.751 3.751 0 0 1 1.25 13v-2.143c0-.887.72-1.607 1.607-1.607h4.286c.887 0 1.607.72 1.607 1.607V13a3.751 3.751 0 0 1-2.995 3.674 2.75 2.75 0 0 0 5.495-.174V4.75H9A.75.75 0 0 1 8.25 4Zm-5.393 6.75a.107.107 0 0 0-.107.107V13a2.25 2.25 0 0 0 4.5 0v-2.143a.107.107 0 0 0-.107-.107H2.857Zm14.343 0a.45.45 0 0 0-.45.45V13a2.25 2.25 0 0 0 4.5 0v-1.8a.45.45 0 0 0-.45-.45h-3.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChandelier;
