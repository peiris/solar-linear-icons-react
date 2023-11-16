import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundUnread = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.383 2.383 0 0 1 1.676.187A9.208 9.208 0 0 0 12 21.25a9.25 9.25 0 0 0 9.065-11.1.75.75 0 1 1 1.47-.3c.141.696.215 1.415.215 2.15 0 5.937-4.813 10.75-10.75 10.75-1.718 0-3.344-.404-4.787-1.122a.885.885 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.885.885 0 0 0-.08-.62A10.709 10.709 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25c.735 0 1.454.074 2.15.215a.75.75 0 0 1-.3 1.47A9.296 9.296 0 0 0 12 2.75ZM15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM19 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChatRoundUnread;
