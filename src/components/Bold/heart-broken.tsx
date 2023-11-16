import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartBroken = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137c0-4.6 4.923-7.935 9.264-4.323L9.81 8.204a.75.75 0 0 0 .253.906l2.833 2.024-2.466 2.878a.75.75 0 0 0 .039 1.018l1.7 1.7-.91 3.64c-.756-.253-1.516-.843-2.298-1.46-.277-.218-.564-.438-.856-.663Z"
      />
      <path
        fill="currentColor"
        d="M12.812 20.345c.732-.265 1.469-.837 2.226-1.434.277-.219.564-.44.856-.664C18.702 16.083 22 13.542 22 9.137c0-4.515-4.741-7.81-9.02-4.518l-1.553 3.622 3.009 2.149a.75.75 0 0 1 .133 1.098l-2.548 2.973 1.51 1.509a.75.75 0 0 1 .197.712l-.916 3.663Z"
      />
    </svg>
  );
};
export default SvgHeartBroken;
