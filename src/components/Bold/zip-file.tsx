import * as React from "react";
import type { SVGProps } from "react";
const SvgZipFile = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828C18.657 2 16.771 2 13 2h-1v2h1.5c.471 0 .707 0 .854.146.146.147.146.383.146.854s0 .707-.146.854C14.207 6 13.97 6 13.5 6H12v2h1.5c.471 0 .707 0 .854.146.146.147.146.383.146.854s0 .707-.146.854C14.207 10 13.97 10 13.5 10H13c-.471 0-.707 0-.854-.146C12 9.707 12 9.47 12 9V8h-1.5c-.471 0-.707 0-.854-.146C9.5 7.707 9.5 7.47 9.5 7s0-.707.146-.854C9.793 6 10.03 6 10.5 6H12V4h-1.5c-.471 0-.707 0-.854-.146C9.5 3.707 9.5 3.47 9.5 3v-.997c-2.794.02-4.324.164-5.328 1.169ZM9.5 12.875V13a2.5 2.5 0 0 0 5 0v-.125a.875.875 0 0 0-.875-.875h-3.25a.875.875 0 0 0-.875.875Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgZipFile;
