import * as React from "react";
import type { SVGProps } from "react";
const SvgPostsCarouselHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.3}>
        <path d="M5.5 16V8a3 3 0 0 0-3-3 .5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5 3 3 0 0 0 3-3ZM18.5 8v8a3 3 0 0 0 3 3 .5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5 3 3 0 0 0-3 3Z" />
      </g>
      <path
        fill="currentColor"
        d="M11.5 19c-1.886 0-2.828 0-3.414-.586C7.5 17.828 7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414C8.672 5 9.614 5 11.5 5h1c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v6c0 1.886 0 2.828-.586 3.414C15.328 19 14.386 19 12.5 19h-1Z"
      />
    </svg>
  );
};
export default SvgPostsCarouselHorizontal;
