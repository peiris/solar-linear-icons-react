import * as React from "react";
import type { SVGProps } from "react";
const SvgDropper2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 10h-3"
      />
      <path
        stroke="currentColor"
        
        d="M18 12.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 13h-2M16 21v1M10 10c0-1.886 0-2.828.586-3.414C11.172 6 12.114 6 14 6h4c1.886 0 2.828 0 3.414.586C22 7.172 22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.334 2.334 0 0 1 10 16.507V14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2 22v-2M18.5 2l-.523.523A2.993 2.993 0 0 1 16 3.436M16 2v1.436m0 0V6m0-2.564a2.994 2.994 0 0 1-2.07-.66l-.078-.066-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8"
      />
    </svg>
  );
};
export default SvgDropper2;
