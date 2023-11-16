import * as React from "react";
import type { SVGProps } from "react";
const SvgCupFirst = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 16c-5.76 0-6.78-5.74-6.96-10.294-.051-1.266-.076-1.9.4-2.485.475-.586 1.044-.682 2.183-.874A26.374 26.374 0 0 1 12 2c1.784 0 3.253.157 4.377.347 1.139.192 1.708.288 2.184.874.476.586.45 1.219.4 2.485-.18 4.553-1.2 10.294-6.96 10.294Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m11 8 1.5-1.5v4"
      />
      <path
        stroke="currentColor"
        
        d="m19 5 .949.316c.99.33 1.485.495 1.768.888.283.393.283.915.283 1.958v.073c0 .86 0 1.291-.207 1.643-.207.352-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888C2 6.597 2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643.207.352.584.561 1.336.98L6.5 12.5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 16v3"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804L15.5 22Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M18 22H6"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCupFirst;
