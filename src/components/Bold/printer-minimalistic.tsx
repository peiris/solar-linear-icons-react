import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinterMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.121 21.121C18 20.243 18 18.828 18 16v-3.34c-1.477-.502-3.458-.91-6-.91s-4.523.408-6 .91V16c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22c2.828 0 4.243 0 5.121-.879Z"
      />
      <path
        fill="currentColor"
        d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12c0 2.828 0 4.243.879 5.121.492.493 1.153.71 2.136.804C5 17.366 5 16.748 5 16.071v-3.029l-.193.085a.75.75 0 0 1-.614-1.368c1.722-.773 4.288-1.51 7.807-1.51 3.52 0 6.085.737 7.807 1.51a.75.75 0 1 1-.614 1.368 12.138 12.138 0 0 0-.193-.085v3.029c0 .677 0 1.295-.015 1.854.983-.095 1.644-.311 2.136-.804C22 16.243 22 14.828 22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6ZM17.12 2.879C16.243 2 14.829 2 12 2c-2.829 0-4.243 0-5.122.879-.492.492-.709 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.141c.678 0 1.296 0 1.855.015-.095-.983-.312-1.644-.804-2.136Z"
      />
    </svg>
  );
};
export default SvgPrinterMinimalistic;
