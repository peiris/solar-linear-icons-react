import * as React from "react";
import type { SVGProps } from "react";
const SvgSofa3 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M11 18h9a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4h3M4.5 14l-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023.068-.095.14-.186.216-.275C5.278 4 7.519 4 12 4c.723 0 1.388 0 2 .006M19.5 14l.075-.299c1.086-4.347 1.63-6.52.559-8.023a4.002 4.002 0 0 0-.215-.275c-.462-.54-1.078-.873-1.919-1.078M20 20v-2M4 20v-2"
      />
    </svg>
  );
};
export default SvgSofa3;
