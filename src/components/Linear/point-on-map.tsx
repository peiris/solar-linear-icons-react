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
        
        d="m18 8 .949.316c.99.33 1.485.495 1.768.888.283.393.283.915.283 1.958v5.667c0 1.29 0 1.936-.34 2.351-.115.14-.255.26-.413.35-.465.267-1.102.16-2.375-.051-1.256-.21-1.884-.314-2.507-.262-.219.018-.436.05-.65.097-.61.134-1.185.421-2.334.996-1.5.75-2.25 1.125-3.048 1.24-.24.035-.483.052-.726.052-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888C3 19.403 3 18.88 3 17.838v-4.93c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.578-.322 1.365-.06 2.938.465"
      />
      <path
        stroke="currentColor"
        
        d="M6 7.7C6 4.552 8.686 2 12 2s6 2.552 6 5.7c0 3.124-1.915 6.769-4.903 8.072a2.755 2.755 0 0 1-2.194 0C7.915 14.47 6 10.824 6 7.7Z"
      />
      <circle cx={12} cy={8} r={2} stroke="currentColor"  />
    </svg>
  );
};
export default SvgPointOnMap;
