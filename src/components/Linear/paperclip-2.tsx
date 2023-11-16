import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperclip2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m8.107 17.417 7.38-7.066c.448-.429.672-.643.789-.876.21-.417.21-.903 0-1.32-.117-.233-.341-.447-.79-.876-.447-.43-.671-.644-.915-.756-.435-.2-.942-.2-1.378 0-.243.112-.467.327-.915.756l-7.326 7.015c-1.099 1.052-1.648 1.578-1.84 2.19-.15.475-.15.982 0 1.457.192.612.741 1.138 1.84 2.19C6.05 21.183 6.6 21.71 7.239 21.893a2.76 2.76 0 0 0 1.522 0c.639-.184 1.188-.71 2.287-1.762l7.434-7.117c1.044-1 1.566-1.5 1.88-2.02a4.395 4.395 0 0 0 0-4.562c-.314-.52-.836-1.02-1.88-2.02-1.045-1-1.567-1.5-2.11-1.8a4.948 4.948 0 0 0-4.765 0c-.543.3-1.065.8-2.11 1.8l-5.99 5.734"
      />
    </svg>
  );
};
export default SvgPaperclip2;
