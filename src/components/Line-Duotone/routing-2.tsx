import * as React from "react";
import type { SVGProps } from "react";
const SvgRouting2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 5.257C2 3.458 3.567 2 5.5 2S9 3.458 9 5.257C9 7.042 7.883 9.125 6.14 9.87a1.638 1.638 0 0 1-1.28 0C3.117 9.125 2 7.042 2 5.257ZM15 17.257C15 15.458 16.567 14 18.5 14s3.5 1.458 3.5 3.257c0 1.785-1.117 3.868-2.86 4.613a1.638 1.638 0 0 1-1.28 0c-1.743-.745-2.86-2.828-2.86-4.613Z"
      />
      <path
        fill="currentColor"
        d="M12 4.25a.75.75 0 0 0 0 1.5v-1.5ZM12 19l.53.53a.75.75 0 0 0 0-1.06L12 19Zm5.206-10.313.402.633-.402-.633ZM6.794 15.313l.403.632-.403-.632Zm4.236 1.657a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm-1.06 3a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.162-15.72H12v1.5h4.132v-1.5ZM12 18.25H7.868v1.5H12v-1.5Zm4.803-10.195L6.392 14.68l.805 1.265L17.608 9.32l-.805-1.265ZM12.53 18.47l-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06Zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5-1.06-1.06Zm-3.602-.22c-1.25 0-1.726-1.633-.671-2.305l-.805-1.265c-2.321 1.477-1.275 5.07 1.476 5.07v-1.5Zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.321-1.477 1.275-5.07-1.476-5.07v1.5Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 17.5h.009M5.49 5.5h.01"
      />
    </svg>
  );
};
export default SvgRouting2;
