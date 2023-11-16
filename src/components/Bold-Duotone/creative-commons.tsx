import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommons = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9.286 8.75C7.283 8.75 5.75 10.253 5.75 12s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389c-.614.25-1.29.388-1.997.388-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75c.707 0 1.383.138 1.997.388a.75.75 0 0 1-.566 1.39 3.784 3.784 0 0 0-1.431-.278ZM17.286 8.75c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389c-.614.25-1.29.388-1.997.388-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75c.707 0 1.383.138 1.997.388a.75.75 0 0 1-.566 1.39 3.784 3.784 0 0 0-1.431-.278Z"
      />
    </svg>
  );
};
export default SvgCreativeCommons;
