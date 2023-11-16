import * as React from "react";
import type { SVGProps } from "react";
const SvgWheelAngle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21 12c0 5.523-2.072 10-4.629 10H8.657c.867-.561 1.656-1.55 2.2-2.724.873-1.888 1.4-4.46 1.4-7.276 0-2.815-.527-5.388-1.4-7.276C10.312 3.549 9.523 2.56 8.656 2h7.714C18.928 2 21 6.477 21 12Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.31 5.134C3.51 6.866 3 9.293 3 12s.509 5.134 1.31 6.866c.824 1.778 1.855 2.634 2.804 2.634.95 0 1.981-.856 2.804-2.634.802-1.732 1.31-4.158 1.31-6.866 0-2.707-.508-5.134-1.31-6.866C9.095 3.356 8.064 2.5 7.114 2.5c-.95 0-1.98.856-2.804 2.634ZM5.571 12c0 3.314.691 6 1.543 6 .787 0 1.436-2.29 1.531-5.25H7.63a.76.76 0 0 1-.772-.75.76.76 0 0 1 .772-.75h1.016C8.55 8.29 7.901 6 7.115 6 6.261 6 5.57 8.686 5.57 12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWheelAngle;
