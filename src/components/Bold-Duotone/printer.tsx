import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.121 2.879C16.242 2 14.828 2 12 2c-2.829 0-4.243 0-5.122.879-.492.492-.708 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.142c.677 0 1.295 0 1.854.015-.095-.983-.312-1.644-.804-2.136Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 14.5c0 2.828 0 5.743-.879 6.621C16.243 22 14.828 22 12 22c-2.828 0-4.243 0-5.121-.879C6 20.243 6 17.328 6 14.5h12Zm-2.25 2.25a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 16h6a.75.75 0 0 1 .75.75Zm-2 3a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 19h4a.75.75 0 0 1 .75.75Z"
        clipRule="evenodd"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M15 17.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6ZM13 20.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h4Z" />
      </g>
      <path
        fill="currentColor"
        d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12c0 2.828 0 4.243.879 5.121.494.495 1.158.711 2.149.806C5 17.204 5 15.352 5 14.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .852 0 2.704-.028 3.427.99-.095 1.655-.311 2.15-.806C22 16.243 22 14.828 22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9 10.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5h3ZM18 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgPrinter;
