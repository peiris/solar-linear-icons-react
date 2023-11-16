import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" d="M19 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.944 3.25h3.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.924.925 1.219 2.163 1.326 3.77.577.253 1.013.79 1.06 1.47.005.061.005.126.005.186v3.866c0 .06 0 .125-.004.185-.048.68-.484 1.218-1.061 1.472-.107 1.606-.402 2.844-1.326 3.769-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm10.224 12.5H18.23c-2.145 0-3.981-1.628-3.981-3.75s1.836-3.75 3.98-3.75h1.938c-.114-1.341-.371-2.05-.87-2.548-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-3c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289 0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h3c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.499-.498.756-1.206.87-2.548Zm.756-6H18.23c-1.424 0-2.481 1.059-2.481 2.25s1.057 2.25 2.48 2.25h2.718c.206-.013.295-.152.302-.236V9.986c-.007-.084-.096-.223-.302-.235h-.024ZM7 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWallet2;
