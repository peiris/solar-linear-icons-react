import * as React from "react";
import type { SVGProps } from "react";
const SvgSignpost2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v1h1.5V2h-1.5ZM12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v1h1.5v-1h-1.5Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.704 3.5H17.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 4.893 21 5.596 21 7c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.704c-.658 0-.986 0-1.288-.098a1.998 1.998 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894-.85-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974.44-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099ZM17.296 12.5H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098.133-.044.261-.1.383-.17.274-.16.494-.404.933-.894.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974-.44-.49-.659-.734-.933-.893a1.996 1.996 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099Z"
      />
      <path
        fill="currentColor"
        d="M12.75 20a.75.75 0 0 0-1.5 0h1.5ZM14 22.75a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5a.75.75 0 0 0 0 1.5v-1.5ZM11.25 20v2h1.5v-2h-1.5ZM14 21.25h-4v1.5h4v-1.5Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 7h6M9 16h6"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSignpost2;