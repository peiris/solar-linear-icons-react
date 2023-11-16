import * as React from "react";
import type { SVGProps } from "react";
const SvgNotebookBookmark = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.25 4.48v3.057c0 .111 0 .27.021.406a.937.937 0 0 0 .444.683c.32.188.634.118.783.072.13-.04.272-.108.378-.159L17 8.005l1.124.534c.106.05.248.119.378.16a.958.958 0 0 0 .783-.073.937.937 0 0 0 .444-.683c.022-.136.021-.295.021-.406V3.031c.113-.005.224-.01.332-.013C21.154 2.98 22 3.86 22 4.933v11.21c0 1.112-.906 2.01-2.015 2.08-.97.06-2.108.179-2.985.41-1.082.286-2.373.904-3.372 1.436-.28.149-.575.257-.878.323V5.174c.32-.079.632-.203.924-.371.184-.107.377-.216.576-.323Zm5.478 8.338a.75.75 0 0 1-.546.91l-4 1a.75.75 0 1 1-.364-1.456l4-1a.75.75 0 0 1 .91.546ZM11.25 5.214a3.444 3.444 0 0 1-.968-.339C9.296 4.354 8.05 3.765 7 3.487c-.887-.233-2.041-.352-3.018-.412C2.886 3.008 2 3.9 2 4.998v11.146c0 1.11.906 2.01 2.015 2.079.97.06 2.108.179 2.985.41 1.081.286 2.373.904 3.372 1.436.28.149.575.257.878.324V5.214ZM4.273 8.818a.75.75 0 0 1 .91-.546l4 1a.75.75 0 1 1-.365 1.456l-4-1a.75.75 0 0 1-.545-.91Zm.91 3.454a.75.75 0 1 0-.365 1.456l4 1a.75.75 0 0 0 .364-1.456l-4-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#1C274D"
        d="M18.25 3.151c-.62.073-1.23.18-1.75.336a8.2 8.2 0 0 0-.75.27v3.182l.75-.356.008-.005a1.13 1.13 0 0 1 .492-.13c.048 0 .094.004.138.01.175.029.315.1.354.12l.009.005.75.356V3.15Z"
      />
    </svg>
  );
};
export default SvgNotebookBookmark;
