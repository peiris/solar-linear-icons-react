import * as React from "react";
import type { SVGProps } from "react";
const SvgObjectScan = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75ZM2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75ZM9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153ZM18.29 2.89c-1.028-.138-2.383-.14-4.29-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.025 13.109C6.775 12.746 8.443 11.5 12 11.5c3.557 0 5.224 1.246 5.975 1.609l.012.006c.055.026.162.077.263.151.132.097.229.21.308.337.194.31.192.604.191.777V14.552c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.725 1.65-.456.456-1.022.642-1.65.726-.595.08-1.344.08-2.243.08H9.948c-.898 0-1.647 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.641-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.172c0-.174-.003-.468.192-.777.079-.126.176-.24.308-.337a1.647 1.647 0 0 1 .275-.157Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.295 4.83c-.595-.08-1.345-.08-2.243-.08H9.948c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.286c-.194.124-.359.24-.496.345a5.6 5.6 0 0 0-.497.426l-.01.01-.004.004-.001.002-.002.001a.923.923 0 0 0-.026 1.212.722.722 0 0 0 1.09.034l.008-.009.055-.05c.053-.048.14-.123.263-.216a7.037 7.037 0 0 1 1.172-.708C7.879 10.26 9.58 9.715 12 9.715c2.42 0 4.12.545 5.198 1.07.54.262.927.522 1.172.708a4.063 4.063 0 0 1 .318.266l.008.009a.722.722 0 0 0 1.09-.034.923.923 0 0 0-.026-1.212l-.047-.047a5.607 5.607 0 0 0-.467-.396 7.554 7.554 0 0 0-.496-.345v-.286c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726Z"
      />
    </svg>
  );
};
export default SvgObjectScan;
