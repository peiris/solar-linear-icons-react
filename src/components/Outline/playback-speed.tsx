import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaybackSpeed = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.622-.092-2.392-.267a.75.75 0 1 1 .332-1.463 9.25 9.25 0 1 0 0-18.04.75.75 0 1 1-.332-1.463c.77-.175 1.57-.267 2.392-.267ZM3.132 16.686a.75.75 0 0 1 1.034.235 9.302 9.302 0 0 0 2.913 2.913.75.75 0 0 1-.8 1.27 10.804 10.804 0 0 1-3.382-3.383.75.75 0 0 1 .235-1.035ZM2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392 0 .822.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.283 9.283 0 0 1 2.75 12c0-.709.08-1.398.23-2.06ZM7.314 3.132a.75.75 0 0 1-.235 1.034A9.303 9.303 0 0 0 4.166 7.08a.75.75 0 0 1-1.27-.8A10.803 10.803 0 0 1 6.28 2.897a.75.75 0 0 1 1.035.235Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 9.213c0-1.423 1.496-2.49 2.825-1.705l4.72 2.787c1.273.752 1.273 2.658 0 3.41l-4.72 2.786c-1.329.785-2.825-.282-2.825-1.705V9.213Zm1.71-.408a.467.467 0 0 0-.21.408v5.573c0 .199.096.338.21.409.11.068.232.076.352.005l4.72-2.787A.465.465 0 0 0 15.25 12a.465.465 0 0 0-.218-.414L10.312 8.8a.323.323 0 0 0-.353.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPlaybackSpeed;
