import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareAcademicCap2 = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="#1C274D"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3.092 6.637 9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0L5 11.258"
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42.33-.501.919-.753 2.094-1.257L6 8"
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5m14 0v5.125c0 1.008-.503 1.952-1.385 2.44-.53.294-1.176.628-1.87.935"
      />
    </svg>
  );
};
export default SvgSquareAcademicCap2;