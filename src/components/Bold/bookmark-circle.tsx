import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkCircle = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm4-7.954v-2.497c0-2.145 0-3.217-.586-3.883C14.828 7 13.886 7 12 7c-1.886 0-2.828 0-3.414.666C8 8.332 8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473.453-.45.68-.676.942-.735a.883.883 0 0 1 .39 0c.262.059.489.284.942.735 1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBookmarkCircle;
