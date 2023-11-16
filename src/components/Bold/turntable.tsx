import * as React from "react";
import type { SVGProps } from "react";
const SvgTurntable = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.25 9a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM6.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.172 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.172 8.535C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.465C22 19.072 22 16.714 22 12s0-7.071-1.172-8.536C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464ZM17 6.75a2.25 2.25 0 0 0-.75 4.372v3.642c0 .473-.268.906-.691 1.118l-.894.447a.75.75 0 1 0 .67 1.342l.895-.447a2.75 2.75 0 0 0 1.52-2.46v-3.642A2.251 2.251 0 0 0 17 6.75Zm-7 .5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTurntable;
