import * as React from "react";
import type { SVGProps } from "react";
const SvgStars = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.453 2.713c.375-.95 1.72-.95 2.094 0l1.162 2.944c.114.29.344.52.634.634l2.944 1.162c.95.375.95 1.72 0 2.094l-2.944 1.162c-.29.114-.52.344-.634.634l-1.162 2.944c-.375.95-1.72.95-2.094 0L6.29 11.343a1.126 1.126 0 0 0-.634-.634L2.713 9.547c-.95-.375-.95-1.72 0-2.094L5.657 6.29c.29-.114.52-.344.634-.634l1.162-2.944Z"
      />
      <path
        fill="currentColor"
        d="M16.925 13.392a.619.619 0 0 1 1.15 0l.901 2.283c.063.16.19.286.349.349l2.283.9a.619.619 0 0 1 0 1.152l-2.283.9a.619.619 0 0 0-.349.349l-.9 2.283a.619.619 0 0 1-1.152 0l-.9-2.283a.619.619 0 0 0-.349-.349l-2.283-.9a.619.619 0 0 1 0-1.152l2.283-.9a.619.619 0 0 0 .349-.349l.9-2.283Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgStars;
