import * as React from "react";
import type { SVGProps } from "react";
const SvgQuitPip = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.996 21h-4l-1.115-.001c-3.04-.012-4.663-.12-5.713-1.17a2.481 2.481 0 0 1-.19-.214c-.843-1.021-.96-2.558-.975-5.235A20.78 20.78 0 0 1 2 13.887V11c0-3.771 0-5.657 1.17-6.828C4.344 3 6.23 3 10.002 3h4c3.77 0 5.656 0 6.828 1.172.067.067.13.138.19.213.842 1.021.959 2.558.975 5.235.002.182.003.346.002.493V13c0 3.771 0 5.657-1.171 6.828C19.653 21 17.767 21 13.996 21Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M13 17c0-1.886 0-2.828.586-3.414C14.172 13 15.114 13 17 13h1c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586C13 19.828 13 18.886 13 17ZM10.97 12.03a.75.75 0 1 0 1.06-1.06L9.31 8.25h1.19a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V9.31l2.72 2.72Z"
      />
    </svg>
  );
};
export default SvgQuitPip;
