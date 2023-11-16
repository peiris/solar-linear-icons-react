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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879.3.3.498.662.628 1.121M9 10H6M19 15H5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2c-2.828 0-4.243 0-5.121.879-.642.641-.815 1.568-.862 3.121M18 15v1c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862M6 15v1c0 2.828 0 4.243.879 5.121.641.642 1.568.815 3.121.862"
      />
      <circle cx={17} cy={10} r={1} fill="currentColor" />
    </svg>
  );
};
export default SvgPrinter2;
