import * as React from "react";
import type { SVGProps } from "react";
const SvgSiren = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2V16c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8c-2.8 0-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 11.8 4 13.2 4 16v5.25Zm9.5-3.75a1.5 1.5 0 0 1-.75 1.3v2.45h-1.5V18.8a1.5 1.5 0 1 1 2.25-1.3Zm1.5-7.435a.75.75 0 0 0 0 1.5c.842 0 1.464.638 1.436 1.408a.75.75 0 0 0 1.499.054c.061-1.69-1.317-2.962-2.935-2.962Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM21.53 5.53l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06ZM3.53 4.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5Z"
      />
    </svg>
  );
};
export default SvgSiren;
