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
        d="M17.82 19.701c-.09-1.094.816-2.008 1.9-1.918.189.016.414.084.643.154l.067.02.06.018c.21.064.42.127.58.213a1.786 1.786 0 0 1 .637 2.549c-.1.152-.255.308-.41.464l-.045.045-.044.045c-.155.157-.31.313-.46.414a1.754 1.754 0 0 1-2.527-.643c-.086-.161-.148-.373-.211-.585l-.018-.06-.02-.068c-.07-.231-.137-.458-.152-.648Z"
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
        d="M11 6.5c-1.14 0-2.157.532-2.81 1.36l-.68-.338a.716.716 0 0 0-.958.318.709.709 0 0 0 .319.953l.679.338a3.54 3.54 0 0 0-.121.922v.236h-.715A.712.712 0 0 0 6 11c0 .392.32.71.714.71h.715v.237c0 .32.042.628.12.922l-.678.338a.709.709 0 0 0-.32.953c.177.35.606.493.959.318l.68-.338A3.572 3.572 0 0 0 11 15.5c1.14 0 2.157-.532 2.81-1.36l.68.338a.716.716 0 0 0 .958-.318.709.709 0 0 0-.319-.953l-.679-.338c.08-.294.121-.603.121-.922v-.236h.715A.712.712 0 0 0 16 11c0-.392-.32-.71-.714-.71h-.715v-.237c0-.32-.042-.628-.12-.922l.678-.338a.709.709 0 0 0 .32-.953.716.716 0 0 0-.959-.318l-.68.338A3.572 3.572 0 0 0 11 6.5Zm0 1.42c-.933 0-1.726.594-2.02 1.422h4.041a2.143 2.143 0 0 0-2.02-1.421Zm-2.143 4.027v-1.184h1.429v3.194a2.133 2.133 0 0 1-1.429-2.01Zm2.858 2.01v-3.194h1.428v1.184c0 .928-.596 1.718-1.428 2.01Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoundedMagniferBug;
