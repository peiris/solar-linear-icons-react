import * as React from "react";
import type { SVGProps } from "react";
const SvgPodcast = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.837 10.546c0-.402-.312-.728-.697-.728H8.58C8.905 8.158 10.312 6.91 12 6.91s3.095 1.25 3.419 2.91H12.93c-.385 0-.697.325-.697.726 0 .402.312.728.697.728h2.558v1.454H12.93c-.385 0-.697.326-.697.727 0 .402.312.728.697.728h2.489c-.278 1.425-1.354 2.547-2.721 2.836v2.255c0 .401-.313.727-.698.727-.385 0-.698-.326-.698-.727v-2.255c-1.367-.29-2.443-1.411-2.72-2.836h1.557c.386 0 .698-.326.698-.728 0-.401-.312-.727-.697-.727H8.512v-1.454h1.627c.386 0 .698-.326.698-.727Z"
      />
      <path
        fill="currentColor"
        d="M12 4c-3.33 0-6.054 2.701-6.266 6.116a2.464 2.464 0 0 0-1.176-.298C3.145 9.818 2 11.012 2 12.485v1.94c0 1.472 1.145 2.666 2.558 2.666.048 0 .096-.002.143-.004v.004c1.334 0 2.415-1.127 2.415-2.518v-4.028c0-2.811 2.187-5.09 4.884-5.09 2.697 0 4.884 2.279 4.884 5.09v4.028c0 1.39 1.08 2.518 2.415 2.518v-.004c.047.003.095.004.143.004 1.413 0 2.558-1.194 2.558-2.667v-1.94c0-1.472-1.145-2.666-2.558-2.666-.424 0-.824.108-1.176.298C18.054 6.701 15.329 4 12 4Z"
      />
    </svg>
  );
};
export default SvgPodcast;
