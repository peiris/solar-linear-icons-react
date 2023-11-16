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
        d="m14.91 2.774 1.833 1.301c.54.384 1.012.719 1.341 1.034.351.335.666.764.666 1.35 0 .584-.315 1.013-.666 1.349-.33.315-.801.65-1.341 1.033L12.295 12l4.448 3.158c.54.383 1.012.718 1.341 1.034.351.335.666.764.666 1.349s-.315 1.014-.666 1.35c-.33.314-.801.65-1.341 1.033l-1.833 1.302c-.73.518-1.345.955-1.856 1.216-.52.265-1.156.465-1.79.14-.638-.326-.845-.96-.93-1.536-.084-.566-.084-1.319-.084-2.21V13.44l-3.82 2.674a.75.75 0 1 1-.86-1.229L9.692 12 5.57 9.114a.75.75 0 1 1 .86-1.229l3.82 2.674V5.163c0-.891 0-1.644.084-2.21.085-.576.292-1.21.93-1.535.634-.325 1.27-.126 1.79.14.51.26 1.126.698 1.856 1.216Zm-3.16 10.678v5.323c0 .969.002 1.609.068 2.051.031.214.071.327.1.383.014.024.022.033.023.034l.005.003a.019.019 0 0 0 .007.003c.002 0 .015.002.044-.002.064-.009.181-.043.375-.142.4-.204.926-.575 1.72-1.138l1.737-1.234c.599-.425.978-.697 1.218-.927a1 1 0 0 0 .187-.22c.016-.029.016-.039.016-.044v-.002c0-.006 0-.016-.016-.044a.998.998 0 0 0-.187-.22c-.24-.23-.62-.502-1.218-.927l-4.079-2.897Zm0-2.905V5.224c0-.969.002-1.609.068-2.05.031-.215.071-.327.1-.384a.153.153 0 0 1 .023-.034l.005-.003.007-.003a.16.16 0 0 1 .044.002c.064.01.181.043.375.142.4.204.926.575 1.72 1.138l1.737 1.234c.599.425.978.697 1.218.927a1 1 0 0 1 .187.22c.016.029.016.039.016.044v.002c0 .006 0 .016-.016.045a1 1 0 0 1-.187.22c-.24.23-.62.501-1.218.926l-4.079 2.897Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBluetooth;
