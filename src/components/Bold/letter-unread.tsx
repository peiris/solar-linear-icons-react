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
      <path fill="currentColor" d="M22 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 5h-4C6.229 5 4.343 5 3.172 6.172 2 7.343 2 9.229 2 13c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13c0-1.453 0-2.627-.067-3.587A4.482 4.482 0 0 1 19 10.5c-.479 0-.94-.075-1.373-.213l-1.343 1.12c-.887.738-1.605 1.337-2.24 1.745-.66.425-1.303.693-2.044.693-.741 0-1.384-.269-2.045-.693-.634-.408-1.352-1.007-2.239-1.745L5.52 9.577a.75.75 0 0 1 .96-1.153l2.159 1.799c.933.777 1.58 1.315 2.128 1.667.529.34.888.455 1.233.455.345 0 .704-.114 1.233-.455.547-.352 1.195-.89 2.128-1.667l.84-.7A4.492 4.492 0 0 1 14.61 5H14Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLetterUnread;
