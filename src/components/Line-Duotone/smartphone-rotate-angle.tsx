import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphoneRotateAngle = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M15 5H9"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M3.505 15.588a.75.75 0 1 0-.931-1.176l.931 1.176Zm8.495 5.1.494.564a.75.75 0 0 0 0-1.129l-.494.564Zm-1.5-1.313.494-.564a.75.75 0 0 0-1.244.564h.75Zm0 2.625h-.75a.75.75 0 0 0 1.244.564L10.5 22Zm-7.75-5.25c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338h1.5Zm9.744 3.373-1.5-1.312-.988 1.128 1.5 1.313.988-1.129Zm-1.5 2.441 1.5-1.312-.988-1.129-1.5 1.313.988 1.128ZM9.75 19.375v1.268h1.5v-1.268h-1.5Zm0 1.268V22h1.5v-1.357h-1.5Zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248-.71-.322-1.232-.672-1.565-1.017-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922.509.526 1.21.972 2.024 1.341 1.63.74 3.851 1.233 6.32 1.38l.088-1.498Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.96 15c.666.527 1.04 1.121 1.04 1.75 0 1.835-3.187 3.376-7.5 3.814"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.502 17c-.002-.312-.002-.645-.002-1V8c0-2.828 0-4.243.879-5.121C7.257 2 8.672 2 11.5 2h1c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v8c0 .355 0 .688-.002 1"
      />
    </svg>
  );
};
export default SvgSmartphoneRotateAngle;
