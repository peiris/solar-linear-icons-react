import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetooth = (props: SVGProps<SVGSVGElement>) => {
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
        d="m12.302 12.004 4.44 3.154c.54.383 1.013.718 1.342 1.034.351.335.666.764.666 1.349s-.315 1.014-.666 1.35c-.33.314-.801.65-1.341 1.033l-1.833 1.302c-.73.518-1.346.955-1.857 1.216-.52.265-1.155.465-1.79.14-.637-.326-.844-.96-.93-1.536-.083-.566-.083-1.319-.083-2.21V5.164c0-.891 0-1.644.084-2.21.085-.576.292-1.21.929-1.535.635-.325 1.27-.126 1.79.14.511.26 1.127.698 1.857 1.216l1.833 1.301c.54.384 1.012.719 1.341 1.034.351.335.666.764.666 1.35 0 .584-.315 1.013-.666 1.349-.33.315-.801.65-1.341 1.033L12.3 11.995l.007.005-.006.004Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.25 10.56 6.43 7.886a.75.75 0 1 0-.86 1.228L9.692 12 5.57 14.886a.75.75 0 0 0 .86 1.229l3.82-2.674v-2.882Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgBluetooth;
