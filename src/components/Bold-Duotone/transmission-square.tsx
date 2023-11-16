import * as React from "react";
import type { SVGProps } from "react";
const SvgTransmissionSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M8 8.25a.75.75 0 0 1 .75.75v2.25h2.5V9a.75.75 0 0 1 1.5 0v2.25H13c.476 0 .796 0 1.043-.017.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043a.75.75 0 0 1 1.5 0v.025c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907 2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021h-.275V15a.75.75 0 0 1-1.5 0v-2.25h-2.5V15a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 8 8.25Z"
      />
    </svg>
  );
};
export default SvgTransmissionSquare;
