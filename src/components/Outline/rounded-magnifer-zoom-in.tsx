import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundedMagniferZoomIn = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11 2.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM1.25 11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S1.25 16.385 1.25 11ZM11 8.25a.75.75 0 0 1 .75.75v1.25H13a.75.75 0 0 1 0 1.5h-1.25V13a.75.75 0 0 1-1.5 0v-1.25H9a.75.75 0 0 1 0-1.5h1.25V9a.75.75 0 0 1 .75-.75Zm9.158 11.501a.38.38 0 0 0-.407.407c0 .001.004.027.024.1.022.084.056.197.108.37.047.158.078.26.103.336.026.078.035.093.031.086a.38.38 0 0 0 .544.137c-.007.004.008-.005.067-.06.059-.056.134-.131.251-.248.117-.117.192-.192.247-.25.047-.05.06-.069.062-.07a.38.38 0 0 0-.137-.541c-.001 0-.022-.01-.087-.032a13.038 13.038 0 0 0-.336-.103 15.046 15.046 0 0 0-.37-.108c-.073-.02-.099-.024-.1-.024Zm-1.902.532a1.88 1.88 0 0 1 2.027-2.027c.2.017.442.09.703.168l.072.022.065.02c.24.07.465.138.635.229a1.88 1.88 0 0 1 .68 2.694c-.107.16-.273.326-.45.503l-.048.048-.048.048c-.177.177-.343.343-.503.45a1.88 1.88 0 0 1-2.694-.68c-.091-.17-.158-.395-.23-.635a26.824 26.824 0 0 1-.02-.065l-.02-.072c-.08-.26-.152-.503-.169-.703Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoundedMagniferZoomIn;
