import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="m11.414 17.256-.004.001h.004ZM11.797 17.447a.032.032 0 0 1 .001.004l-.001-.004ZM11.797 6.553l.001-.004v.001l-.001.003Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.21 5.464c.277.15.6.394.945.653l1.53 1.152c.237.177.475.357.648.53.194.196.417.495.417.918 0 .424-.223.722-.417.918-.173.174-.411.353-.648.531L12.248 12l2.437 1.834c.237.177.475.356.648.53.194.196.417.495.417.918 0 .424-.223.722-.417.918-.173.174-.411.353-.648.53l-1.53 1.152c-.345.26-.668.503-.945.654-.283.154-.75.342-1.245.094-.493-.247-.623-.733-.67-1.052-.045-.313-.045-.718-.045-1.15V13.6l-1.77 1.475a.75.75 0 1 1-.96-1.152L9.828 12 7.52 10.076a.75.75 0 1 1 .96-1.152l1.77 1.475V7.572c0-.433 0-.838.046-1.15.046-.32.176-.805.67-1.053.494-.248.96-.06 1.244.095Zm-.46 10.912v-2.874l2 1.504c.135.102.243.184.333.255l.026.021-.026.02c-.09.073-.198.154-.334.256l-1.454 1.094c-.227.171-.4.3-.539.397-.005-.17-.006-.387-.006-.673Zm-.336.88-.004.001h.004Zm.383.19a.032.032 0 0 1 .001.005l-.001-.004Zm-.047-9.823v2.874l2-1.504c.135-.102.243-.183.333-.255l.026-.02-.026-.021a16.67 16.67 0 0 0-.334-.256l-1.454-1.094c-.227-.17-.4-.3-.539-.397-.005.17-.006.387-.006.673Zm.047-1.07.001-.004v.001l-.001.003Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBluetoothCircle;
