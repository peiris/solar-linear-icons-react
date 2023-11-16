import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartHomeAngle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183.54 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M2 12.25a.75.75 0 0 1 .75-.75c5.385 0 9.75 4.365 9.75 9.75a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 2.75 13a.75.75 0 0 1-.75-.75Z"
      />
      <path
        fill="currentColor"
        d="M2 15.25a.75.75 0 0 1 .75-.75 6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8 18.35 5.65 16 2.75 16a.75.75 0 0 1-.75-.75Z"
      />
      <path
        fill="currentColor"
        d="M2.75 17.5a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 5 21.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
      />
    </svg>
  );
};
export default SvgSmartHomeAngle;
