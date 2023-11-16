import * as React from "react";
import type { SVGProps } from "react";
const SvgDelivery = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.506 15.265a.75.75 0 0 0 1.446-.4l-1.446.4Zm-1.43-7.99.724-.2-.723.2ZM4.705 5.92l-.2.723.2-.723ZM3.2 4.725a.75.75 0 1 0-.402 1.445l.402-1.445Zm16.988 11a.75.75 0 1 0-.378-1.451l.378 1.451Zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467l-1.446.4Zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57l-.377-1.451Zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616L7.08 14.59c-1.977.513-3.186 2.502-2.643 4.467l1.446-.4Zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57l.377 1.451Zm1.494-1.175L6.8 7.075l-1.446.4 2.152 7.79 1.446-.4ZM4.904 5.197l-1.703-.472-.402 1.445 1.704.473.401-1.446ZM6.8 7.075a2.707 2.707 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831l1.446-.4Zm4.31 11.01 9.079-2.36-.378-1.451-9.079 2.36.377 1.451Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.565 8.73c-.485-1.755-.727-2.633-.315-3.324.411-.692 1.316-.927 3.126-1.398l1.92-.498c1.81-.47 2.715-.706 3.428-.307.713.4.956 1.277 1.44 3.033l.515 1.862c.485 1.755.728 2.633.316 3.325-.412.691-1.317.927-3.127 1.397l-1.92.499c-1.81.47-2.715.705-3.428.306-.713-.4-.955-1.277-1.44-3.032L9.565 8.73Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgDelivery;
