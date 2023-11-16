import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRounded = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 12.25c-2.04 0-3.922.47-5.322 1.27C5.3 14.308 4.25 15.51 4.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27 2.04 0 3.922-.47 5.322-1.27 1.378-.788 2.428-1.99 2.428-3.48s-1.05-2.692-2.428-3.48c-1.4-.8-3.283-1.27-5.322-1.27ZM5.75 17c0-.72.517-1.517 1.672-2.177 1.134-.648 2.751-1.073 4.578-1.073 1.827 0 3.444.425 4.578 1.073 1.155.66 1.672 1.458 1.672 2.177 0 .72-.517 1.517-1.672 2.177-1.134.648-2.751 1.073-4.578 1.073-1.827 0-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserRounded;
