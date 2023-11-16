import * as React from "react";
import type { SVGProps } from "react";
const SvgSuspensionBolt = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M8 6.5v-2c0-.465 0-.697-.038-.89A2 2 0 0 0 6.39 2.038C6.197 2 5.965 2 5.5 2s-.697 0-.89.038A2 2 0 0 0 3.038 3.61C3 3.803 3 4.035 3 4.5v2c0 .465 0 .697.038.89A2 2 0 0 0 4.61 8.962C4.803 9 5.035 9 5.5 9s.697 0 .89-.038A2 2 0 0 0 7.962 7.39C8 7.197 8 6.965 8 6.5ZM21 6.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.197 2 18.965 2 18.5 2s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C16 3.803 16 4.035 16 4.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C21 7.197 21 6.965 21 6.5ZM8 19.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C6.197 15 5.965 15 5.5 15s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C3 16.803 3 17.035 3 17.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C8 20.197 8 19.965 8 19.5ZM21 19.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.197 15 18.965 15 18.5 15s-.697 0-.89.038a2 2 0 0 0-1.572 1.572c-.038.193-.038.425-.038.89v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16 18.5H8M16 5.5H8"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M12 9.5 10.5 12h3L12 14.5"
      />
    </svg>
  );
};
export default SvgSuspensionBolt;
