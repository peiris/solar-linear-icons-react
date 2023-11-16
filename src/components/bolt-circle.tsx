import * as React from "react";
import type { SVGProps } from "react";
const SvgBoltCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="m9.212 10.174 2.015-1.605c1.303-1.037 1.954-1.556 2.364-1.3.409.256.196 1.05-.229 2.636l-.04.15c-.153.572-.23.858-.095 1.086l.007.012c.14.226.438.306 1.033.465 1.072.287 1.608.43 1.702.804l.004.019c.082.376-.34.712-1.186 1.386l-2.015 1.604c-1.302 1.038-1.953 1.556-2.363 1.3-.41-.256-.197-1.05.228-2.636l.04-.15c.154-.571.23-.857.096-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465-1.072-.287-1.608-.43-1.702-.804a.658.658 0 0 1-.004-.019c-.083-.375.34-.712 1.185-1.385Z" />
      <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" />
    </svg>
  );
};
export default SvgBoltCircle;