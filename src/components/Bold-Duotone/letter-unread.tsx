import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterUnread = (props: SVGProps<SVGSVGElement>) => {
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
        d="M24 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM17.234 7.464l-1.537 1.28c-1.026.856-1.738 1.447-2.34 1.834-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92.726.466 1.434.762 2.25.762.814 0 1.522-.296 2.249-.763.697-.448 1.487-1.107 2.462-1.92l1.666-1.388a4.524 4.524 0 0 1-1.144-1.194Z"
      />
      <path
        fill="currentColor"
        d="M18.454 6.587a.825.825 0 0 1 .958.959 3.015 3.015 0 0 1-.958-.959Z"
      />
      <path
        fill="currentColor"
        d="M16.958 3.021C16.156 3 15.244 3 14.2 3H9.8C5.652 3 3.577 3 2.289 4.318 1 5.636 1 7.758 1 12c0 4.243 0 6.364 1.289 7.682C3.577 21 5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318C23 18.364 23 16.242 23 12c0-1.067 0-2-.02-2.82a4.4 4.4 0 0 1-1.98.468c-2.485 0-4.5-2.06-4.5-4.603 0-.726.165-1.413.458-2.024Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgLetterUnread;
