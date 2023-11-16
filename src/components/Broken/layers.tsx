import * as React from "react";
import type { SVGProps } from "react";
const SvgLayers = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M4.979 6.315C2.993 7.109 2 7.506 2 8s.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12c1.234 0 2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4c-.954 0-1.764.237-3 .712"
      />
      <path
        stroke="currentColor"
        
        d="m5.766 10-.787.315C2.993 11.109 2 11.507 2 12c0 .493.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16c1.234 0 2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12c0-.493-.993-.89-2.979-1.685L18.234 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19.021 17.685C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14M5.766 14l-.787.315C2.993 15.109 2 15.507 2 16c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20c.954 0 1.764-.237 3-.712"
      />
    </svg>
  );
};
export default SvgLayers;
