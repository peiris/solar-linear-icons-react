import * as React from "react";
import type { SVGProps } from "react";
const SvgElectricRefueling = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v13.25h13V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M3 21.25H2a.75.75 0 0 0 0 1.5h15.25a.75.75 0 0 0 0-1.5H3ZM10.143 10.386a.75.75 0 1 0-1.286-.772l-1.5 2.5A.75.75 0 0 0 8 13.25h1.675l-.818 1.364a.75.75 0 0 0 1.286.772l1.5-2.5A.75.75 0 0 0 11 11.75H9.325l.818-1.364ZM16 17.75h1.571c.375 0 .679.304.679.679v.071a2.25 2.25 0 1 0 4.5 0V7.602c0-.157 0-.265-.006-.37a3.75 3.75 0 0 0-1.24-2.582c-.08-.07-.164-.138-.286-.236l-1.25-1a.75.75 0 1 0-.936 1.172l1.233.986c.144.116.194.156.237.195.443.397.711.954.745 1.549a6.1 6.1 0 0 1 .003.306V8h-.75A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423l1.224.408v4.75a.75.75 0 0 1-1.5 0v-.071a2.179 2.179 0 0 0-2.179-2.179H16v1.5Z"
      />
    </svg>
  );
};
export default SvgElectricRefueling;
