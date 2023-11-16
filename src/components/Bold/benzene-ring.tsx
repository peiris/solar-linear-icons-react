import * as React from "react";
import type { SVGProps } from "react";
const SvgBenzeneRing = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.98 4.88C10.965 4.292 11.458 4 12 4c.541 0 1.035.293 2.02.88l2.96 1.758c.705.42 1.158.689 1.458.985l3.126-2.233a.75.75 0 1 1 .872 1.22l-3.454 2.467c.018.314.018.692.018 1.164v3.518c0 1.172 0 1.758-.27 2.241-.271.483-.765.776-1.75 1.362l-2.96 1.759c-.985.586-1.479.879-2.02.879-.541 0-1.034-.293-2.02-.88l-2.96-1.758c-.635-.378-1.066-.634-1.364-.898l-3.24 2.16a.75.75 0 1 1-.832-1.248l3.445-2.297C5 14.737 5 14.314 5 13.76V10.24c0-.554 0-.977.029-1.32L1.584 6.623a.75.75 0 0 1 .832-1.248l3.24 2.16c.298-.264.729-.52 1.365-.898l2.958-1.759Zm6.664 9.236a.75.75 0 0 1-.26 1.028l-4 2.384a.75.75 0 1 1-.768-1.288l4-2.384a.75.75 0 0 1 1.028.26Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBenzeneRing;
