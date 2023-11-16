import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114Zm-.693 1.5c-1.994.002-3.477.02-4.636.176-1.279.172-2.05.5-2.62 1.069-.569.57-.896 1.34-1.068 2.619-.155 1.159-.174 2.642-.176 4.636h4.164a3.987 3.987 0 0 1-.756-1.527C5.619 7.57 7.57 5.619 9.723 6.158c.571.143 1.089.405 1.527.756V2.75Zm-8.5 10c.002 1.994.02 3.477.176 4.636.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.159.155 2.642.174 4.636.176v-7.126A4.75 4.75 0 0 1 7 16.75a.75.75 0 0 1 0-1.5 3.251 3.251 0 0 0 3.163-2.5H2.75Zm10 8.5c1.994-.002 3.477-.02 4.636-.176 1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.155-1.159.174-2.642.176-4.636H13.837A3.251 3.251 0 0 0 17 15.25a.75.75 0 0 1 0 1.5 4.75 4.75 0 0 1-4.25-2.626v7.126Zm8.5-10h-4.164c.351-.438.614-.956.757-1.527.538-2.153-1.413-4.104-3.565-3.565a3.987 3.987 0 0 0-1.528.756V2.75c1.994.002 3.477.02 4.636.176 1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.155 1.159.174 2.642.176 4.636Zm-8.5 0v-1.22a2.497 2.497 0 0 1 1.891-2.417 1.44 1.44 0 0 1 1.746 1.746 2.497 2.497 0 0 1-2.415 1.891H12.75Zm-1.5-1.223a2.497 2.497 0 0 0-1.891-2.414 1.44 1.44 0 0 0-1.746 1.746 2.497 2.497 0 0 0 2.415 1.891h1.222v-1.223Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGift;
