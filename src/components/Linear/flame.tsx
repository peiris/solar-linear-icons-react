import * as React from "react";
import type { SVGProps } from "react";
const SvgFlame = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20 15c0 4.255-2.618 6.122-4.641 6.751-.432.134-.715-.369-.457-.74.88-1.265 1.898-3.195 1.898-5.011 0-1.95-1.644-4.254-2.928-5.674-.293-.325-.805-.11-.821.328-.053 1.449-.282 3.388-1.268 4.907a.412.412 0 0 1-.677.037c-.308-.39-.616-.872-.924-1.252-.166-.205-.466-.207-.657-.026-.747.707-1.792 1.809-1.792 3.18 0 .99.472 2.22.958 3.174.22.433-.189.941-.61.698C6.246 20.309 4 18.107 4 15c0-3.146 4.31-7.505 5.956-11.623.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15Z"
      />
    </svg>
  );
};
export default SvgFlame;
