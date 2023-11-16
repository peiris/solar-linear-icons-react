import * as React from "react";
import type { SVGProps } from "react";
const SvgTagHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.221 20h2.637c2.227 0 3.341 0 4.27-.501.93-.502 1.52-1.42 2.701-3.259l.681-1.06C21.503 13.634 22 12.86 22 12c0-.86-.497-1.634-1.49-3.18l-.68-1.06c-1.181-1.838-1.771-2.757-2.701-3.259C16.199 4 15.085 4 12.858 4h-2.637C6.346 4 4.408 4 3.204 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.204 6.828C4.408 20 6.346 20 10.22 20Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M7 7.055c.414 0 .75.316.75.706v8.475c0 .39-.336.706-.75.706s-.75-.316-.75-.706V7.76c0-.39.336-.706.75-.706Z"
      />
    </svg>
  );
};
export default SvgTagHorizontal;
