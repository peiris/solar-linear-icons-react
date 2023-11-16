import * as React from "react";
import type { SVGProps } from "react";
const SvgCupPaper = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.185 2h5.63c1.838 0 2.757 0 3.48.444a3 3 0 0 1 .355.257c.65.545.941 1.416 1.523 3.16l.036.107c.319.955.478 1.433.31 1.794a1.001 1.001 0 0 1-.22.303c-.288.274-.792.274-1.799.274l-.426 2.911H5.926L5.5 8.34c-1.007 0-1.51 0-1.8-.275a1 1 0 0 1-.218-.303c-.169-.361-.01-.839.31-1.794l.035-.107C4.41 4.117 4.7 3.246 5.35 2.7c.112-.094.231-.18.356-.257C6.429 2 7.347 2 9.186 2ZM17.342 16.25H6.658l-.512-3.5h11.708l-.512 3.5ZM13.043 22h-2.086c-1.649 0-2.473 0-3.036-.487-.564-.487-.683-1.302-.922-2.934l-.121-.829h10.244l-.121.83c-.239 1.63-.359 2.446-.922 2.933-.563.487-1.387.487-3.036.487Z"
      />
    </svg>
  );
};
export default SvgCupPaper;
