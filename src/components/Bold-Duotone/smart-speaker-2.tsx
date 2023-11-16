import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartSpeaker2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.047 3.435c.022.084.034.168.038.255.057 1.416-2.273 3.185-5.437 4.065-3.357.933-6.382.513-6.757-.938a1.233 1.233 0 0 1-.03-.462c.162-1.377 2.418-3.02 5.43-3.858 3.356-.934 6.382-.514 6.756.938Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12.648 7.755c-3.357.933-6.382.513-6.757-.939a1.233 1.233 0 0 1-.036-.383l-.609 6.876c.56.561 2.244 1.69 6.754 1.69 4.628 0 6.28-1.19 6.795-1.733l-.71-9.577c.057 1.417-2.273 3.186-5.437 4.066Z"
      />
      <path
        fill="currentColor"
        d="M7.03 21.413C8.006 22 9.342 22 12.016 22c2.643 0 3.964 0 4.935-.578a4.292 4.292 0 0 0 1.665-1.834c.5-1.04.422-2.409.267-5.148l-.088-1.174C18.28 13.81 16.628 15 12 15c-4.51 0-6.195-1.13-6.754-1.691l-.092 1.042c-.19 2.768-.285 4.152.21 5.204a4.295 4.295 0 0 0 1.666 1.858Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSmartSpeaker2;
