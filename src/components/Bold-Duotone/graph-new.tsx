import * as React from "react";
import type { SVGProps } from "react";
const SvgGraphNew = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.764.764 0 0 1-.163.122l-.011.005-.008-.004-.003-.001a.764.764 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1-.301-.272-.68-.514-1.18-.514-.5 0-.878.242-1.18.514-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 0 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.769.769 0 0 1 .163-.122l.007-.003.004-.001c.003 0 .006.002.011.004a.768.768 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1 .301.272.68.514 1.18.514.5 0 .878-.242 1.18-.514.276-.25.572-.605.9-1l1.83-2.194ZM22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};
export default SvgGraphNew;
