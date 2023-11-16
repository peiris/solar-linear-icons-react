import * as React from "react";
import type { SVGProps } from "react";
const SvgBagCheck = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75Zm3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328c-.143.012-.28.026-.414.043-1.01.125-1.842.387-2.55.974-.707.587-1.118 1.357-1.427 2.327-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163-.06 1.365.144 2.495.914 3.422.77.928 1.843 1.336 3.195 1.529 1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188 1.352-.193 2.426-.601 3.196-1.529.77-.927.972-2.057.913-3.422-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666-.31-.97-.72-1.74-1.428-2.327-.707-.587-1.54-.85-2.55-.974a11.23 11.23 0 0 0-.414-.043ZM8.02 6.86c-.855.105-1.372.304-1.776.64-.403.334-.694.805-.956 1.627-.267.84-.478 1.958-.774 3.537-.416 2.217-.711 3.8-.764 5.013-.052 1.19.14 1.88.569 2.399.43.517 1.073.832 2.253 1 1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173 1.18-.169 1.823-.484 2.253-1.001.43-.518.621-1.208.57-2.4-.054-1.211-.349-2.795-.765-5.012-.296-1.58-.506-2.696-.774-3.537-.262-.822-.552-1.293-.956-1.628-.404-.335-.92-.534-1.776-.64-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11Zm6.478 5.08a.75.75 0 0 1 .063 1.058l-2.667 3a.75.75 0 0 1-1.062.06l-1.334-1.2a.75.75 0 0 1 1.004-1.116l.772.696 2.166-2.436a.75.75 0 0 1 1.058-.063Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBagCheck;