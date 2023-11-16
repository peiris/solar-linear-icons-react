import * as React from "react";
import type { SVGProps } from "react";
const SvgForbiddenCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10a9.96 9.96 0 0 0-2.418-6.52L5.479 19.581A9.96 9.96 0 0 0 12 22ZM12 2C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 2.418 6.52L18.521 4.419A9.96 9.96 0 0 0 12 2Z"
      />
    </svg>
  );
};
export default SvgForbiddenCircle;
