import * as React from "react";
import type { SVGProps } from "react";
const SvgEndCall = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 12.862v.616c0 .852-.577 1.604-1.42 1.851l-2 .586c-1.284.377-2.58-.553-2.58-1.85V12.14c0-.489.125-.97.44-1.352m18.93-.933c.446.398.63.975.63 1.562v2.125c0 1.184-1.09 2.09-2.3 1.913l-2-.294c-.977-.143-1.7-.956-1.7-1.912v-.388"
      />
      <path
        fill="currentColor"
        d="M7.25 12.862a.75.75 0 0 0 1.5 0h-1.5ZM12 7v.75V7Zm3.25 5.862a.75.75 0 0 0 1.5 0h-1.5ZM12 11.396v-.75.75Zm-8.982-.129C3.902 10.201 6.513 7.75 12 7.75v-1.5c-6.01 0-9.021 2.714-10.137 4.06l1.155.957ZM12 7.75c5.233 0 7.865 1.767 8.87 2.665l1-1.118C20.594 8.157 17.609 6.25 12 6.25v1.5Zm4 5.112c.75 0 .75-.001.75-.002v-.016a.492.492 0 0 0-.004-.067 1.498 1.498 0 0 0-.126-.455 2.055 2.055 0 0 0-.677-.798c-.686-.503-1.873-.878-3.943-.878v1.5c1.93 0 2.743.358 3.057.588.149.11.19.192.198.21.005.01.004.011.001-.002a.304.304 0 0 1-.006-.065v-.013c0-.001 0-.002.75-.002Zm-4-2.216c-2.07 0-3.257.375-3.943.878-.351.257-.56.54-.677.798a1.499 1.499 0 0 0-.126.455 1.005 1.005 0 0 0-.004.076v.007s0 .002.75.002.75 0 .75.002v.006a.844.844 0 0 1-.006.072c-.002.013-.004.012.001.001.008-.017.05-.1.198-.209.314-.23 1.127-.588 3.057-.588v-1.5Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgEndCall;