import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5 1.25a.75.75 0 0 1 .75.75v1.085l1.574-.315a9.427 9.427 0 0 1 5.35.492l.413.165a6.55 6.55 0 0 0 4.021.273c1.28-.32 2.307 1.067 1.628 2.197l-1.278 2.131c-.377.627-.437.757-.452.875a.754.754 0 0 0 0 .194c.015.118.075.248.452.875l1.56 2.601c.57.95.06 2.18-1.014 2.45l-.1.024a9.427 9.427 0 0 1-5.788-.393 7.927 7.927 0 0 0-4.498-.413l-1.868.374V22a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 5 1.25Zm.75 11.835 1.574-.315a9.428 9.428 0 0 1 5.35.492 7.927 7.927 0 0 0 4.866.33l.1-.025a.15.15 0 0 0 .092-.222l-1.56-2.601-.06-.098c-.282-.47-.532-.885-.594-1.354a2.253 2.253 0 0 1 0-.584c.062-.469.311-.884.595-1.353l.059-.099 1.253-2.09a8.05 8.05 0 0 1-4.895-.346l-.414-.166a7.927 7.927 0 0 0-4.498-.413l-1.868.374v8.47Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFlag2;
