import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardList = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 4.002c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v6c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-6c0-2.828 0-4.242.879-5.121.768-.768 1.946-.865 4.121-.877"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.5 14H17M7 14h.5M7 10.5h.5M7 17.5h.5M10.5 10.5H17M10.5 17.5H17"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z"
      />
    </svg>
  );
};
export default SvgClipboardList;
