import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundedMagniferBug = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.82 19.7c-.09-1.094.816-2.007 1.9-1.917.189.016.414.084.643.154l.066.02.06.018c.211.063.42.126.58.212a1.786 1.786 0 0 1 .638 2.55c-.1.151-.255.307-.41.464l-.045.044-.044.045c-.156.157-.31.313-.46.414a1.754 1.754 0 0 1-2.528-.643c-.085-.16-.147-.372-.21-.585l-.018-.06-.02-.067c-.07-.232-.137-.459-.153-.648ZM20.128 11.143c0 5.05-4.058 9.143-9.064 9.143S2 16.192 2 11.143C2 6.093 6.058 2 11.064 2s9.064 4.093 9.064 9.143ZM8.19 7.86A3.572 3.572 0 0 1 11 6.5c1.14 0 2.157.532 2.81 1.36l.68-.338a.716.716 0 0 1 .958.318.709.709 0 0 1-.319.953l-.679.338c.08.294.122.603.122.922v.236h.714c.394 0 .714.319.714.711 0 .392-.32.71-.714.71h-.714v.237c0 .32-.043.628-.122.922l.679.338a.709.709 0 0 1 .32.953.716.716 0 0 1-.959.318l-.68-.338A3.572 3.572 0 0 1 11 15.5a3.572 3.572 0 0 1-2.81-1.36l-.68.338a.716.716 0 0 1-.958-.318.709.709 0 0 1 .32-.953l.678-.338a3.54 3.54 0 0 1-.121-.922v-.236h-.715A.712.712 0 0 1 6 11c0-.392.32-.71.714-.71h.715v-.237c0-.32.042-.628.121-.922l-.679-.338a.709.709 0 0 1-.32-.953.716.716 0 0 1 .959-.318l.68.338Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.714 13.958v-3.195h1.429v1.184c0 .929-.596 1.718-1.429 2.01ZM8.857 11.947v-1.184h1.429v3.195a2.133 2.133 0 0 1-1.429-2.01ZM8.98 9.342A2.143 2.143 0 0 1 11 7.921c.933 0 1.727.593 2.021 1.421H8.979Z"
      />
    </svg>
  );
};
export default SvgRoundedMagniferBug;
