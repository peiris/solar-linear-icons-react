import * as React from "react";
import type { SVGProps } from "react";
const SvgBag4 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.035 11.573c.462-2.309.693-3.463 1.522-4.143.83-.68 2.007-.68 4.362-.68h4.162c2.355 0 3.532 0 4.361.68.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079-.9 1.098-2.594 1.098-5.98 1.098H9.32c-3.386 0-5.08 0-5.98-1.098-.9-1.098-.568-2.758.096-6.079l.6-3Z"
        opacity={0.3}
      />
      <circle cx={15} cy={9.75} r={1} fill="currentColor" />
      <circle cx={9} cy={9.75} r={1} fill="currentColor" />
      <path
        fill="currentColor"
        d="M9.75 5.75a2.25 2.25 0 0 1 4.5 0v1h.431c.377 0 .733 0 1.069.002V5.75a3.75 3.75 0 1 0-7.5 0v1.002c.336-.002.692-.002 1.069-.002h.431v-1Z"
      />
    </svg>
  );
};
export default SvgBag4;
