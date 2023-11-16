import * as React from "react";
import type { SVGProps } from "react";
const SvgPalette = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18V6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 19H5"
      />
      <path
        stroke="currentColor"
        
        d="m13.314 4.929-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056-.99-.99-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"
      />
      <path
        stroke="currentColor"
        
        d="M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14h-2.5"
      />
    </svg>
  );
};
export default SvgPalette;
