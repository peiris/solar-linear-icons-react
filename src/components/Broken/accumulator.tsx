import * as React from "react";
import type { SVGProps } from "react";
const SvgAccumulator = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 20H8c-2.828 0-4.243 0-5.121-.879C2 18.243 2 16.828 2 14v-2.025c0-1.846 0-2.768.392-3.458a3 3 0 0 1 1.125-1.125C4.207 7 5.129 7 6.975 7h.28c.123 0 .184 0 .24-.006a1 1 0 0 0 .725-.448c.03-.048.058-.103.113-.213.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C10.123 5 10.246 5 10.492 5h3.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425.055.11.082.165.113.213a1 1 0 0 0 .724.447c.057.007.118.007.241.007h.28c1.846 0 2.768 0 3.458.392a3 3 0 0 1 1.125 1.125c.392.69.392 1.612.392 3.458V14c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 7V6c0-.943 0-1.414-.293-1.707C6.414 4 5.943 4 5 4M3 7.5V6M21 6v2m-4-1V6c0-.943 0-1.414.293-1.707C17.586 4 18.057 4 19 4M9 13.5H6M18 13.5h-1.5m0 0H15m1.5 0V12m0 1.5V15"
      />
    </svg>
  );
};
export default SvgAccumulator;
