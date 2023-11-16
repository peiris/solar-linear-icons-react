import * as React from "react";
import type { SVGProps } from "react";
const SvgSignpost = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.75 2a.75.75 0 0 0-1.5 0v1.5h1.5V2Zm-1.5 8.5v2h1.5v-2h-1.5Zm0 10.75V19.5h1.5v1.75H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M11.25 3.5H6.703c-.658 0-.987 0-1.289.098a2 2 0 0 0-.382.17c-.275.16-.494.404-.934.894-.85.947-1.276 1.42-1.378 1.974a2 2 0 0 0 0 .728c.102.553.528 1.027 1.378 1.974.44.49.66.734.934.893.121.07.25.127.382.17.302.099.63.099 1.289.099H17.5c1.404 0 2.106 0 2.61-.337a2 2 0 0 0 .552-.552C21 9.107 21 8.404 21 7c0-1.404 0-2.107-.338-2.611a2 2 0 0 0-.551-.552C19.606 3.5 18.904 3.5 17.5 3.5h-6.25ZM11.25 12.5H6.5c-1.405 0-2.107 0-2.612.337a2 2 0 0 0-.551.552C3 13.893 3 14.596 3 16c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .551.552c.505.337 1.207.337 2.612.337h10.796c.657 0 .986 0 1.288-.098.133-.044.26-.1.382-.17.275-.16.494-.404.934-.894.85-.947 1.276-1.42 1.378-1.974a2 2 0 0 0 0-.728c-.102-.553-.528-1.027-1.378-1.974-.44-.49-.66-.734-.934-.893a1.996 1.996 0 0 0-.382-.17c-.302-.099-.63-.099-1.288-.099H11.25Z"
      />
    </svg>
  );
};
export default SvgSignpost;
