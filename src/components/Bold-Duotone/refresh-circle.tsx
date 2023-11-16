import * as React from "react";
import type { SVGProps } from "react";
const SvgRefreshCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.3} />
      <path
        fill="currentColor"
        d="M7.378 11.63h-.75.75Zm0 .926-.562.497a.75.75 0 0 0 1.08.044l-.518-.541Zm2.141-1.015a.75.75 0 0 0-1.038-1.082l1.038 1.082Zm-2.958-1.038a.75.75 0 1 0-1.122.994l1.122-.994Zm8.37-1.494a.75.75 0 1 0 1.102-1.018l-1.101 1.018ZM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88v-1.5Zm-5.416 5.38v.926h1.5v-.926h-1.5Zm1.269 1.467 1.622-1.556-1.038-1.082-1.622 1.555 1.038 1.083Zm.042-1.039-1.378-1.555-1.122.994 1.377 1.556 1.123-.995Zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26l1.1-1.02ZM16.619 11.444l.56-.498a.75.75 0 0 0-1.08-.043l.52.541Zm-2.139 1.014a.75.75 0 1 0 1.04 1.082l-1.04-1.082Zm2.96 1.04a.75.75 0 0 0 1.12-.997l-1.12.996Zm-8.393 1.507a.75.75 0 0 0-1.094 1.026l1.094-1.026Zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88v1.5Zm5.434-5.38v-.926h-1.5v.926h1.5Zm-1.27-1.467-1.619 1.555 1.04 1.082 1.618-1.555-1.039-1.082Zm-.04 1.04 1.38 1.554 1.122-.996-1.381-1.555-1.122.997ZM7.952 16.03a5.447 5.447 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245L7.953 16.03Z"
      />
    </svg>
  );
};
export default SvgRefreshCircle;
