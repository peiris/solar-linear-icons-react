import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudWaterdrops = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M14.381 8.027a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.343-1.444 4.353-3.5 5.207"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645ZM16 20.334c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645ZM13.5 15.334c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Z"
      />
    </svg>
  );
};
export default SvgCloudWaterdrops;
