import * as React from "react";
import type { SVGProps } from "react";
const SvgTextCrossSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.25 9.222a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 1 0 1.5 0h-1.5Zm4 .278a.75.75 0 0 0 1.5 0h-1.5Zm0 7.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2.5a.75.75 0 0 0-1.5 0h1.5Zm2.957-7.175-.557.502.557-.502ZM9.5 16.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-5h2v-1.5h-2v1.5Zm2 0h2v-1.5h-2v1.5Zm.75 1.75V7h-1.5v2.5h1.5Zm0 7.5v-2.5h-1.5V17h1.5ZM14 7.75c.495 0 .782.002.986.032.092.014.135.03.152.037.01.005.01.006.012.008l1.115-1.003c-.305-.339-.686-.47-1.057-.525-.34-.051-.76-.049-1.208-.049v1.5Zm2.75 1.472c0-.504.001-.95-.042-1.31-.045-.371-.149-.761-.443-1.088L15.15 7.827c.002.003.01.012.023.045.014.038.032.105.046.221.03.247.031.586.031 1.13h1.5ZM10 6.25c-.448 0-.868-.002-1.208.049-.371.055-.752.186-1.057.525L8.85 7.827c.002-.002.002-.003.012-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032v-1.5ZM8.75 9.222c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.034.02-.043.023-.046L7.735 6.824c-.294.327-.398.717-.443 1.089-.043.358-.042.805-.042 1.31h1.5Zm.75 8.528h5v-1.5h-5v1.5Zm-1.5-5h8v-1.5H8v1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgTextCrossSquare;
