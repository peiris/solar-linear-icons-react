import * as React from "react";
import type { SVGProps } from "react";
const SvgScooter = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.5 19a3 3 0 0 0 3-3h-6a3 3 0 0 0 3 3ZM18.824 10.498 18 11l-1.643-3.5h1.482c.618 0 .927 0 1.157.132a1 1 0 0 1 .372.372c.132.23.132.54.132 1.157 0 .326 0 .49-.047.638a.998.998 0 0 1-.143.282c-.091.126-.223.223-.486.417Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M13.864 5.783c-.313-.032-.72-.033-1.336-.033H12a.75.75 0 0 1 0-1.5h.565c.57 0 1.054 0 1.454.041.425.044.819.14 1.19.37.373.23.634.539.864.9.216.34.432.772.687 1.282l3.148 6.297a3.001 3.001 0 1 1-3.814 3.61H3.06c-.066 0-.134 0-.197-.005a1.75 1.75 0 0 1-1.613-1.826v-.057c0-.335 0-.548.015-.735A4.75 4.75 0 0 1 5.702 9.76c.145-.009.312-.01.54-.01h.81c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v.802h4.345a3.006 3.006 0 0 1 2.119-2.146l-2.78-5.557c-.275-.552-.457-.915-.627-1.18-.16-.252-.274-.361-.386-.43-.111-.07-.26-.123-.557-.154Z"
      />
    </svg>
  );
};
export default SvgScooter;
