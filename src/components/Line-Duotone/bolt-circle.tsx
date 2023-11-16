import * as React from "react";
import type { SVGProps } from "react";
const SvgBoltCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="m9.213 10.174 2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3.41.256.197 1.05-.228 2.636l-.04.15c-.154.572-.23.858-.096 1.086l.007.012c.14.226.438.306 1.033.465 1.072.287 1.608.43 1.702.804a.626.626 0 0 1 .004.019c.083.376-.34.712-1.185 1.386l-2.015 1.604c-1.303 1.038-1.954 1.556-2.364 1.3-.409-.256-.196-1.05.229-2.636l.04-.15c.153-.571.23-.857.095-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465-1.072-.287-1.608-.43-1.702-.804a.658.658 0 0 1-.004-.019c-.083-.375.34-.712 1.186-1.385Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBoltCircle;
