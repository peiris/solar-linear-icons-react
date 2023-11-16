import * as React from "react";
import type { SVGProps } from "react";
const SvgPointOnMapPerspective = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M21.121 21.121C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121m0 10.242C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879m18.242 0Zm0-10.242C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879m18.242 0Zm-18.242 0C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121m0-10.242Zm0 10.242ZM21 21 3 11M3.5 21l8.5-5" />
      <circle cx={17} cy={5} r={3} />
      <path d="M17 13V8" />
    </svg>
  );
};
export default SvgPointOnMapPerspective;