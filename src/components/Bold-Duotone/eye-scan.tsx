import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeScan = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.5}>
        <path d="M14 2.75c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.487.487.7.865.817 1.538.132.759.135 1.84.135 3.76a.75.75 0 0 0 1.5 0v-.096c0-1.8 0-3.018-.158-3.922-.175-1.005-.549-1.656-1.233-2.34-.749-.75-1.698-1.081-2.87-1.239-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5ZM2 14.25a.75.75 0 0 1 .75.75c0 1.92.003 3.001.135 3.76.118.673.33 1.051.817 1.538.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.684-.685-1.058-1.336-1.233-2.341-.158-.904-.158-2.123-.158-3.922V15a.75.75 0 0 1 .75-.75ZM22 14.25a.75.75 0 0 1 .75.75v.096c0 1.8 0 3.018-.158 3.922-.175 1.005-.549 1.656-1.233 2.34-.749.75-1.698 1.081-2.87 1.239-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.487-.487.7-.865.817-1.538.132-.759.135-1.84.135-3.76a.75.75 0 0 1 .75-.75ZM9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.487.487-.7.865-.817 1.538-.132.759-.135 1.84-.135 3.76a.75.75 0 1 1-1.5 0v-.096c0-1.8 0-3.018.158-3.922.175-1.005.549-1.656 1.233-2.34.749-.75 1.698-1.081 2.87-1.239 1.14-.153 2.595-.153 4.433-.153Z" />
      </g>
      <path
        fill="currentColor"
        d="M12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.892 14.06C5.297 13.37 5 13.025 5 12c0-1.025.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7c2.927 0 4.92 1.562 6.108 2.94.595.69.892 1.035.892 2.06 0 1.025-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17c-2.927 0-4.92-1.562-6.108-2.94ZM9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEyeScan;
