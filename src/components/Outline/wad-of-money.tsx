import * as React from "react";
import type { SVGProps } from "react";
const SvgWadOfMoney = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.75 5.75v2.575a3.751 3.751 0 0 1 0 7.35v2.574c1.037-.002 1.824-.015 2.46-.08.77-.078 1.235-.226 1.596-.467.354-.237.66-.542.896-.896.241-.361.39-.827.468-1.596.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.25 3.25 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468-.636-.064-1.423-.077-2.46-.08Zm-1.5 12.5V5.75h-4.5v12.5h4.5Zm-6 0v-2.575a3.751 3.751 0 0 1 0-7.35V5.751c-1.037.002-1.824.015-2.46.08-.77.078-1.235.226-1.596.467a3.25 3.25 0 0 0-.896.896c-.241.361-.39.827-.468 1.596-.08.781-.08 1.79-.08 3.21s0 2.429.08 3.21c.079.77.227 1.235.468 1.596.237.354.542.66.896.896.361.241.827.39 1.596.468.636.064 1.423.077 2.46.08Zm0-8.372a2.25 2.25 0 0 0 0 4.244V9.878Zm7.5 4.244a2.251 2.251 0 0 0 0-4.244v4.244Zm2.612-9.784c.888.09 1.629.28 2.277.713.519.346.964.791 1.31 1.31.434.648.623 1.39.713 2.277.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32-.09.888-.28 1.629-.712 2.277a4.753 4.753 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713-.866.088-1.951.088-3.32.088H8.958c-1.369 0-2.454 0-3.32-.088-.888-.09-1.629-.28-2.277-.712a4.751 4.751 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32.09-.888.28-1.629.713-2.277a4.75 4.75 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713.866-.088 1.951-.088 3.32-.088h6.084c1.369 0 2.454 0 3.32.088Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWadOfMoney;
