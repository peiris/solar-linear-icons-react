import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.75 7a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.188 8.004C21.126 8 21.058 8 20.988 8H18.215C15.944 8 14 9.736 14 12c0 2.264 1.944 4 4.215 4H20.988c.07 0 .138 0 .2-.004.923-.056 1.739-.757 1.808-1.737.004-.064.004-.133.004-.197V9.938c0-.064 0-.133-.004-.197-.069-.98-.885-1.68-1.808-1.737Zm-3.217 5.063c.584 0 1.058-.478 1.058-1.067 0-.59-.474-1.067-1.058-1.067-.585 0-1.06.478-1.06 1.067 0 .59.475 1.067 1.06 1.067Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.14 8.002c0-1.181-.044-2.448-.798-3.355a3.773 3.773 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 3 14.644 3 12.806 3h-2.112C8.856 3 7.4 3 6.26 3.153c-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87C2 8.401 2 9.856 2 11.694v.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.204-.205.378-.425.526-.66.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 16 14 14.264 14 12c0-2.264 1.944-4 4.215-4h2.773c.052 0 .103 0 .151.002Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgWallet;
