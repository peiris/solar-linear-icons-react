import * as React from "react";
import type { SVGProps } from "react";
const SvgTurntableMusicNote = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.756.756 1.165 1.69 1.39 2.84.22 1.128.274 2.516.289 4.22a.75.75 0 0 1-1.5.012c-.015-1.709-.07-2.968-.261-3.944-.187-.955-.494-1.583-.979-2.067-.57-.57-1.34-.897-2.619-1.069-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069-.569.57-.896 1.34-1.068 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176a.75.75 0 0 1 0 1.5h-.057c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm7 1.5a.75.75 0 0 1 .75.75A2.25 2.25 0 0 0 22 14.25a.75.75 0 0 1 0 1.5 3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45V12a.75.75 0 0 1 .75-.75ZM18.25 20a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTurntableMusicNote;
