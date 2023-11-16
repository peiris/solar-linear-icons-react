import * as React from "react";
import type { SVGProps } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v1.03a.8.8 0 0 1 0 .057c-.004 1.852-.027 3.35-.19 4.556-.194 1.445-.6 2.585-1.494 3.48-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.163-1.207-.186-2.704-.19-4.556a.76.76 0 0 1 0-.057v-1.03c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-9.19 12.5c.01 1.503.045 2.68.173 3.636.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.128-.956.163-2.133.172-3.636H18.84c-.974 0-1.229.016-1.442.114-.214.099-.392.282-1.026 1.02l-.605.707-.088.102c-.502.587-.9 1.052-1.45 1.305-.55.253-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252-.55-.253-.948-.718-1.45-1.305-.03-.033-.058-.067-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02-.213-.099-.468-.115-1.442-.115H2.753Zm18.497-1.5h-2.544c-.773 0-1.385-.002-1.935.252-.55.253-.948.718-1.45 1.305-.03.033-.058.067-.088.102l-.605.706c-.634.74-.812.922-1.026 1.02-.213.099-.468.115-1.442.115h-.32c-.974 0-1.229-.016-1.442-.114-.214-.099-.392-.282-1.026-1.02l-.605-.707-.088-.102c-.502-.587-.9-1.052-1.45-1.305-.55-.254-1.162-.253-1.934-.252H2.75V12c0-2.378.002-4.086.176-5.386.172-1.279.5-2.05 1.069-2.62.57-.569 1.34-.896 2.619-1.068 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386v.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgInbox;
