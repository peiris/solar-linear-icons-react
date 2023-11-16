import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerPen = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M16 22c-1.886 0-2.828 0-3.414-.586C12 20.828 12 19.886 12 18V6c0-1.886 0-2.828.586-3.414C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22h-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="m6.012 21.027-.288.548A.814.814 0 0 1 5 22a.814.814 0 0 1-.724-.425l-.288-.548m2.024 0H3.988m2.024 0 1.18-2.242c.279-.53.418-.794.52-1.07.122-.325.206-.661.25-1.004.038-.29.038-.586.038-1.177V4.85C8 3.276 6.657 2 5 2S2 3.276 2 4.85v10.684c0 .591 0 .887.038 1.177.044.343.128.68.25 1.005.102.275.241.54.52 1.069l1.18 2.242"
      />
      <path
        stroke="currentColor"
        
        d="M2 5.8s1.125.95 3 .95 3-.95 3-.95"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgRulerPen;
