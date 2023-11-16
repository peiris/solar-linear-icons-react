import * as React from "react";
import type { SVGProps } from "react";
const SvgLockPasswordUnlocked = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a5.25 5.25 0 0 1 10.335-1.313.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055a23.57 23.57 0 0 1 1.5-.051V8Z"
      />
    </svg>
  );
};
export default SvgLockPasswordUnlocked;