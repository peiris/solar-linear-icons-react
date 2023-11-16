import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglassLine = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.938 1.25h.124c2.014 0 3.603 0 4.76.153 1.139.15 2.161.48 2.646 1.423.07.136.13.277.177.422.331 1.01-.159 1.966-.857 2.87-.71.919-1.834 2.032-3.258 3.442L13.066 12l2.464 2.44c1.424 1.41 2.548 2.523 3.258 3.442.698.904 1.188 1.86.857 2.87a2.877 2.877 0 0 1-.177.422c-.485.943-1.507 1.273-2.645 1.423-1.158.153-2.747.153-4.76.153h-.125c-2.014 0-3.603 0-4.761-.153-1.138-.15-2.16-.48-2.646-1.423a2.878 2.878 0 0 1-.176-.422c-.331-1.01.159-1.966.857-2.87.71-.919 1.834-2.032 3.258-3.442L10.934 12 8.47 9.56C7.046 8.15 5.922 7.037 5.212 6.118c-.698-.904-1.188-1.86-.857-2.87.047-.145.107-.286.176-.422.486-.943 1.508-1.273 2.646-1.423 1.158-.153 2.747-.153 4.76-.153ZM12 10.945l2.43-2.407c1.478-1.463 2.53-2.507 3.17-3.337.662-.856.697-1.248.62-1.486a1.393 1.393 0 0 0-.085-.202c-.117-.227-.429-.481-1.508-.623-1.048-.138-2.537-.14-4.627-.14s-3.58.002-4.627.14c-1.08.142-1.391.396-1.508.623a1.381 1.381 0 0 0-.085.202c-.077.238-.042.63.62 1.486.64.83 1.692 1.874 3.17 3.337L12 10.944Zm0 2.11-2.43 2.407c-1.478 1.463-2.53 2.507-3.17 3.337-.662.856-.697 1.249-.62 1.486.023.07.051.137.085.202.117.227.429.481 1.508.623 1.048.138 2.537.14 4.627.14s3.58-.002 4.627-.14c1.08-.142 1.391-.396 1.508-.623.034-.065.062-.132.085-.202.077-.238.042-.63-.62-1.486-.64-.83-1.692-1.874-3.17-3.337L12 13.056ZM9.25 5.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 13a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHourglassLine;