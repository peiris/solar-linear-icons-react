import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFramePlayHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M14 12c0-.528-.53-.884-1.589-1.596-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12c0 1.432 0 2.148.4 2.413.4.265.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12ZM11.25 2c-1.366.001-2.519.01-3.5.068V6.25h3.5V2ZM6.25 2.221c-1.223.195-2.101.56-2.785 1.243-.685.684-1.05 1.563-1.243 2.786H6.25V2.22ZM21.778 6.25c-.194-1.223-.558-2.102-1.242-2.786-.684-.684-1.563-1.048-2.786-1.243V6.25h4.028ZM12.75 2c1.366.001 2.519.01 3.5.068V6.25h-3.5V2ZM21.778 17.75H17.75v4.028c1.223-.194 2.102-.559 2.786-1.243.684-.684 1.048-1.562 1.242-2.785ZM16.25 17.75v4.181c-.981.058-2.134.067-3.5.069v-4.25h3.5ZM11.25 22v-4.25h-3.5v4.181c.981.058 2.134.067 3.5.069ZM6.25 17.75v4.028c-1.223-.194-2.101-.559-2.785-1.243-.685-.684-1.05-1.562-1.243-2.785H6.25Z"
      />
    </svg>
  );
};
export default SvgVideoFramePlayHorizontal;
