import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveUpMinimlistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.535 3.464C19.07 2 16.713 2 11.999 2 7.285 2 4.93 2 3.464 3.464c-.758.758-1.123 1.754-1.3 3.192a6.5 6.5 0 0 1 1.884-1.448c.782-.398 1.619-.56 2.545-.635C7.488 4.5 8.59 4.5 9.936 4.5h4.126c1.347 0 2.448 0 3.343.073.927.076 1.764.237 2.545.635a6.499 6.499 0 0 1 1.884 1.448c-.176-1.438-.542-2.434-1.3-3.192Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Zm10.53-3.53a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V17a.75.75 0 0 0 1.5 0v-4.19l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArchiveUpMinimlistic;
