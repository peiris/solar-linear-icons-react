import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundedMagniferZoomOut = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.82 19.7c-.09-1.094.816-2.008 1.9-1.918.189.016.414.085.643.154l.067.02.06.018c.21.064.42.127.58.213a1.786 1.786 0 0 1 .637 2.549c-.1.152-.255.308-.41.464l-.045.045-.044.045c-.155.157-.31.313-.46.414a1.754 1.754 0 0 1-2.527-.643c-.086-.161-.148-.373-.211-.585l-.018-.06-.02-.068c-.07-.231-.137-.458-.152-.648Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.023 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoundedMagniferZoomOut;
