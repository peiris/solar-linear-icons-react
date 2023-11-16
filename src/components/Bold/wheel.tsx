import * as React from "react";
import type { SVGProps } from "react";
const SvgWheel = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm5.954-9.25h-3.049a2.997 2.997 0 0 1-.803 1.39l1.524 2.64a5.995 5.995 0 0 0 2.328-4.03Zm-3.626 4.782-1.525-2.64a3.005 3.005 0 0 1-1.606 0l-1.525 2.64A5.98 5.98 0 0 0 12 18c.825 0 1.612-.167 2.328-.468Zm-5.954-.751 1.524-2.64a2.997 2.997 0 0 1-.804-1.391H6.046a5.994 5.994 0 0 0 2.328 4.03Zm9.58-5.531h-3.049a2.997 2.997 0 0 0-.803-1.39l1.524-2.64a5.995 5.995 0 0 1 2.328 4.03Zm-3.626-4.782A5.982 5.982 0 0 0 12 6c-.825 0-1.612.167-2.328.468l1.525 2.64a3.002 3.002 0 0 1 1.606 0l1.525-2.64ZM9.898 9.86 8.374 7.22a5.995 5.995 0 0 0-2.328 4.03h3.049c.138-.535.42-1.013.803-1.39Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWheel;
