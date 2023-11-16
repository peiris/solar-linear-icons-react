import * as React from "react";
import type { SVGProps } from "react";
const SvgTrashBinMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.607 22h.787c2.707 0 4.06 0 4.941-.863.88-.864.97-2.28 1.15-5.111l.26-4.081c.098-1.537.147-2.305-.295-2.792-.442-.487-1.187-.487-2.679-.487H8.23c-1.491 0-2.237 0-2.679.487-.441.487-.392 1.255-.295 2.792l.26 4.08c.18 2.833.27 4.248 1.15 5.112C7.545 22 8.9 22 11.607 22Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.722.722 0 0 1-.73.714H3.73A.722.722 0 0 1 3 6.524Z"
      />
    </svg>
  );
};
export default SvgTrashBinMinimalistic2;
