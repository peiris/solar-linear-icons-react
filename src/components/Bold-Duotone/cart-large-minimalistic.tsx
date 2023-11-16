import * as React from "react";
import type { SVGProps } from "react";
const SvgCartLargeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.04 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549.303.149.437.27.525.398.09.132.16.314.2.677.04.38.041.875.041 1.615V9.64h15.725c.33-1.658.485-2.5.052-3.063C20.332 6 18.815 6 17.13 6H6.492a9.029 9.029 0 0 0-.044-.738c-.053-.497-.17-.95-.452-1.362-.284-.416-.662-.682-1.102-.899-.412-.202-.936-.386-1.553-.603l-.301-.106Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m20.2 12.187.5-2.424.024-.123H5c0 2.941.063 3.912.93 4.826.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45.552-.45.71-1.214 1.025-2.743Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
    </svg>
  );
};
export default SvgCartLargeMinimalistic;
