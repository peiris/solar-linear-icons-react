import * as React from "react";
import type { SVGProps } from "react";
const SvgBoltCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="m11.227 8.569-2.015 1.605c-.845.673-1.268 1.01-1.185 1.385l.004.019c.094.373.63.517 1.702.804.595.16.893.24 1.033.465l.007.012c.135.229.058.515-.095 1.087l-.04.15c-.426 1.586-.638 2.379-.229 2.635.41.256 1.06-.262 2.363-1.3l2.015-1.604c.846-.674 1.268-1.01 1.186-1.386l-.004-.019c-.095-.373-.63-.517-1.702-.804-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.228-.058-.514.095-1.086l.04-.15c.425-1.586.638-2.38.229-2.636-.41-.256-1.061.263-2.364 1.3Z"
      />
    </svg>
  );
};
export default SvgBoltCircle;
