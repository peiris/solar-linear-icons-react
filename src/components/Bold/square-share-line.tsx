import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareShareLine = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 3.464C4.93 2 7.286 2 12 2c1.023 0 1.934 0 2.75.015.004.57.223 1.14.659 1.576l1.159 1.159H14c-2.617 0-4.252 1.298-4.914 1.963L8.9 6.9l-.187.186C8.048 7.748 6.75 9.383 6.75 12v3a2.25 2.25 0 0 0 4.5 0v-3c0-1.02.488-1.576.637-1.725l.192-.19.196-.198c.149-.149.705-.637 1.725-.637h2.568l-1.159 1.159a2.25 2.25 0 1 0 3.182 3.182l3.405-3.405C22 10.749 22 11.352 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.47 1.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H14c-1.552 0-2.467.757-2.788 1.08l-.19.191-.193.191c-.322.32-1.079 1.236-1.079 2.788v3a.75.75 0 0 1-1.5 0v-3c0-2.084 1.027-3.36 1.521-3.851l.19-.189.188-.189C10.64 7.277 11.916 6.25 14 6.25h6.19l-3.72-3.72a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSquareShareLine;
