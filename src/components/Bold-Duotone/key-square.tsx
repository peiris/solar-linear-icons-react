import * as React from "react";
import type { SVGProps } from "react";
const SvgKeySquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 9.776a3.784 3.784 0 0 1-3.792 3.776c-.382 0-1.252-.088-1.675-.439l-.529.527c-.311.31-.227.401-.089.551.058.063.125.136.177.24 0 0 .441.614 0 1.229-.264.351-1.005.843-1.851 0l-.177.175s.53.615.088 1.23c-.264.351-.97.702-1.587.088l-.617.614c-.423.422-.94.176-1.146 0l-.53-.527c-.493-.491-.205-1.024 0-1.229l4.586-4.566s-.441-.703-.441-1.669A3.784 3.784 0 0 1 14.208 6 3.784 3.784 0 0 1 18 9.776Zm-3.792 1.317c.73 0 1.323-.59 1.323-1.317a1.32 1.32 0 0 0-1.323-1.317c-.73 0-1.322.59-1.322 1.317a1.32 1.32 0 0 0 1.322 1.317Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgKeySquare;
