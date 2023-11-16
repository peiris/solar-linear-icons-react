import * as React from "react";
import type { SVGProps } from "react";
const SvgStation = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.466 2.53a.75.75 0 1 0-1.06-1.06A10.719 10.719 0 0 0 1.25 9.077a10.72 10.72 0 0 0 3.225 7.677.75.75 0 0 0 1.05-1.071A9.22 9.22 0 0 1 2.75 9.078a9.219 9.219 0 0 1 2.716-6.547ZM19.677 1.553a.75.75 0 1 0-1.071 1.05 9.218 9.218 0 0 1 2.644 6.475 9.219 9.219 0 0 1-2.703 6.534.75.75 0 0 0 1.062 1.06 10.718 10.718 0 0 0 3.141-7.594c0-2.93-1.173-5.587-3.073-7.525Z"
      />
      <path
        fill="currentColor"
        d="M8.274 5.626A.75.75 0 1 0 7.25 4.53C6.021 5.679 5.25 7.28 5.25 9.06c0 1.8.79 3.418 2.042 4.57a.75.75 0 0 0 1.016-1.105c-.97-.89-1.558-2.118-1.558-3.466 0-1.332.575-2.546 1.524-3.434ZM16.803 4.58a.75.75 0 0 0-1.037 1.084c.925.885 1.484 2.083 1.484 3.396 0 1.329-.572 2.54-1.517 3.428a.75.75 0 0 0 1.027 1.093c1.223-1.148 1.99-2.746 1.99-4.52 0-1.754-.75-3.336-1.947-4.48Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.424 11.431a2.75 2.75 0 1 0-2.848 0l-3.29 10.342a.75.75 0 0 0 1.287.712L12 18.434l3.428 4.05a.75.75 0 0 0 1.287-.711l-3.29-10.342ZM12 7.828a1.25 1.25 0 0 0-.427 2.425.751.751 0 0 1 .226.059 1.259 1.259 0 0 0 .402 0 .76.76 0 0 1 .226-.059A1.25 1.25 0 0 0 12 7.828Zm2.147 10.82-1.165-1.375.528-.624.637 2Zm-1.22-3.633a.78.78 0 0 1 .048-.05L12 11.902l-.975 3.063a.78.78 0 0 1 .047.05L12 16.113l.928-1.096Zm-1.91 2.258-.527-.624-.637 2 1.165-1.376Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStation;
