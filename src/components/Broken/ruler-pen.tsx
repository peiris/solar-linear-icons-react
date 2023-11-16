import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerPen = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 7V6c0-1.886 0-2.828-.586-3.414C20.828 2 19.886 2 18 2h-2c-1.886 0-2.828 0-3.414.586C12 3.172 12 4.114 12 6v12c0 1.886 0 2.828.586 3.414C13.172 22 14.114 22 16 22h2c1.886 0 2.828 0 3.414-.586C22 20.828 22 19.886 22 18v-7M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3M2 6V5a3 3 0 0 1 6 0v1M2 6s1.125 1 3 1 3-1 3-1M2 6v4.546M8 6v9.194c0 .622 0 .934-.038 1.239a5 5 0 0 1-.25 1.057c-.102.29-.241.569-.52 1.126l-1.18 2.36m0 0-.288.577a.809.809 0 0 1-1.448 0l-.288-.577m2.024 0H3.988m0 0-1.18-2.36c-.279-.557-.418-.836-.52-1.126a5 5 0 0 1-.25-1.057C2 16.128 2 15.816 2 15.193v-.87"
      />
    </svg>
  );
};
export default SvgRulerPen;
