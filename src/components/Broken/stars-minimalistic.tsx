import * as React from "react";
import type { SVGProps } from "react";
const SvgStarsMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M7.434 9.906c-2.091.473-3.136.71-3.385 1.51-.249.8.464 1.633 1.89 3.3l.368.43c.405.474.607.711.698 1.004.092.293.061.609 0 1.24l-.056.576c-.215 2.224-.323 3.336.328 3.83.651.495 1.63.044 3.587-.857l.507-.234c.556-.256.834-.384 1.129-.384.295 0 .573.128 1.13.384l.506.234c1.957.9 2.936 1.352 3.587.857.651-.494.544-1.606.328-3.83m1.01-3.25c1.426-1.667 2.139-2.5 1.89-3.3-.248-.8-1.294-1.037-3.385-1.51l-.54-.122c-.595-.135-.892-.202-1.13-.383-.239-.18-.392-.455-.698-1.004l-.278-.5C13.843 5.966 13.305 5 12.5 5c-.805 0-1.343.966-2.42 2.897"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M4.99 2s.288 1.458.92 2.085C6.54 4.712 8 4.99 8 4.99s-1.458.288-2.085.92C5.288 6.54 5.01 8 5.01 8s-.288-1.458-.92-2.085C3.46 5.288 2 5.01 2 5.01s1.458-.288 2.085-.92C4.712 3.46 4.99 2 4.99 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M18 5h2m-1 1V4"
      />
    </svg>
  );
};
export default SvgStarsMinimalistic;
