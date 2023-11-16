import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeClosed = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M2.919 6.605a1 1 0 0 0-1.838.79l.002.003.003.007.01.021.032.072a13.457 13.457 0 0 0 .591 1.107c.409.687 1.026 1.6 1.871 2.52l-.797.797a1 1 0 1 0 1.414 1.414l.84-.84c.565.455 1.197.885 1.897 1.256l-.782 1.202a1 1 0 0 0 1.676 1.091l.985-1.514c.677.208 1.402.355 2.177.425V16.5a1 1 0 0 0 1 1V13c-2.748 0-4.819-1.199-6.304-2.59a13.388 13.388 0 0 1-2.259-2.829 11.464 11.464 0 0 1-.514-.967l-.004-.01Zm-1.838.79L2 7c-.92.394-.919.395-.919.395Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.22 12.398A8.713 8.713 0 0 1 12 13v4.5a1 1 0 0 0 1-1v-1.544c.772-.07 1.497-.217 2.176-.425l.986 1.515a1 1 0 0 0 1.676-1.091l-.782-1.203c.701-.37 1.332-.8 1.897-1.256l.84.84a1 1 0 1 0 1.414-1.414l-.797-.798a15.369 15.369 0 0 0 2.302-3.296 9.858 9.858 0 0 0 .19-.395l.011-.026.004-.008.002-.005a1 1 0 1 0-1.838-.788l-.005.011a5.117 5.117 0 0 1-.146.302 13.053 13.053 0 0 1-2.614 3.48c-.841.79-1.87 1.517-3.095 2Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgEyeClosed;
