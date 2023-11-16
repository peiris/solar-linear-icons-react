import * as React from "react";
import type { SVGProps } from "react";
const SvgDocument = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H4Zm0 0V5" />
      <path d="M18 6v.75h.75V6H18Zm-2.283-3.674-.106-.742.106.742ZM4.92 3.87l-.106-.743.106.743Zm.15 2.88H18v-1.5H5.071v1.5ZM18.75 6V4.306h-1.5V6h1.5Zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07l-.212-1.485ZM4.814 3.126A1.821 1.821 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318l-.212-1.485Zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237h1.5ZM5.071 5.25a.321.321 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75v-1.5ZM8 12h8M8 15.5h5.5" />
    </svg>
  );
};
export default SvgDocument;