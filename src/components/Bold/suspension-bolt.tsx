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
        fill="currentColor"
        d="M3 6.5v-2c0-.465 0-.697.038-.89A2 2 0 0 1 4.61 2.038C4.803 2 5.035 2 5.5 2s.697 0 .89.038A2 2 0 0 1 7.962 3.61C8 3.803 8 4.035 8 4.5v.25h8V4.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C17.803 2 18.035 2 18.5 2s.697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89v2c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C19.197 9 18.965 9 18.5 9s-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C16 7.197 16 6.965 16 6.5v-.25H8v.25c0 .465 0 .697-.038.89A2 2 0 0 1 6.39 8.962C6.197 9 5.965 9 5.5 9s-.697 0-.89-.038A2 2 0 0 1 3.038 7.39C3 7.197 3 6.965 3 6.5ZM3 19.5v-2c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C4.803 15 5.035 15 5.5 15s.697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89v.25h8v-.25c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572c.193-.038.425-.038.89-.038s.697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89v2c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038s-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C16 20.197 16 19.965 16 19.5v-.25H8v.25c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C6.197 22 5.965 22 5.5 22s-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C3 20.197 3 19.965 3 19.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.386 8.857a.75.75 0 0 1 .257 1.029l-.818 1.364H13.5a.75.75 0 0 1 .643 1.136l-1.5 2.5a.75.75 0 1 1-1.286-.772l.818-1.364H10.5a.75.75 0 0 1-.643-1.136l1.5-2.5a.75.75 0 0 1 1.029-.257Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSuspensionBolt;
