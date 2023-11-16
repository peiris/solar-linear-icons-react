import * as React from "react";
import type { SVGProps } from "react";
const SvgSledgehammer = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.613 4.604C9.349 2.868 10.217 2 11.295 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419C21.131 10.758 22 11.626 22 12.705c0 1.078-.868 1.946-2.604 3.682-1.736 1.736-2.604 2.604-3.682 2.604-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.878 10.233 5.01 9.365 5.01 8.286c0-1.078.868-1.946 2.604-3.682Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.295 15.65-5.523 5.524c-.343.343-.514.514-.692.617-.484.279-1.079.279-1.562 0-.179-.103-.35-.274-.692-.617-.343-.342-.514-.513-.617-.691a1.562 1.562 0 0 1 0-1.563c.103-.178.274-.349.617-.692l5.523-5.523M18.66 8.286l.368-.368c.342-.343.514-.514.617-.692a1.563 1.563 0 0 0 0-1.562c-.103-.179-.275-.35-.617-.692-.342-.343-.514-.514-.692-.617a1.562 1.562 0 0 0-1.562 0c-.178.103-.35.274-.692.617l-.368.368"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSledgehammer;
