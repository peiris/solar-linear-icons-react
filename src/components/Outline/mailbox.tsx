import * as React from "react";
import type { SVGProps } from "react";
const SvgMailbox = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.372 3.03a2.45 2.45 0 0 0-1.345-.12l-.277.053v1.655a3.95 3.95 0 0 1 2.16.194c.428.165.892.206 1.34.12V3.275a3.677 3.677 0 0 1-1.8-.214l-.078-.03ZM16.75 6.145l.277-.054a2.45 2.45 0 0 1 1.345.12 3.95 3.95 0 0 0 2.344.154l.067-.016c.567-.136.967-.644.967-1.228V2.901c0-.77-.72-1.336-1.468-1.156-.429.103-.88.074-1.292-.085l-.08-.03a3.95 3.95 0 0 0-2.166-.193l-.486.093a1.243 1.243 0 0 0-1.008 1.22v3.5H7a.754.754 0 0 0-.136.012A5.25 5.25 0 0 0 1.25 11.5v5.267a2.983 2.983 0 0 0 2.983 2.983H9.75V22a.75.75 0 0 0 1.5 0v-2.25h2.5V22a.75.75 0 0 0 1.5 0v-2.25h4.543a2.957 2.957 0 0 0 2.957-2.957V11.5c0-2.9-2.35-5.25-5.25-5.25h-.75v-.104Zm-1.5 1.604V11a.75.75 0 0 0 1.5 0V7.75h.75a3.75 3.75 0 0 1 3.75 3.75v5.293c0 .804-.652 1.457-1.457 1.457H11.75V11.5c0-1.47-.603-2.798-1.576-3.75h5.076Zm-5 10.5V11.5a3.75 3.75 0 1 0-7.5 0v5.267c0 .819.664 1.483 1.483 1.483h6.017Zm-6-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMailbox;
