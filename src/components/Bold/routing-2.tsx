import * as React from "react";
import type { SVGProps } from "react";
const SvgRouting2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.5 14c-1.933 0-3.5 1.458-3.5 3.257 0 1.785 1.117 3.868 2.86 4.613.406.173.874.173 1.28 0 1.743-.745 2.86-2.828 2.86-4.613C22 15.458 20.433 14 18.5 14Zm0 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.5 2C3.567 2 2 3.458 2 5.257 2 7.042 3.117 9.125 4.86 9.87c.406.173.874.173 1.28 0C7.883 9.125 9 7.042 9 5.257 9 3.458 7.433 2 5.5 2Zm0 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11.25 5a.75.75 0 0 1 .75-.75h4.132c2.751 0 3.797 3.593 1.476 5.07l-10.41 6.625c-1.056.672-.58 2.305.67 2.305h2.321l-.22-.22a.75.75 0 1 1 1.061-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.867c-2.751 0-3.797-3.593-1.476-5.07l10.411-6.625c1.055-.672.58-2.305-.671-2.305H12a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRouting2;
