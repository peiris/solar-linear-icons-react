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
        strokeWidth={1.5}
        d="M5 11.5c0-1.886 0-2.828.586-3.414C6.172 7.5 7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586C19 8.672 19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586H9c-1.886 0-2.828 0-3.414-.586C5 15.328 5 14.386 5 12.5v-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2M19 22v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5"
      />
    </svg>
  );
};
export default SvgPostsCarouselVertical;
