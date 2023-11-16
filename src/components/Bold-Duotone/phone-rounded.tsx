import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoneRounded = (props: SVGProps<SVGSVGElement>) => {
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
        d="m10.687 6.48-.65-1.164c-.884-1.585-3.106-1.772-4.5-.379-.836.837-1.487 1.863-1.53 2.996-.056 1.47.217 3.728 1.83 6.173l4.278-4.278c.922-.923 1.157-2.3.572-3.349Zm3.485 7.405-4.278 4.279c2.445 1.612 4.704 1.885 6.173 1.83 1.133-.043 2.159-.695 2.996-1.532 1.393-1.393 1.206-3.615-.38-4.5l-1.162-.649c-1.05-.585-2.426-.35-3.349.572Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.025 12.976c-2.03-2.029-.91-3.148-.91-3.148l-4.279 4.278c.482.731 1.084 1.479 1.832 2.227.748.748 1.495 1.349 2.226 1.83l4.278-4.277s-1.119 1.119-3.148-.91Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgPhoneRounded;
