import * as React from "react";
import type { SVGProps } from "react";
const SvgStar1 = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.04 7.772c-2.46.557-3.69.835-3.983 1.776-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506.766.582 1.918.051 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452.347 0 .674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01.767-.582.64-1.89.387-4.507m1.189-3.824c1.677-1.96 2.515-2.941 2.223-3.882-.293-.941-1.523-1.22-3.983-1.776l-.636-.144c-.699-.158-1.048-.237-1.329-.45-.28-.213-.46-.536-.82-1.182l-.328-.588C13.58 3.136 12.947 2 12 2c-.947 0-1.58 1.136-2.847 3.408"
      />
    </svg>
  );
};
export default SvgStar1;
