import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarSearch = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692Z"
      />
      <path
        fill="currentColor"
        d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172C22 19.657 22 17.771 22 14Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 16.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM15 18.75a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 15 18.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCalendarSearch;
