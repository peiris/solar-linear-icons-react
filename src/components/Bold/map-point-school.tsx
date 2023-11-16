import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPointSchool = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.463 21.674a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144 4 5.645 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531ZM10.967 5.932a3.028 3.028 0 0 1 2.066 0l2.342.855c.541.198.875.68.875 1.213s-.334 1.015-.875 1.213l-.125.045V11.7c0 .673-.394 1.329-1.08 1.582-.526.194-1.391.468-2.17.468-.779 0-1.644-.274-2.17-.468-.686-.253-1.08-.909-1.08-1.582V9.258l-.125-.045C8.084 9.015 7.75 8.533 7.75 8s.334-1.015.875-1.213l2.342-.855Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.481 7.34a1.528 1.528 0 0 1 1.038 0l1.804.66-1.804.66a1.528 1.528 0 0 1-1.038 0L9.677 8l1.804-.66Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.25 11.7V9.806l.717.262a3.028 3.028 0 0 0 2.066 0l.717-.262V11.7c0 .105-.057.159-.1.175-.501.185-1.154.375-1.65.375s-1.149-.19-1.65-.375c-.043-.016-.1-.07-.1-.175Z"
      />
    </svg>
  );
};
export default SvgMapPointSchool;
