import * as React from "react";
import type { SVGProps } from "react";
const SvgGhost = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5Z"
      />
      <ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <path
        stroke="currentColor"
        
        d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186 2.822 2.822 0 0 0 3.208 0l.353-.242a1.836 1.836 0 0 1 2.086 0l.353.242a2.822 2.822 0 0 0 3.208 0 2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgGhost;
