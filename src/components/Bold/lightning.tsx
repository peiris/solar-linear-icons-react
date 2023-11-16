import * as React from "react";
import type { SVGProps } from "react";
const SvgLightning = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8Zm1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12l.6-.8ZM10.733 7c-.854 0-1.601 0-2.233.048V5.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C9.893 2 10.596 2 12 2c1.405 0 2.107 0 2.611.337a2 2 0 0 1 .552.552c.337.504.337 1.207.337 2.611v1.548C14.868 7 14.121 7 13.267 7h-2.534ZM11 3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h.45v2a.75.75 0 0 0 1.5 0v-2h.45c2.263 0 3.394 0 4.097-.692C18 18.615 18 17.5 18 15.273v-2.546c0-2.228 0-3.342-.703-4.035C16.594 8 15.463 8 13.2 8Zm-.75 3.4a.75.75 0 0 1 .15 1.05l-.6.8h1.5a.75.75 0 0 1 .6 1.2l-1.5 2a.75.75 0 1 1-1.2-.9l.6-.8h-1.5a.75.75 0 0 1-.6-1.2l1.5-2a.75.75 0 0 1 1.05-.15Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLightning;
