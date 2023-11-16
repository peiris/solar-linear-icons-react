import * as React from "react";
import type { SVGProps } from "react";
const SvgTrashBin2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.75 6.167c0-.46.345-.834.771-.834h2.665c.529-.015.996-.378 1.176-.916l.03-.095.115-.372c.07-.228.131-.427.217-.605.338-.702.964-1.189 1.687-1.314.184-.031.377-.031.6-.031h3.478c.223 0 .417 0 .6.031.723.125 1.35.612 1.687 1.314.086.178.147.377.217.605l.115.372.03.095c.18.538.74.902 1.27.916h2.57c.427 0 .772.373.772.834 0 .46-.345.833-.771.833H3.52c-.426 0-.771-.373-.771-.833Z"
      />
      <path
        fill="currentColor"
        d="M11.607 22h.787c2.707 0 4.06 0 4.941-.863.88-.864.97-2.28 1.15-5.111l.26-4.081c.098-1.537.147-2.305-.295-2.792-.442-.487-1.187-.487-2.679-.487H8.23c-1.491 0-2.237 0-2.679.487-.441.487-.392 1.255-.295 2.792l.26 4.08c.18 2.833.27 4.248 1.15 5.112C7.545 22 8.9 22 11.607 22Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgTrashBin2;
