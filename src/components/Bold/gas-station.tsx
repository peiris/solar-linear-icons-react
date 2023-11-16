import * as React from "react";
import type { SVGProps } from "react";
const SvgGasStation = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.75 2h1c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v8.25h1.571c1.204 0 2.179.975 2.179 2.179v.071a.75.75 0 0 0 1.5 0v-4.75l-1.224-.408a1.5 1.5 0 0 1-1.026-1.423V9.5a1.5 1.5 0 0 1 1.5-1.5H21v-.378c0-.185 0-.248-.003-.306a2.25 2.25 0 0 0-.745-1.55 6.034 6.034 0 0 0-.237-.194l-1.233-.986a.75.75 0 1 1 .936-1.172l1.25 1c.122.098.206.165.285.236a3.75 3.75 0 0 1 1.241 2.582c.006.105.006.213.006.37V18.5a2.25 2.25 0 1 1-4.5 0v-.071a.679.679 0 0 0-.679-.679H15.75v3.5h1.123a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h1V8c0-2.828 0-4.243.879-5.121C4.507 2 5.922 2 8.75 2ZM7 16.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H7ZM11 6H8c-.943 0-1.414 0-1.707.293C6 6.586 6 7.057 6 8c0 .943 0 1.414.293 1.707C6.586 10 7.057 10 8 10h3c.943 0 1.414 0 1.707-.293C13 9.414 13 8.943 13 8c0-.943 0-1.414-.293-1.707C12.414 6 11.943 6 11 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGasStation;
