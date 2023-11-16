import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphoneRotateAngle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.627 14.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162 0 .267.134.6.547.984.414.385 1.053.766 1.907 1.102 1.21.477 2.775.833 4.546.998v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.313A.75.75 0 0 1 9.75 22v-.66c-1.944-.17-3.7-.558-5.096-1.108-.956-.377-1.781-.843-2.38-1.4-.598-.558-1.024-1.261-1.024-2.082 0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122Zm16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338 0 1.378-1.168 2.41-2.547 3.101-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 0 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307 1.294-.648 1.719-1.303 1.719-1.76 0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19 9v10s-4.157 2-7 2-7-2-7-2V9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 4.787 19 6.19 19 9Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
      />
    </svg>
  );
};
export default SvgSmartphoneRotateAngle;
