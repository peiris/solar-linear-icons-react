import * as React from "react";
import type { SVGProps } from "react";
const SvgFileSmile = (props: SVGProps<SVGSVGElement>) => {
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
        d="m19.352 7.617-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828C4.343 2 6.239 2 10.03 2c.606 0 1.091 0 1.5.017-.013.08-.02.161-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848.114.847.375 1.694 1.067 2.386.69.69 1.538.952 2.385 1.066.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22Zm3-6c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5-1 .672-1 1.5.448 1.5 1 1.5Zm-8.624 1.084a.75.75 0 0 1 1.04-.208 4.658 4.658 0 0 0 5.168 0 .75.75 0 0 1 .832 1.248 6.158 6.158 0 0 1-6.832 0 .75.75 0 0 1-.208-1.04ZM7 16c.552 0 1-.672 1-1.5S7.552 13 7 13s-1 .672-1 1.5.448 1.5 1 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFileSmile;
