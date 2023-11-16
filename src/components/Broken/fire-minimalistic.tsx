import * as React from "react";
import type { SVGProps } from "react";
const SvgFireMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        
        d="M16 19.997A8.378 8.378 0 0 1 12 21c-4.418 0-8-3.356-8-7.496 0-1.131.15-2.192.405-3.176m14.771 6.493c.528-1 .824-2.126.824-3.317 0-3.741-2.035-6.666-3.438-8.06-.26-.258-.694-.144-.84.189-.748 1.69-2.304 4.123-4.293 4.123-1.232.165-3.112-.888-1.594-6.107.137-.47-.365-.848-.749-.534A14.639 14.639 0 0 0 6 6.647"
      />
    </svg>
  );
};
export default SvgFireMinimalistic;
