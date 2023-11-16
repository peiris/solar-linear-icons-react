import * as React from "react";
import type { SVGProps } from "react";
const SvgChatSquareLike = (props: SVGProps<SVGSVGElement>) => {
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
        d="m13.629 20.472-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262-.338-.197-.763-.204-1.613-.219-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372-.85.015-1.275.022-1.613.219-.338.196-.548.551-.968 1.262Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M10.99 14.308c-1.327-.978-3.49-2.84-3.49-4.593 0-2.677 2.475-3.677 4.5-1.609 2.025-2.068 4.5-1.068 4.5 1.609 0 1.752-2.163 3.615-3.49 4.593-.454.335-.681.502-1.01.502-.329 0-.556-.167-1.01-.502Z"
      />
    </svg>
  );
};
export default SvgChatSquareLike;
