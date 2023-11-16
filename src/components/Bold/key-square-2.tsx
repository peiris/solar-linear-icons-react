import * as React from "react";
import type { SVGProps } from "react";
const SvgKeySquare2 = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M22 6.72c0 2.607-2.122 4.72-4.74 4.72-.477 0-1.565-.11-2.094-.549l-.661.659c-.389.387-.284.501-.11.689.071.078.155.17.22.299 0 0 .551.768 0 1.537-.33.439-1.256 1.053-2.314 0l-.22.22s.66.768.11 1.536c-.331.439-1.213.878-1.985.11l-.771.768c-.53.527-1.176.22-1.433 0l-.661-.659c-.617-.614-.257-1.28 0-1.536l5.731-5.708s-.55-.878-.55-2.086c0-2.607 2.121-4.72 4.739-4.72C19.878 2 22 4.113 22 6.72Zm-3.086 0c0 .91-.74 1.647-1.653 1.647a1.65 1.65 0 0 1-1.654-1.647c0-.91.74-1.647 1.654-1.647a1.65 1.65 0 0 1 1.653 1.647Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.196 2.001a6.195 6.195 0 0 0-2.175 4.72c0 .68.127 1.276.273 1.738l-5.012 4.992a2.71 2.71 0 0 0-.75 1.455c-.122.747.095 1.555.75 2.207l.662.659c.027.027.055.053.084.078.295.252.774.535 1.37.623a2.423 2.423 0 0 0 2.088-.693c.385.097.78.105 1.16.032a2.902 2.902 0 0 0 1.763-1.107c.133-.185.235-.372.31-.557a2.81 2.81 0 0 0 .291-.04 3.003 3.003 0 0 0 1.824-1.16 2.742 2.742 0 0 0 .487-2.08 6.236 6.236 0 0 0 5.678-2.1L22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2l1.196.001Z"
      />
    </svg>
  );
};
export default SvgKeySquare2;
