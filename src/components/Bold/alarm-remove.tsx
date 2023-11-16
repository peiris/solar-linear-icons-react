import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmRemove = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3-9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h6ZM8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239Zm7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlarmRemove;
