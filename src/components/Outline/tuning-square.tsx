import * as React from "react";
import type { SVGProps } from "react";
const SvgTuningSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.25 10a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM8 8.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM16 16.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5ZM14.75 14a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 13.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM16.75 10a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 1.5 0v5ZM8 4.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 8 4.25ZM16.75 19a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 1.5 0v1Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTuningSquare;
