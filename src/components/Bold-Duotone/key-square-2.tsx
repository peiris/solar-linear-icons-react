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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 6.72c0 2.607-2.122 4.72-4.74 4.72-.477 0-1.565-.11-2.094-.549l-.661.659c-.389.387-.284.501-.11.689.071.078.155.17.22.299 0 0 .551.768 0 1.537-.33.439-1.256 1.053-2.314 0l-.22.22s.66.768.11 1.536c-.331.439-1.213.878-1.985.11l-.771.768c-.53.527-1.176.22-1.433 0l-.661-.659c-.617-.614-.257-1.28 0-1.536l5.731-5.708s-.55-.878-.55-2.086c0-2.607 2.121-4.72 4.739-4.72C19.878 2 22 4.113 22 6.72Zm-3.086 0c0 .91-.74 1.647-1.653 1.647a1.65 1.65 0 0 1-1.654-1.647c0-.91.74-1.647 1.654-1.647a1.65 1.65 0 0 1 1.653 1.647Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgKeySquare2;
