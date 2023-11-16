import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => {
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
        d="m19.687 14.093.184-1.704c.097-.91.162-1.51.111-1.889a1.497 1.497 0 0 1-1.117-.52c-.327.201-.753.626-1.394 1.265-.495.493-.742.739-1.018.777a.832.832 0 0 1-.45-.063c-.254-.112-.424-.416-.763-1.025l-1.79-3.209c-.209-.375-.384-.69-.542-.942-.273.139-.581.217-.908.217-.327 0-.635-.078-.908-.217-.158.253-.333.567-.543.942L8.76 10.934c-.34.609-.51.913-.764 1.025a.832.832 0 0 1-.45.063c-.275-.038-.522-.284-1.017-.777-.641-.639-1.067-1.064-1.393-1.265a1.497 1.497 0 0 1-1.118.52c-.051.378.014.979.111 1.889l.184 1.704.089.85c.252 2.435.46 4.45 1.31 5.21.946.847 2.364.847 5.2.847h2.176c2.836 0 4.254 0 5.2-.847.85-.76 1.058-2.775 1.31-5.21.029-.278.058-.562.09-.85Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M20 10.5a1.5 1.5 0 1 0-.018 0H20ZM12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2.5 9A1.5 1.5 0 0 0 4 10.5h.018A1.497 1.497 0 0 0 5.5 9a1.5 1.5 0 1 0-3 0ZM4.849 18.25a17.79 17.79 0 0 1-.246-1.5h14.794c-.07.545-.148 1.05-.246 1.5H4.849Z"
      />
    </svg>
  );
};
export default SvgCrown;
