import * as React from "react";
import type { SVGProps } from "react";
const SvgPenNewRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="m16.652 3.455.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829-.205.262-.38.547-.524.848-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.59 4.59 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"
      />
      <path
        fill="currentColor"
        d="M22.75 12a.75.75 0 0 0-1.5 0h1.5ZM12 2.75a.75.75 0 0 0 0-1.5v1.5ZM7.376 20.013a.75.75 0 1 0-.752 1.298l.752-1.298Zm-4.687-2.638a.75.75 0 1 0 1.298-.75l-1.298.75ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 1.25C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75v-1.5ZM6.624 21.311A10.704 10.704 0 0 0 12 22.75v-1.5a9.204 9.204 0 0 1-4.624-1.237l-.752 1.298ZM1.25 12c0 1.957.524 3.794 1.439 5.375l1.298-.75A9.204 9.204 0 0 1 2.75 12h-1.5Z"
      />
    </svg>
  );
};
export default SvgPenNewRound;
