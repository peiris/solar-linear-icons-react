import * as React from "react";
import type { SVGProps } from "react";
const SvgPip = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13 17c0-1.886 0-2.828.586-3.414C14.172 13 15.114 13 17 13h1c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586C13 19.828 13 18.886 13 17Z"
      />
      <path
        fill="currentColor"
        d="M14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-2c0-2.828 0-4.243.879-5.121.878-.879 2.293-.879 5.121-.879H20c.949 0 1.423 0 1.717-.297.293-.298.287-.766.275-1.703-.034-2.634-.215-4.38-1.164-5.328C19.657 3 17.771 3 14 3Z"
      />
    </svg>
  );
};
export default SvgPip;
