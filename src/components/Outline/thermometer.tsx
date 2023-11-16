import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.03 9.03a.75.75 0 0 0-1.06-1.06l-6.5 6.5a.75.75 0 1 0 1.06 1.06l6.5-6.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.35 3.65a4.778 4.778 0 0 0-6.757 0l-8.942 8.942a3.771 3.771 0 0 0-1.082 3.083l.09.799c.042.382-.092.762-.363 1.033l-.384.384a2.26 2.26 0 0 0 3.197 3.197l.384-.384a1.264 1.264 0 0 1 1.033-.362l.8.089a3.771 3.771 0 0 0 3.082-1.082l8.943-8.942a4.778 4.778 0 0 0 0-6.758Zm-9.133 12.228.77.77 2.149-2.148-.77-.77a.75.75 0 0 1 1.06-1.06l.77.77 2.14-2.14-.77-.77a.75.75 0 1 1 1.06-1.06l.77.77.894-.894a3.278 3.278 0 0 0-4.636-4.636l-8.942 8.943a2.271 2.271 0 0 0-.652 1.856l.09.8a2.764 2.764 0 0 1-.794 2.259l-.383.384a.76.76 0 1 0 1.075 1.075l.384-.383a2.764 2.764 0 0 1 2.26-.793l.799.089a2.27 2.27 0 0 0 1.857-.652l.579-.579-.77-.77a.75.75 0 0 1 1.06-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThermometer;
