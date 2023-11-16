import * as React from "react";
import type { SVGProps } from "react";
const SvgChefHatMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 10a5 5 0 0 1 5.737-4.946 4.502 4.502 0 0 1 8.526 0A5 5 0 0 1 19 14.584V18c0 1.886 0 2.828-.586 3.414C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586C5 20.828 5 19.886 5 18v-3.416A5.001 5.001 0 0 1 2 10Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
      />
    </svg>
  );
};
export default SvgChefHatMinimalistic;
