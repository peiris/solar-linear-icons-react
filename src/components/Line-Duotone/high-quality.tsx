import * as React from "react";
import type { SVGProps } from "react";
const SvgHighQuality = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6 8v7.619M10.815 8v7.619M6 12h4.815M19 16l-1.926-1.524m-.963 1.143c-.447 0-.671 0-.857-.03-.764-.12-1.361-.592-1.513-1.197-.037-.147-.037-.324-.037-.678v-3.81c0-.353 0-.53.037-.677.152-.605.749-1.077 1.513-1.198C15.44 8 15.664 8 16.11 8c.448 0 .671 0 .857.03.764.12 1.361.592 1.514 1.197.037.147.037.324.037.678v3.81c0 .353 0 .53-.037.678-.152.604-.75 1.076-1.514 1.197-.186.029-.41.029-.857.029Z"
      />
    </svg>
  );
};
export default SvgHighQuality;
