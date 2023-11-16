import * as React from "react";
import type { SVGProps } from "react";
const SvgRefreshCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.713 10.674c.454-2.52 2.672-4.424 5.33-4.424 1.578 0 3 .67 3.99 1.74a.75.75 0 1 1-1.101 1.02 3.92 3.92 0 0 0-2.888-1.26 3.91 3.91 0 0 0-3.8 2.935l.237-.226a.75.75 0 0 1 1.038 1.082l-1.622 1.556a.75.75 0 0 1-1.08-.044l-1.378-1.556a.75.75 0 1 1 1.122-.994l.152.17ZM16.649 10.696a.75.75 0 0 1 .53.251l1.382 1.555a.75.75 0 1 1-1.122.996l-.155-.175c-.454 2.523-2.683 4.428-5.35 4.428a5.447 5.447 0 0 1-3.98-1.719.75.75 0 1 1 1.093-1.026 3.947 3.947 0 0 0 2.888 1.245 3.925 3.925 0 0 0 3.815-2.932l-.23.222a.75.75 0 1 1-1.04-1.082l1.62-1.555a.75.75 0 0 1 .548-.208Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRefreshCircle;
