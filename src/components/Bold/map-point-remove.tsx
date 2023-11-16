import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPointRemove = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2c-4.418 0-8 3.646-8 8.143 0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144 20 5.645 16.418 2 12 2Zm-3.75 8A.75.75 0 0 1 9 9.25h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMapPointRemove;
