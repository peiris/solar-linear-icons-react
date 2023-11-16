import * as React from "react";
import type { SVGProps } from "react";
const SvgRouting2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19.5 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 5.257c0-2.263 1.954-4.007 4.25-4.007 2.296 0 4.25 1.744 4.25 4.007 0 2.027-1.246 4.418-3.315 5.302a2.388 2.388 0 0 1-1.87 0C2.495 9.675 1.25 7.284 1.25 5.257ZM5.5 2.75c-1.57 0-2.75 1.172-2.75 2.507 0 1.544.988 3.318 2.405 3.923a.888.888 0 0 0 .69 0C7.262 8.575 8.25 6.8 8.25 5.257c0-1.335-1.18-2.507-2.75-2.507ZM11.25 5a.75.75 0 0 1 .75-.75h4.132c2.751 0 3.797 3.593 1.476 5.07L7.197 15.945c-1.055.672-.58 2.305.671 2.305h2.321l-.22-.22a.75.75 0 1 1 1.061-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.867c-2.751 0-3.797-3.593-1.476-5.07l10.411-6.625c1.055-.672.58-2.305-.671-2.305H12a.75.75 0 0 1-.75-.75Zm3 12.257c0-2.263 1.954-4.007 4.25-4.007 2.296 0 4.25 1.744 4.25 4.007 0 2.027-1.246 4.418-3.315 5.302a2.388 2.388 0 0 1-1.87 0c-2.07-.884-3.315-3.275-3.315-5.302Zm4.25-2.507c-1.57 0-2.75 1.172-2.75 2.507 0 1.544.988 3.318 2.405 3.923a.888.888 0 0 0 .69 0c1.417-.605 2.405-2.38 2.405-3.923 0-1.335-1.18-2.507-2.75-2.507Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRouting2;
