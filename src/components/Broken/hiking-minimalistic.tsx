import * as React from "react";
import type { SVGProps } from "react";
const SvgHikingMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={11.5}
        cy={5.5}
        r={2.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 16.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2"
      />
      <path
        fill="currentColor"
        d="m10.21 11.901.746.075-.746-.075Zm-.069.686-.746-.075.746.075Zm8.436-2.734-.48-.576.48.576Zm.903.223a.75.75 0 0 0-.96-1.152l.96 1.152Zm-8.276 4.677-.397.636.397-.636Zm.333.208.398-.636-.398.636Zm2.72 4.432.747-.067-.747.067Zm-.604 1.674a.75.75 0 1 0 1.494-.134l-1.494.134ZM13 10.5l-.386.643a.75.75 0 0 0 .05.028L13 10.5Zm-3.536 1.326-.069.686 1.492.15.07-.686-1.493-.15Zm9.593-1.397.423-.353-.96-1.152-.424.353.96 1.152Zm-8.25 4.96.333.208.795-1.272-.333-.208-.795 1.272Zm2.703 4.07.143 1.608 1.494-.134-.143-1.607-1.494.133Zm-.845-8.288a5.878 5.878 0 0 0 6.392-.742l-.96-1.152a4.378 4.378 0 0 1-4.762.552l-.67 1.342Zm-1.525 4.426a5.086 5.086 0 0 1 2.37 3.862l1.494-.133a6.586 6.586 0 0 0-3.07-5.001l-.794 1.272Zm-1.745-3.085a3.036 3.036 0 0 0 1.412 2.877l.795-1.272a1.536 1.536 0 0 1-.715-1.455l-1.492-.15Zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97l1.492.149Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19 14V7m0 14v-3"
      />
    </svg>
  );
};
export default SvgHikingMinimalistic;
