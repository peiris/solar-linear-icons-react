import * as React from "react";
import type { SVGProps } from "react";
const SvgTeaCup = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2.716 16.126A5.515 5.515 0 0 0 8.193 21h3.614a5.515 5.515 0 0 0 5.477-4.874l.4-3.428c.05-.427.075-.641.065-.817a2 2 0 0 0-1.646-1.85c-.174-.031-.39-.031-.82-.031H4.717c-.43 0-.645 0-.819.03a2 2 0 0 0-1.646 1.85c-.01.177.014.39.064.818"
      />
      <path
        stroke="currentColor"
        
        d="M17 17h2a3 3 0 1 0 0-6h-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M10 2a1.414 1.414 0 0 0 0 2 1.414 1.414 0 0 1 0 2M5 7.5l.116-.116c.507-.507.564-1.31.134-1.884a1.441 1.441 0 0 1 .134-1.884L5.5 3.5M14.5 7.5l.116-.116c.507-.507.564-1.31.134-1.884a1.441 1.441 0 0 1 .134-1.884L15 3.5"
      />
    </svg>
  );
};
export default SvgTeaCup;
