import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimalisticMagniferBug = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5ZM1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5 17.16 21.75 11.5 21.75 1.25 17.16 1.25 11.5Zm7.299-3.314A3.743 3.743 0 0 1 11.5 6.75c1.198 0 2.265.562 2.951 1.436l.714-.357a.75.75 0 1 1 .67 1.342l-.712.356c.083.31.127.637.127.973v.25H16a.75.75 0 0 1 0 1.5h-.75v.25c0 .336-.044.662-.127.973l.712.356a.75.75 0 1 1-.67 1.342l-.714-.357A3.743 3.743 0 0 1 11.5 16.25a3.743 3.743 0 0 1-2.951-1.436l-.714.357a.75.75 0 1 1-.67-1.342l.712-.356a3.756 3.756 0 0 1-.127-.973v-.25H7a.75.75 0 0 1 0-1.5h.75v-.25c0-.336.044-.663.127-.973l-.712-.356a.75.75 0 0 1 .67-1.342l.714.357Zm.701 3.064v1.25c0 .98.626 1.813 1.5 2.122V11.25h-1.5Zm3 0v3.372a2.251 2.251 0 0 0 1.5-2.122v-1.25h-1.5Zm1.372-1.5H9.378a2.25 2.25 0 0 1 4.244 0Zm5.848 9.72a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMinimalisticMagniferBug;
