import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVerticalMinimalistic = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2c2.828 0 4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16V8ZM21 4.5v15M3 4.5v15" />
    </svg>
  );
};
export default SvgSliderVerticalMinimalistic;