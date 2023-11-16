import * as React from "react";
import type { SVGProps } from "react";
const SvgDumbbell = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 14v-4c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 7 19.932 7 19 7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C16 8.602 16 9.568 16 10.5H8c0-.932 0-1.898-.152-2.265a2 2 0 0 0-1.083-1.083C6.398 7 5.932 7 5 7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 8.602 2 9.068 2 10v4c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 17 4.068 17 5 17c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C8 15.398 8 14.432 8 13.5h8c0 .932 0 1.898.152 2.265a2 2 0 0 0 1.083 1.083C17.602 17 18.068 17 19 17c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 15.398 22 14.932 22 14Z"
      />
    </svg>
  );
};
export default SvgDumbbell;
