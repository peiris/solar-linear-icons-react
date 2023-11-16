import * as React from "react";
import type { SVGProps } from "react";
const SvgLike = (props: SVGProps<SVGSVGElement>) => {
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
        d="m20.27 16.265.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.182a.833.833 0 0 1-.821-.969l.663-4.045a4.781 4.781 0 0 0-.09-1.973 1.635 1.635 0 0 0-1.093-1.137l-.145-.047a1.346 1.346 0 0 0-.993.068c-.34.164-.588.463-.68.818l-.476 1.834a7.629 7.629 0 0 1-.656 1.679c-.416.777-1.058 1.4-1.725 1.975l-1.44 1.24c-.405.35-.618.873-.572 1.406l.813 9.393A1.666 1.666 0 0 0 8.596 22h4.649c3.481 0 6.452-2.426 7.024-5.735Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749Z"
        clipRule="evenodd"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgLike;
