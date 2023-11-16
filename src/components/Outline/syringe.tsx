import * as React from "react";
import type { SVGProps } from "react";
const SvgSyringe = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.56 3.47a.75.75 0 0 1 1.061 0l2.91 2.909a.75.75 0 0 1-1.061 1.06l-.924-.924-1.122 1.121.864.864c.36.36.66.66.886.923.236.274.433.555.555.89.225.62.225 1.3 0 1.92-.122.335-.32.615-.555.89-.227.263-.526.563-.886.923l-.666.665-.001.002-2.18 2.18-.002.001-1.454 1.455a6.03 6.03 0 0 1-.136.131.82.82 0 0 1-.155.14 5.895 5.895 0 0 1-7.479.225L4.53 20.53a.75.75 0 0 1-1.06-1.06l1.685-1.685a5.894 5.894 0 0 1 .496-7.77l4.303-4.303c.36-.36.66-.66.923-.886.275-.235.555-.433.89-.555.62-.225 1.3-.225 1.92 0 .335.122.616.32.89.555.264.227.563.526.923.886l.864.864 1.12-1.121-.923-.925a.75.75 0 0 1 0-1.06Zm-2.1 3.323a17.692 17.692 0 0 0-.86-.829c-.21-.18-.332-.249-.426-.283a1.307 1.307 0 0 0-.894 0c-.094.034-.216.103-.425.283a17.6 17.6 0 0 0-.86.829l-.116.116 6.212 6.212.116-.116c.385-.385.644-.644.829-.86.18-.21.249-.331.283-.425a1.307 1.307 0 0 0 0-.894c-.034-.094-.103-.216-.283-.426a17.626 17.626 0 0 0-.829-.86L14.46 6.793Zm1.57 7.389L9.818 7.97l-3.106 3.106a4.393 4.393 0 0 0 5.418 6.842l-1.033-1.034a.75.75 0 0 1 1.06-1.06l1.116 1.115.575-.575-2.355-2.355a.75.75 0 0 1 1.061-1.061l2.355 2.355 1.121-1.121Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSyringe;
