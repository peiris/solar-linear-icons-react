import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkOpened = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.668 0-1.29-.004-1.867-.002-.279-.003-.418-.057-.641a1.462 1.462 0 0 0-.152-.421 4.25 4.25 0 0 0-1.857-1.858c-.412-.21-.92-.333-1.707-.397-.15-.013-.307-.023-.473-.03l-1.5-.034v4.056c0 .496 0 .836-.015 1.09-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18-.21-.143-.479-.35-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358a21.485 21.485 0 0 1-.015-1.09V6.752l-1.5.033c-.166.008-.323.018-.473.03-.787.065-1.295.189-1.706.398A4.25 4.25 0 0 0 2.204 9.09c-.06.12-.09.18-.143.402-.054.222-.055.362-.057.641C2 10.711 2 11.332 2 12c0 4.714 0 7.071 1.464 8.535Z"
        clipRule="evenodd"
        opacity={0.6}
      />
      <path
        fill="#1C274D"
        d="M7.75 6.752v4.056c0 .496 0 .836.015 1.09.015.262.043.343.05.358a.75.75 0 0 0 .862.425c.016-.004.097-.032.314-.18.21-.143.48-.35.873-.653l.067-.052c.37-.285.659-.507.973-.644a2.75 2.75 0 0 1 2.192 0c.314.137.603.36.973.645l.067.051c.393.303.663.51.873.653.217.148.298.176.314.18a.75.75 0 0 0 .862-.425c.007-.015.035-.096.05-.358.015-.254.015-.594.015-1.09V6.752h-8.5Z"
      />
      <g fill="#1C274D" opacity={0.4}>
        <path d="M20.535 3.464C19.071 2 16.714 2 12 2S4.928 2 3.464 3.464c-.77.77-1.134 1.785-1.308 3.26l-.119 2.878c.007-.035.014-.071.024-.11.053-.223.083-.283.143-.402l.01-.02A4.25 4.25 0 0 1 4.07 7.214c.411-.21.919-.333 1.706-.397.15-.012.307-.022.473-.03l1.5-.034V10.5h8.5V6.752l1.5.033c.166.009.323.019.473.03.787.065 1.295.189 1.707.398a4.25 4.25 0 0 1 1.857 1.858l.01.019.046.096V6.723c-.174-1.474-.539-2.49-1.308-3.259ZM2.002 10.5v-.056L2 10.5h.002Z" />
      </g>
    </svg>
  );
};
export default SvgBookmarkOpened;
