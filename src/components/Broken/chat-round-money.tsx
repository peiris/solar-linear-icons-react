import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundMoney = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 15.333c1.105 0 2-.746 2-1.666 0-.92-.895-1.667-2-1.667s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V16m0-8v.667m0 0c1.105 0 2 .746 2 1.666"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5"
      />
    </svg>
  );
};
export default SvgChatRoundMoney;
