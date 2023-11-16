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
        d="M7.292 4.786A5.966 5.966 0 0 0 3 10.416l-.001.18v2.323c.102 0 .206.02.305.064a21.543 21.543 0 0 0 17.39 0A.751.751 0 0 1 21 12.92v-2.503a5.966 5.966 0 0 0-4.291-5.63c-.278-.091-1.12-.254-1.506-.324-2.12-.36-4.286-.36-6.406 0-.405.076-1.272.248-1.506.324ZM10 11.926a.747.747 0 0 0-.75.745c0 .411.336.745.75.745h4c.414 0 .75-.334.75-.745a.747.747 0 0 0-.75-.745h-4Z"
        clipRule="evenodd"
      />
      <path
        fill="#1C274D"
        d="M8.873 3.992A2.25 2.25 0 0 1 11 2.49h2c.983 0 1.82.626 2.126 1.502.045.13.068.28.077.47.386.07 1.227.233 1.505.324v-.061c0-.339-.011-.782-.165-1.222A3.75 3.75 0 0 0 13 1h-2a3.75 3.75 0 0 0-3.544 2.503c-.153.44-.165.883-.165 1.222v.06c.233-.075 1.1-.247 1.505-.323.01-.19.032-.34.077-.47ZM21 14.477c-.9.382-1.819.704-2.75.966v1.2a.748.748 0 0 1-.75.746.748.748 0 0 1-.75-.745v-.832A23.055 23.055 0 0 1 3 14.477v1.546a4.495 4.495 0 0 0 3.539 4.381c3.597.794 7.325.794 10.923 0A4.495 4.495 0 0 0 21 16.023v-1.546Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgBackpack;
