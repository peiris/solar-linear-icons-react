import * as React from "react";
import type { SVGProps } from "react";
const SvgCaseRound = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        fillRule="evenodd"
        d="M17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307L8.5 13.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.654 4.654 0 0 0 3.506 0l.56-.227a1.906 1.906 0 0 0 1.187-1.767V13.95l5.358-1.607c.41-.124.616-.185.768-.307a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824 0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6ZM13.6 13h-3.2c-.22 0-.4.182-.4.406v1.757c0 .166.1.315.251.377l.56.228c.764.31 1.614.31 2.377 0l.56-.228a.407.407 0 0 0 .252-.377v-1.757a.403.403 0 0 0-.4-.406Z"
        clipRule="evenodd"
      />
      <path
        fill="#1C274D"
        d="m20.958 12.313-.034.01L15.5 13.95v1.213c0 .765-.46 1.471-1.187 1.767l-.56.227a4.654 4.654 0 0 1-3.506 0l-.56-.227A1.906 1.906 0 0 1 8.5 15.163V13.95L3 12.3c0 3.675.035 7.388 1.318 8.528C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.172 1.283-1.14 1.317-4.853 1.318-8.528l-.042.013Z"
        opacity={0.5}
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.17 4a3.001 3.001 0 0 1 5.66 0"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCaseRound;