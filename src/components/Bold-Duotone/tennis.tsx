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
        fill="currentColor"
        d="M13.196 2.07A9.956 9.956 0 0 0 7 3.34 9.954 9.954 0 0 0 2.93 7.79c1.016.721 3.634 2.793 5.607 6.21a18.518 18.518 0 0 1 1.08 2.199c.089.215.17.426.246.633 1.068 2.929.945 5.051.942 5.097A9.955 9.955 0 0 0 17 20.66a9.956 9.956 0 0 0 4.197-4.731S17.964 14.33 15.464 10c-2.5-4.33-2.268-7.93-2.268-7.93Z"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="m3.83 17.768.043.06a9.98 9.98 0 0 0 1.825 1.94 10.03 10.03 0 0 0 5.106 2.161c.003-.055.123-2.175-.943-5.096a17.439 17.439 0 0 0-.888-2.03A18.518 18.518 0 0 0 8.536 14c-1.973-3.416-4.591-5.488-5.608-6.21a9.988 9.988 0 0 0 .902 9.978ZM20.66 7a9.985 9.985 0 0 0-7.465-4.929s-.231 3.6 2.269 7.93 5.732 5.928 5.732 5.928A9.985 9.985 0 0 0 20.66 7Z" />
      </g>
    </svg>
  );
};
export default SvgTennis;
