import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderOpen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 11.5V9m16 2.5V9.348c0-1.974 0-2.961-.616-3.603a2.318 2.318 0 0 0-.18-.168C18.52 5 17.469 5 15.363 5h-.3c-.922 0-1.384 0-1.814-.115a3.322 3.322 0 0 1-.678-.263c-.391-.204-.717-.51-1.37-1.122l-.44-.413a6.7 6.7 0 0 0-.443-.397 3.316 3.316 0 0 0-1.745-.677C8.424 2 8.27 2 7.96 2c-.706 0-1.06 0-1.353.052C5.312 2.281 4.3 3.23 4.055 4.444c-.03.153-.044.322-.05.556C4 5.188 4 5.417 4 5.712M10 17h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 11H8.705c-2.667 0-4 0-4.826.763a2.98 2.98 0 0 0-.54.67c-.578.977-.34 2.335.138 5.05.343 1.956.515 2.934 1.11 3.582.154.169.327.318.515.445.723.49 1.683.49 3.603.49h6.59c1.92 0 2.88 0 3.603-.49.188-.127.36-.276.515-.445.595-.648.767-1.626 1.11-3.581.477-2.716.716-4.074.138-5.051a2.978 2.978 0 0 0-.54-.67C19.296 11 17.962 11 15.295 11H14"
      />
    </svg>
  );
};
export default SvgFolderOpen;
