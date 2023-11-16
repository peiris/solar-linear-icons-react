import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5 1.25a.75.75 0 0 1 .75.75v9c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h9a.75.75 0 0 1 0 1.5H12.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V2A.75.75 0 0 1 5 1.25Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 5.75h2.25v-1.5H2a.75.75 0 0 0 0 1.5ZM19.75 22v-2.25h-1.5V22a.75.75 0 0 0 1.5 0ZM15.29 5.89c-1.028-.138-2.383-.14-4.29-.14H8a.75.75 0 0 1 0-1.5h3.056c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V16a.75.75 0 0 1-1.5 0v-3c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M8.5 11.5c0-1.414 0-2.121.44-2.56.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44-.44-.439-.44-1.146-.44-2.56v-1Z"
      />
    </svg>
  );
};
export default SvgCrop;