import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTube = (props: SVGProps<SVGSVGElement>) => {
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
        d="m9.749 2.494 8.41 4.826M9.75 2.494 2.65 14.746a4.827 4.827 0 0 0 1.776 6.605 4.862 4.862 0 0 0 6.629-1.77l1.495-2.58M9.75 2.493 8.913 2m9.246 5.32-2.257 3.896m2.257-3.896.841.484m-3.098 3.412-1.713 2.958m1.713-2.958-2.558-1.471m.845 4.429L12.55 17m1.638-2.826-4.203-2.418M12.55 17l-2.613-1.503"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 14.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"
      />
    </svg>
  );
};
export default SvgTestTube;
