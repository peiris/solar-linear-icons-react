import * as React from "react";
import type { SVGProps } from "react";
const SvgTagPrice = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M4.728 16.137c-1.545-1.546-2.318-2.318-2.605-3.321-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302.614-.613 1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45 1.003.288 1.775 1.061 3.32 2.606l1.83 1.83C20.657 9.248 22 10.592 22 12.262c0 1.671-1.344 3.015-4.033 5.704-2.69 2.69-4.034 4.034-5.705 4.034-1.67 0-3.015-1.344-5.704-4.033l-1.83-1.83Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15.39 15.39c.585-.587.664-1.457.176-1.946-.488-.488-1.359-.409-1.945.177-.585.586-1.456.665-1.944.177-.488-.488-.409-1.359.177-1.944m3.535 3.535.354.354m-.354-.354c-.4.401-.935.565-1.389.471m-2.5-4.36.354.354m0 0c.331-.332.753-.5 1.146-.497"
      />
      <circle
        cx={8.607}
        cy={8.879}
        r={2}
        stroke="currentColor"
        
        transform="rotate(-45 8.607 8.879)"
      />
    </svg>
  );
};
export default SvgTagPrice;
