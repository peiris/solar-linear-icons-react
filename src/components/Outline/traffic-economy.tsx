import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficEconomy = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.903 22.543A10.75 10.75 0 0 0 22.75 12a.75.75 0 0 0-1.5 0A9.25 9.25 0 1 1 12 2.75a.75.75 0 0 0 0-1.5 10.75 10.75 0 0 0-2.097 21.293Z"
      />
      <path
        fill="currentColor"
        d="M12 8.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75ZM14.687 1.589a.75.75 0 1 0-.374 1.452 9.267 9.267 0 0 1 6.646 6.646.75.75 0 0 0 1.452-.374 10.768 10.768 0 0 0-7.724-7.724Z"
      />
    </svg>
  );
};
export default SvgTrafficEconomy;
