import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldUser = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z"
      />
      <circle cx={12} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 15c0 1.105 0 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2Z"
      />
    </svg>
  );
};
export default SvgShieldUser;
