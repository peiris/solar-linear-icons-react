import * as React from "react";
import type { SVGProps } from "react";
const SvgAdhesivePlaster = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M3.213 9.071a4.142 4.142 0 0 1 5.858-5.858L20.787 14.93a4.142 4.142 0 0 1-5.858 5.858L3.213 9.07Z" />
      <path d="m12 17.858-2.929 2.929a4.142 4.142 0 0 1-5.858-5.858L6.143 12 12 17.858ZM12 6.142l2.929-2.929a4.142 4.142 0 0 1 5.858 5.858L17.857 12 12 6.142ZM15.841 12.871a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.114ZM12.129 9.159a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114ZM16.77 15.656a.787.787 0 1 1-1.114 1.114.787.787 0 0 1 1.114-1.114ZM9.345 8.23A.788.788 0 1 0 8.23 9.346.788.788 0 0 0 9.345 8.23ZM13.057 11.943a.787.787 0 1 1-1.113 1.114.787.787 0 0 1 1.113-1.114ZM13.985 14.728a.788.788 0 1 1-1.114 1.113.788.788 0 0 1 1.114-1.113ZM10.273 11.015a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114Z" />
    </svg>
  );
};
export default SvgAdhesivePlaster;