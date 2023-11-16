import * as React from "react";
import type { SVGProps } from "react";
const SvgFire = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3 13.111C3 20.222 8.289 22 10.933 22c1.354 0 3.315-.357 5.067-1.39M18.72 18c.782-1.246 1.28-2.848 1.28-4.889 0-4.527-2.835-7.76-5.398-9.613C13.444 2.66 12 3.58 12 5.01v.323c0 1.442-.606 4.074-2.29 5.169-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971A7.467 7.467 0 0 0 3.97 9.5"
      />
      <path
        stroke="currentColor"
        
        d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555 0-1.102-.59-1.845-1.16-2.274-.398-.299-.957-.03-1.094.449-.178.624-.823 1.016-1.152.456-.3-.512-.3-1.28-.3-1.743 0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z"
      />
    </svg>
  );
};
export default SvgFire;
