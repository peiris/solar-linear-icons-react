import * as React from "react";
import type { SVGProps } from "react";
const SvgDevices = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5v-4Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 10v4c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22c-1.7 0-3.015 0-4.056-.107.335-.525.454-1.082.506-1.598.05-.491.05-1.084.05-1.729v-4.132c0-.645 0-1.238-.05-1.729-.054-.533-.18-1.11-.54-1.65a3.499 3.499 0 0 0-.966-.965c-.54-.36-1.116-.486-1.65-.54A13.862 13.862 0 0 0 6 9.5c.002-3.44.053-5.21 1.172-6.328C8.343 2 10.229 2 14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10Zm-10.75 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDevices;
