import * as React from "react";
import type { SVGProps } from "react";
const SvgUsersGroupRounded = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM5.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15 2.25a.75.75 0 0 0 0 1.5 2.25 2.25 0 0 1 0 4.5.75.75 0 0 0 0 1.5 3.75 3.75 0 1 0 0-7.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.678 13.52c1.4-.8 3.283-1.27 5.322-1.27 2.04 0 3.922.47 5.322 1.27 1.378.788 2.428 1.99 2.428 3.48s-1.05 2.692-2.428 3.48c-1.4.8-3.283 1.27-5.322 1.27-2.04 0-3.922-.47-5.322-1.27C2.3 19.692 1.25 18.49 1.25 17s1.05-2.692 2.428-3.48Zm.744 1.303C3.267 15.483 2.75 16.28 2.75 17c0 .72.517 1.517 1.672 2.177C5.556 19.825 7.173 20.25 9 20.25c1.827 0 3.444-.425 4.578-1.073 1.155-.66 1.672-1.458 1.672-2.177 0-.72-.517-1.517-1.672-2.177-1.134-.648-2.751-1.073-4.578-1.073-1.827 0-3.444.425-4.578 1.073Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.16 13.267a.75.75 0 0 0-.32 1.466c.792.173 1.425.472 1.843.814.418.342.567.677.567.953 0 .25-.12.545-.453.854-.335.311-.85.598-1.513.798a.75.75 0 1 0 .432 1.437c.823-.248 1.558-.631 2.102-1.136.546-.507.932-1.174.932-1.953 0-.865-.474-1.588-1.117-2.114-.644-.527-1.51-.908-2.472-1.119Z"
      />
    </svg>
  );
};
export default SvgUsersGroupRounded;
