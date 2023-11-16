import * as React from "react";
import type { SVGProps } from "react";
const SvgInboxArchive = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 15h2.301c.809 0 1.213 0 1.576.148.033.013.065.027.098.043.354.167.628.464 1.175 1.059l.035.038c.513.557.769.835 1.096 1 .061.03.124.058.188.082.343.13.72.13 1.477.13.715 0 1.073 0 1.4-.117.061-.022.121-.047.18-.075.314-.148.567-.401 1.073-.907l.23-.23c.577-.577.866-.866 1.234-1.019.368-.152.776-.152 1.594-.152H20M5 15v-1.5A1.5 1.5 0 0 1 6.5 12h11a1.5 1.5 0 0 1 1.5 1.5V15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5 14v-3.5A1.5 1.5 0 0 1 6.5 9h11a1.5 1.5 0 0 1 1.5 1.5V14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5 11V7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5V11"
      />
    </svg>
  );
};
export default SvgInboxArchive;
