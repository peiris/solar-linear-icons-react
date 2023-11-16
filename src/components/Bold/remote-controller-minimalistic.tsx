import * as React from "react";
import type { SVGProps } from "react";
const SvgRemoteControllerMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.75 11a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104C7.787 22 9.19 22 12 22c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104ZM12 7.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRemoteControllerMinimalistic;
