import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudyMoon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.286 22C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336C12.295 13.371 10.72 12 8.81 12c-2.052 0-3.715 1.58-3.715 3.53 0 .43.082.844.23 1.226a2.949 2.949 0 0 0-.54-.05C3.248 16.706 2 17.89 2 19.353 2 20.815 3.247 22 4.786 22h6.5Z"
      />
      <path
        fill="currentColor"
        d="M2.716 15.723c.278-.148.574-.268.882-.354C3.686 12.6 6.056 10.5 8.81 10.5c.172 0 .343.008.511.024A6.495 6.495 0 0 1 9 8.5a6.496 6.496 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2 6.477 2 2 6.477 2 12c0 1.316.254 2.572.716 3.723ZM22 12c0 4.266-2.671 7.908-6.432 9.345a4.865 4.865 0 0 0 .932-2.874 4.907 4.907 0 0 0-1.457-3.487 6.496 6.496 0 0 0 6.024-3.127c.24-.396.933-.32.933.143Z"
      />
    </svg>
  );
};
export default SvgCloudyMoon;
