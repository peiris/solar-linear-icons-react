import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkSquareMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.464C22 19.07 22 16.714 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.536Z"
        opacity={0.5}
      />
      <path
        fill="#1C274D"
        d="M7.765 9.898a21.482 21.482 0 0 1-.015-1.09v-6.74C8.906 2 10.3 2 12 2c1.7 0 3.094 0 4.25.069v6.739c0 .496 0 .836-.015 1.09-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18-.21-.143-.479-.35-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358Z"
      />
    </svg>
  );
};
export default SvgBookmarkSquareMinimalistic;
