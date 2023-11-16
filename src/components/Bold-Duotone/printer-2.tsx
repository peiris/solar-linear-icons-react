import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.121 2.879C16.242 2 14.828 2 12 2c-2.829 0-4.243 0-5.122.879-.492.492-.708 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.142c.677 0 1.295 0 1.854.015-.095-.983-.312-1.644-.804-2.136ZM18 15.5c0 2.828 0 4.743-.879 5.621C16.243 22 14.828 22 12 22c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.328 6 15.5h12Z"
      />
      <path
        fill="currentColor"
        d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12c0 2.828 0 4.243.879 5.121.494.495 1.158.711 2.149.806C5 17.204 5 16.352 5 15.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .852 0 1.704-.028 2.427.99-.095 1.655-.311 2.15-.806C22 16.243 22 14.828 22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9 10.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5h3ZM18 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgPrinter2;
