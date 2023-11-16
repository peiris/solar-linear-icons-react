import * as React from "react";
import type { SVGProps } from "react";
const SvgWeigher = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153ZM6.71 2.89c-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14Zm2.042 1.89a19.75 19.75 0 0 1 6.494 0l.425.072a2.75 2.75 0 0 1 2.101 3.734l-.665 1.664a2.02 2.02 0 0 1-2.365 1.209 11.309 11.309 0 0 0-5.486 0 2.02 2.02 0 0 1-2.365-1.21l-.666-1.663a2.75 2.75 0 0 1 2.102-3.734l.425-.071ZM15 6.26a18.25 18.25 0 0 0-6 0l-.426.071A1.25 1.25 0 0 0 7.62 8.03l.666 1.664a.52.52 0 0 0 .608.31c.159-.039.318-.076.477-.109L8.8 8.299a.75.75 0 0 1 1.412-.506l.672 1.877a12.811 12.811 0 0 1 4.224.334.52.52 0 0 0 .608-.311l.666-1.664a1.25 1.25 0 0 0-.955-1.698L15 6.261ZM7.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWeigher;
