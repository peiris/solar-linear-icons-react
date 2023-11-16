import * as React from "react";
import type { SVGProps } from "react";
const SvgTennis = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.956 9.956 0 0 0 4.197-4.731 9.985 9.985 0 0 0-.537-8.93 9.985 9.985 0 0 0-7.464-4.928A9.956 9.956 0 0 0 7 3.339C2.217 6.101.58 12.217 3.34 17Z"
      />
      <path
        stroke="currentColor"
        
        d="M13.196 2.071s-.232 3.599 2.268 7.93c2.5 4.33 5.733 5.928 5.733 5.928M2.804 8.071s3.232 1.599 5.732 5.93c2.5 4.33 2.268 7.928 2.268 7.928"
      />
    </svg>
  );
};
export default SvgTennis;
