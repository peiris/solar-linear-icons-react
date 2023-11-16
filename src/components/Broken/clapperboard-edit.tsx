import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboardEdit = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M10 21.995c-3.413-.03-5.295-.219-6.536-1.46C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
      <path
        fill="currentColor"
        d="M2.5 7.25a.75.75 0 0 0 0 1.5v-1.5Zm19.5 0H2.5v1.5H22v-1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10.5 2.5 7 8M17 2.5 13.5 8"
      />
      <path
        stroke="currentColor"
        
        d="m18.562 13.935.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669c.782.782 1.669.834 1.669.834m-2.503-2.503-3.835 3.835c-.26.26-.39.39-.5.533a2.948 2.948 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116-.12.36m7.92-4.572-3.835 3.835c-.26.26-.39.39-.533.5a2.948 2.948 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372-.36.12m0 0-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844-.844-.844"
      />
    </svg>
  );
};
export default SvgClapperboardEdit;
