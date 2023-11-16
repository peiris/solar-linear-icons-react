import * as React from "react";
import type { SVGProps } from "react";
const SvgChatDots = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095 1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43-.439.007-.717.012-.929.036-.198.022-.275.054-.32.08-.047.028-.112.078-.224.232-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a10.605 10.605 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232-.045-.026-.122-.058-.32-.08-.212-.023-.49-.03-.93-.037-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25ZM6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045.311.035.616.104.909.274.29.17.5.395.682.645.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856.182-.25.392-.476.682-.645.293-.17.598-.24.909-.274.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgChatDots;
