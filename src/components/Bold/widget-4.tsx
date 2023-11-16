import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget4 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 6.21c0-1.984 0-2.977.659-3.593C3.318 2 4.379 2 6.5 2c2.121 0 3.182 0 3.841.617C11 3.233 11 4.226 11 6.21V17.79c0 1.984 0 2.977-.659 3.593C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.617C2 20.767 2 19.774 2 17.79V6.21ZM13 15.4c0-2.074 0-3.111.659-3.756C14.318 11 15.379 11 17.5 11c2.121 0 3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756-.659.644-1.72.644-3.841.644-2.121 0-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6v-2.2ZM13 5.5c0-1.087 0-1.63.171-2.06a2.293 2.293 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178.551.236.99.69 1.218 1.262.171.43.171.973.171 2.06 0 1.087 0 1.63-.171 2.06a2.293 2.293 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.293 2.293 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5Z"
      />
    </svg>
  );
};
export default SvgWidget4;