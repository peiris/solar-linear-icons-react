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
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10-1.6 0-3.112-.376-4.452-1.044a1.634 1.634 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.633 1.633 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10ZM12 7.25a.75.75 0 0 1 .75.75v.01c1.089.275 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916-.824 0-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417 0 1.19-.911 2.049-2 2.323V16a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916.824 0 1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417 0-1.19.911-2.048 2-2.323V8a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChatRoundMoney;
