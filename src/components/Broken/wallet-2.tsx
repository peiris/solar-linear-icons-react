import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet2 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={18} cy={12} r={1} fill="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 10.5c0-.077 0-.533-.002-.565-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032 0-.488 0-.565M13 4c3.771 0 5.657 0 6.828 1.172.809.808 1.06 1.956 1.137 3.828M10 20h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828M9 4c-3.114.01-4.765.108-5.828 1.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828.653.654 1.528.943 2.828 1.07M7 9v1m0 5v-2.5"
      />
    </svg>
  );
};
export default SvgWallet2;
