import * as React from "react";
import type { SVGProps } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>) => {
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
        d="M1 12c0-5.185 0-7.778 1.61-9.39C4.223 1 6.816 1 12 1c5.185 0 7.778 0 9.39 1.61C23 4.223 23 6.816 23 12c0 5.185 0 7.778-1.61 9.39C19.777 23 17.184 23 12 23c-5.185 0-7.778 0-9.39-1.61C1 19.777 1 17.184 1 12Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M2.61 21.389c1.612 1.61 4.205 1.61 9.39 1.61 5.185 0 7.778 0 9.39-1.61 1.492-1.493 1.601-3.829 1.61-8.29h-3.476c-.996 0-1.494 0-1.931.202-.438.201-.762.58-1.41 1.335l-.666.777c-.648.756-.972 1.134-1.41 1.335-.437.202-.935.202-1.93.202h-.353c-.996 0-1.494 0-1.931-.202-.438-.2-.762-.579-1.41-1.335l-.666-.777c-.648-.756-.972-1.134-1.41-1.335-.437-.201-.935-.201-1.93-.201H1c.008 4.46.118 6.796 1.61 8.289Z"
      />
    </svg>
  );
};
export default SvgInbox;
