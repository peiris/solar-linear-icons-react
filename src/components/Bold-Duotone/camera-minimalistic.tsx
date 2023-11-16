import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.722a4.371 4.371 0 0 0 1.226-1.183C22 18.015 22 16.51 22 13.5s0-4.514-.75-5.595a4.368 4.368 0 0 0-1.225-1.183C18.904 6 17.343 6 14.222 6H9.778c-3.121 0-4.682 0-5.803.722A4.369 4.369 0 0 0 2.75 7.905C2 8.985 2 10.49 2 13.498v.002c0 3.01 0 4.514.749 5.595.324.468.74.87 1.226 1.183C5.096 21 6.657 21 9.778 21Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 4c0-.552.413-1 .923-1h6.154c.51 0 .923.448.923 1s-.413 1-.923 1H8.923C8.413 5 8 4.552 8 4Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M17.278 10.286c0-.444.373-.804.833-.804h.556c.46 0 .833.36.833.804 0 .444-.373.804-.833.804h-.556c-.46 0-.833-.36-.833-.804Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.834 13.5c0-2.219 1.865-4.018 4.166-4.018s4.167 1.8 4.167 4.018c0 2.22-1.866 4.018-4.167 4.018-2.301 0-4.166-1.799-4.166-4.018Zm1.666 0c0-1.331 1.12-2.41 2.5-2.41s2.5 1.079 2.5 2.41c0 1.332-1.12 2.411-2.5 2.411s-2.5-1.08-2.5-2.41ZM18.111 9.482c-.46 0-.833.36-.833.804 0 .444.373.804.833.804h.556c.46 0 .833-.36.833-.804 0-.444-.373-.804-.833-.804h-.556Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCameraMinimalistic;
