import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboardOpen = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20 16c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16v-5h12c1.886 0 2.828 0 3.414.586.336.336.48.789.54 1.47"
      />
      <path
        stroke="currentColor"
        
        d="M4.002 11c-.484-1.806-.726-2.709-.518-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.472-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.887 1.667c.13.265.22.602.4 1.275.06.225.091.337.098.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134L4.002 11Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m14.7 2.941-.637 5.348M8.422 4.624l-.638 5.347"
      />
    </svg>
  );
};
export default SvgClapperboardOpen;
