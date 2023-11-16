import * as React from "react";
import type { SVGProps } from "react";
const SvgPointOnMap = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M21 13.162c0-1.043 0-3.565-.283-3.958-.283-.393-.778-.558-1.768-.888L18 8m3 8.829c0 1.29 0 1.936-.34 2.351-.115.14-.255.26-.413.35-.465.267-1.102.16-2.375-.051-1.256-.21-1.884-.314-2.507-.262-.219.018-.436.05-.65.097-.61.134-1.185.421-2.334.996-1.5.75-2.25 1.125-3.048 1.24-.24.035-.483.052-.726.052-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888C3 19.403 3 18.88 3 17.838V17m0-4.092c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.515-.287 1.197-.11 2.454.304"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17.25 11.251c.486-1.157.75-2.39.75-3.55C18 4.551 15.314 2 12 2S6 4.552 6 7.7c0 3.124 1.915 6.769 4.903 8.072a2.755 2.755 0 0 0 2.194 0c.954-.416 1.8-1.071 2.507-1.872"
      />
      <circle cx={12} cy={8} r={2} stroke="currentColor"  />
    </svg>
  );
};
export default SvgPointOnMap;
