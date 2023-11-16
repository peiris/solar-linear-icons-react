import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareForward = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="m16.155 3.434 2.357 2.043c1.623 1.406 2.434 2.11 2.434 3.023 0 .913-.811 1.616-2.434 3.023l-2.357 2.043c-.714.618-1.07.927-1.363.794-.292-.134-.292-.606-.292-1.55v-1.524c-3 0-6.25 1.393-7.5 3.714 0-7.429 4.444-9.286 7.5-9.286V4.19c0-.944 0-1.416.292-1.55.293-.133.65.176 1.363.794Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 22c-4.714 0-7.071 0-8.536-1.465M12 22c4.714 0 7.071 0 8.535-1.465M12 22h.86m-9.396-1.465C2 19.072 2 16.714 2 12v.054m1.464 8.481c-.636-.636-.996-1.441-1.2-2.535C2.003 16.587 2 14.691 2 12.054M22 12c0 4.714 0 7.071-1.465 8.535m0 0c-1.372 1.373-3.529 1.46-7.675 1.465m7.676-1.465c1.24-1.24 1.43-3.122 1.459-6.536M12 2C7.286 2 4.929 2 3.464 3.464m0 0c-.973.974-1.3 2.343-1.409 4.536m1.41-4.536c1.24-1.24 3.122-1.43 6.535-1.459m-8 9.992v.057M12.86 22c4.15-.006 6.307-.092 7.68-1.465 1.242-1.241 1.431-3.123 1.46-6.537M10.002 2c-3.414.029-5.296.218-6.537 1.46"
      />
    </svg>
  );
};
export default SvgSquareForward;
