import * as React from "react";
import type { SVGProps } from "react";
const SvgStickerSmileSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="m16.5 21.839-.038.008h-.004c-.016.004-.031.008-.047.01l-.002.001.05-.01.041-.01Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22 15c-.584 0-1.076 0-1.5.008-.928.016-1.528.069-2.045.237a5 5 0 0 0-3.21 3.21c-.168.517-.22 1.117-.237 2.045C15 20.924 15 21.416 15 22c.483 0 .954-.049 1.41-.142l.048-.01h.004l.038-.01a7.01 7.01 0 0 0 5.339-5.338c.105-.483.161-.985.161-1.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22h1.5v-.26c-.001-1.607-.002-2.765.318-3.749.07-.212.149-.42.239-.623A5.711 5.711 0 0 1 12 17.75a5.766 5.766 0 0 1-3.447-1.147.75.75 0 0 1 .894-1.206c.728.54 1.607.853 2.553.853s1.825-.313 2.553-.852a.75.75 0 0 1 .872-.016 6.499 6.499 0 0 1 2.566-1.564c.984-.32 2.142-.319 3.75-.318H22V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12Zm13 0c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5Zm-6 0c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStickerSmileSquare;
