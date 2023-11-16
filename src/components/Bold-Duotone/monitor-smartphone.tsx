import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitorSmartphone = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 15v3c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22c-1.886 0-2.828 0-3.414-.586C14 20.828 14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414C15.172 11 16.114 11 18 11c1.886 0 2.828 0 3.414.586C22 12.172 22 13.114 22 15Zm-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 17c-2.829 0-4.243 0-5.122-.879-.569-.569-.807-1.363-.878-2.621V13h10.516v.5c-.016.437-.016.912-.016 1.41v3.18c0 .865 0 1.659.086 2.304.096.711.32 1.463.939 2.08l.025.026H8A.75.75 0 0 1 8 21h3.25v-4H8Z"
      />
      <path
        fill="currentColor"
        d="M10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v.138c-.508-.333-1.069-.48-1.606-.551C19.75 9.5 18.955 9.5 18.09 9.5h-.18c-.865 0-1.659 0-2.304.087-.711.095-1.463.32-2.08.938-.588.588-.82 1.296-.924 1.975v.5H2v-.5c-.007-.45 0-.948 0-1.5v-1c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgMonitorSmartphone;
