import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVertical = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M18 8c0-2.828 0-4.243-.879-5.121C16.243 2 14.828 2 12 2c-2.828 0-4.243 0-5.121.879C6 3.757 6 5.172 6 8v8c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22c2.828 0 4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-4"
      />
      <path
        stroke="currentColor"
        
        d="M18 19.5c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.6 22 16.9 22 15.5v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 4.5 19.4 4.5 18 4.5M6 19.5c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 17.6 2 16.9 2 15.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 4.5 4.6 4.5 6 4.5"
      />
    </svg>
  );
};
export default SvgSliderVertical;
