import * as React from "react";
import type { SVGProps } from "react";
const SvgRugby = (props: SVGProps<SVGSVGElement>) => {
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
        d="m15.167 2.758 6.075 6.076a28.099 28.099 0 0 0-.077-2.845 3.386 3.386 0 0 0-3.154-3.154 28.122 28.122 0 0 0-2.844-.077Zm5.94 8.062L13.18 2.893c-2.697.305-5.4 1.15-7.269 3.018-1.869 1.869-2.713 4.572-3.018 7.269l7.927 7.927c2.697-.305 5.4-1.15 7.269-3.018 1.869-1.869 2.713-4.572 3.018-7.269ZM8.834 21.242l-6.076-6.076c-.026 1.022.012 1.99.077 2.845a3.386 3.386 0 0 0 3.154 3.154c.855.065 1.823.103 2.845.077Zm4.551-19.879a27.886 27.886 0 0 1 4.74-.024 4.886 4.886 0 0 1 4.536 4.535 27.89 27.89 0 0 1-.024 4.74c-.285 2.957-1.18 6.227-3.487 8.536-2.309 2.308-5.58 3.202-8.535 3.487a27.89 27.89 0 0 1-4.74.024 4.886 4.886 0 0 1-4.536-4.535 27.886 27.886 0 0 1 .024-4.74c.285-2.957 1.18-6.227 3.487-8.536 2.309-2.308 5.58-3.202 8.535-3.487ZM11.943 8.16a.75.75 0 0 1 1.06 0l.888.888.889-.888a.75.75 0 1 1 1.06 1.06l-.888.889.888.888a.75.75 0 1 1-1.06 1.06l-.889-.888-.83.831.888.888a.75.75 0 0 1-1.06 1.06L12 13.062l-.83.83.888.889a.75.75 0 1 1-1.061 1.06l-.888-.888-.888.888a.75.75 0 0 1-1.06-1.06l.887-.889-.888-.888a.75.75 0 1 1 1.06-1.06l.889.888.83-.83-.888-.889a.75.75 0 0 1 1.061-1.06l.888.887.83-.83-.887-.888a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRugby;
