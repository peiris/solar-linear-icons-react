import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.55 4.5c.065-.65.21-1.088.536-1.414C3.672 2.5 4.614 2.5 6.5 2.5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586-.31-.31-.456-.718-.524-1.313M21.45 15.5c-.065-.65-.21-1.088-.536-1.414-.586-.586-1.528-.586-3.414-.586-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414 0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586 1.886 0 2.828 0 3.414-.586.327-.326.471-.764.535-1.414"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C2.5 20.328 2.5 19.386 2.5 17.5ZM13.5 6.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C13.5 9.328 13.5 8.386 13.5 6.5Z"
      />
    </svg>
  );
};
export default SvgWidget;
