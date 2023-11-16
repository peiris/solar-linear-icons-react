import * as React from "react";
import type { SVGProps } from "react";
const SvgBackpack = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M7.292 4.786v-.061c0-.339.011-.782.165-1.222A3.75 3.75 0 0 1 11 1h2a3.75 3.75 0 0 1 3.544 2.503c.153.44.165.883.165 1.222v.06a5.966 5.966 0 0 1 4.29 5.631l.001.18v2.323a.753.753 0 0 0-.304.064 21.543 21.543 0 0 1-17.391 0A.751.751 0 0 0 3 12.92v-2.503a5.966 5.966 0 0 1 4.291-5.63Zm1.582-.794A2.25 2.25 0 0 1 11 2.49h2c.983 0 1.82.626 2.126 1.502.046.13.068.28.077.47-2.12-.36-4.286-.36-6.406 0 .009-.19.031-.34.077-.47Zm.376 8.679c0-.412.336-.745.75-.745h4c.414 0 .75.333.75.745a.747.747 0 0 1-.75.745h-4a.747.747 0 0 1-.75-.745Z"
        clipRule="evenodd"
      />
      <path
        fill="#1C274D"
        d="M21 14.477c-.9.382-1.819.704-2.75.966v1.201a.747.747 0 0 1-.75.745.747.747 0 0 1-.75-.745v-.832A23.055 23.055 0 0 1 3 14.477v1.546a4.495 4.495 0 0 0 3.539 4.381c3.597.794 7.325.794 10.923 0A4.495 4.495 0 0 0 21 16.025v-1.547Z"
      />
    </svg>
  );
};
export default SvgBackpack;
