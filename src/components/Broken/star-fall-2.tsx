import * as React from "react";
import type { SVGProps } from "react";
const SvgStarFall2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M9.48 6.825c-1.82.682-2.73 1.022-2.839 1.729-.11.707.653 1.311 2.179 2.52l.394.313c.434.343.65.515.775.75.124.233.142.503.177 1.043l.032.492c.125 1.9.187 2.85.846 3.177.658.328 1.477-.184 3.115-1.208l.423-.265c.466-.29.698-.436.965-.476.266-.04.535.03 1.074.17l.49.127c1.897.493 2.845.74 3.362.236.517-.505.26-1.425-.254-3.267m.446-2.872c1.048-1.595 1.572-2.393 1.232-3.032-.339-.64-1.316-.697-3.271-.811l-.506-.03c-.556-.032-.834-.048-1.075-.168-.241-.12-.419-.33-.773-.75l-.323-.383c-1.25-1.48-1.874-2.219-2.6-2.11-.727.11-1.074.995-1.769 2.766"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M6.595 8.55C3.482 10.687 1.098 14.77 2.331 22c1.092-3.014 4.382-5.428 8.057-6.59"
      />
    </svg>
  );
};
export default SvgStarFall2;
