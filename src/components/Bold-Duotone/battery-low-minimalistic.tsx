import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryLowMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172C19.5 17.657 19.5 15.771 19.5 12c0-3.771 0-5.657-1.172-6.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0v4ZM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363.001.002.002.003.004.007.01.018.026.053c.02.043.046.101.076.175.058.147.131.356.202.631.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5.15 5.15 0 0 1-.202.631 2.98 2.98 0 0 1-.103.228l-.01.018-.003.008-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01c.007-.014.02-.043.038-.087.035-.087.087-.234.142-.447.108-.424.226-1.111.226-2.1 0-.99-.118-1.678-.226-2.102a3.667 3.667 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01Z"
      />
    </svg>
  );
};
export default SvgBatteryLowMinimalistic;
