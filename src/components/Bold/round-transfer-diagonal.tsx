import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundTransferDiagonal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22C6.477 22 2 17.523 2 12a9.98 9.98 0 0 1 3.676-7.747l7.652 8.257a.75.75 0 0 0 1.3-.51V7.5a.75.75 0 0 0-1.5 0v2.588l-6.21-6.702A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10a9.98 9.98 0 0 1-3.68 7.75l-7.9-8.268A.75.75 0 0 0 9.129 12v4.5a.75.75 0 0 0 1.5 0v-2.63l6.447 6.748A9.954 9.954 0 0 1 12 22Z"
      />
    </svg>
  );
};
export default SvgRoundTransferDiagonal;
