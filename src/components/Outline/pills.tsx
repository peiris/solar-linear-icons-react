import * as React from "react";
import type { SVGProps } from "react";
const SvgPills = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.062 3.062a6.187 6.187 0 0 1 8.75 0l5.126 5.126a6.187 6.187 0 0 1-6.603 10.148A6.752 6.752 0 0 1 1.25 16a6.752 6.752 0 0 1 4.414-6.335 6.188 6.188 0 0 1 1.398-6.603Zm7.69 1.06a4.687 4.687 0 1 0-6.63 6.63l2.254 2.252c.216-.072.52-.187.89-.364.805-.389 1.921-1.076 3.11-2.264 1.188-1.188 1.875-2.305 2.263-3.11a7.52 7.52 0 0 0 .365-.89l-2.253-2.253Zm3.412 3.414c-.051.12-.11.247-.173.38-.455.944-1.237 2.202-2.555 3.52-1.318 1.319-2.577 2.1-3.52 2.555-.133.064-.26.122-.38.174l1.713 1.712a4.687 4.687 0 1 0 6.628-6.628l-1.713-1.713ZM6.381 11.004a5.25 5.25 0 1 0 6.615 6.615 6.224 6.224 0 0 1-.808-.681l-5.126-5.126a6.23 6.23 0 0 1-.681-.808Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPills;
