import * as React from "react";
import type { SVGProps } from "react";
const SvgPostsCarouselVertical = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.874 9c-.084-.387-.225-.68-.46-.914C17.828 7.5 16.886 7.5 15 7.5H9c-1.886 0-2.828 0-3.414.586C5 8.672 5 9.614 5 11.5v1c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h6c1.886 0 2.828 0 3.414-.586.532-.531.581-1.357.585-2.914M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2M19 22v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5"
      />
    </svg>
  );
};
export default SvgPostsCarouselVertical;
