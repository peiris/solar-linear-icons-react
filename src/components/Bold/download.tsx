import * as React from "react";
import type { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M12 1.25a.75.75 0 0 0-.75.75v10.973l-1.68-1.961a.75.75 0 1 0-1.14.976l3 3.5a.75.75 0 0 0 1.14 0l3-3.5a.75.75 0 1 0-1.14-.976l-1.68 1.96V2a.75.75 0 0 0-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 9v.378a2.249 2.249 0 0 1 2.458 3.586l-3 3.5a2.25 2.25 0 0 1-3.416 0l-3-3.5A2.25 2.25 0 0 1 9.75 9.378V9H8c-2.828 0-4.243 0-5.121.879C2 10.757 2 12.172 2 15v1c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-1c0-2.828 0-4.243-.879-5.121C20.243 9 18.828 9 16 9h-1.75Z"
      />
    </svg>
  );
};
export default SvgDownload;
