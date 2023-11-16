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
        d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69 0-5.291-3.873-8.815-6.658-10.434-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11c0 7.111 5.289 8.89 7.933 8.89.154 0 .316-.006.484-.015.446-.056 0 .099 1.415-.185Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473-.196-.115-.424.03-.441.256-.056.718-.746 1.29-1.215.744-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445Z"
      />
    </svg>
  );
};
export default SvgFire;
