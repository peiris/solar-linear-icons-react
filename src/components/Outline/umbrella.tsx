import * as React from "react";
import type { SVGProps } from "react";
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.524 1.25C5.85 1.25 1.25 5.85 1.25 11.524c0 .677.549 1.226 1.226 1.226h8.774V20a1.25 1.25 0 1 1-2.5 0v-1a.75.75 0 0 0-1.5 0v1a2.75 2.75 0 1 0 5.5 0v-7.25h8.774c.677 0 1.226-.549 1.226-1.226 0-5.674-4.6-10.274-10.274-10.274h-.952Zm-2.68 1.917a8.778 8.778 0 0 0-6.09 8.083h3.661c.176-1.442.526-3.596 1.191-5.512.319-.92.722-1.821 1.238-2.571Zm-.917 8.083c.176-1.382.506-3.32 1.096-5.021.362-1.042.802-1.941 1.325-2.567.514-.616 1.055-.912 1.652-.912s1.138.296 1.652.912c.523.626.963 1.525 1.325 2.567.59 1.701.92 3.64 1.096 5.021H7.927Zm9.658 0c-.176-1.442-.527-3.596-1.191-5.512-.319-.92-.722-1.821-1.238-2.571a8.778 8.778 0 0 1 6.09 8.083h-3.661Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUmbrella;
