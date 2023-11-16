import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylist2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19.345 5.993c.278-.103.61-.19.97-.125.442.08.836.329 1.1.692.215.296.28.634.308.93.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.749 1.749 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033-1.785.857c-.369.177-.692.332-.964.432-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321c0-1.815 1.435-3.322 3.25-3.322a3.18 3.18 0 0 1 1.75.522V10h.003c-.003-.169-.003-.351-.003-.545v-.11c0-.3-.002-.62.106-.915a1.75 1.75 0 0 1 .392-.623c.22-.225.509-.363.78-.492l.068-.033 1.785-.857c.369-.177.692-.332.964-.432Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 5A.75.75 0 0 1 3 4.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5Zm0 4A.75.75 0 0 1 3 8.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPlaylist2;
