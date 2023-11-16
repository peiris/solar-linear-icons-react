import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17-.11.653-.31.998-.616 1.244-.307.246-.737.407-1.55.494-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092-.813-.087-1.243-.248-1.55-.494-.306-.246-.506-.591-.616-1.243a5.233 5.233 0 0 1-.022-.151c-.04-.291-.06-.437.066-.78.127-.344.181-.397.291-.505.326-.32.772-.556 1.285-.667.29-.062.67-.068 1.753-.068Z"
      />
      <path
        fill="#1C274D"
        d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115.81.11 1.238.31 1.544.618.305.308.504.74.613 1.557.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068-.513.11-.96.347-1.285.667-.11.108-.164.161-.291.505A1.273 1.273 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552.109-.816.308-1.249.613-1.557Z"
        opacity={0.5}
      />
      <path
        fill="#1C274D"
        d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7ZM8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H8Z"
      />
    </svg>
  );
};
export default SvgBook;