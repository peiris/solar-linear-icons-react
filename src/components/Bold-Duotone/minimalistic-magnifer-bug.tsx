import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimalisticMagniferBug = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.839 18.839a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022Z"
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
export default SvgMinimalisticMagniferBug;
