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
        fill="currentColor"
        d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69 0-5.291-3.873-8.815-6.658-10.434-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11c0 7.111 5.289 8.89 7.933 8.89.154 0 .316-.006.484-.015C10.111 21.874 8 21.064 8 18.444c0-2.05 1.495-3.435 2.631-4.11.306-.18.663.055.663.41v.59c0 .45.175 1.155.59 1.637.47.546 1.159-.026 1.214-.744.018-.226.246-.37.442-.256.641.375 1.46 1.175 1.46 2.473 0 2.048-1.129 2.99-2.168 3.357Z"
      />
    </svg>
  );
};
export default SvgFire;
