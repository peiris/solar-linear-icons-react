import * as React from "react";
import type { SVGProps } from "react";
const SvgHandMoney = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009.133-.231.334-.348.736-.582 2.646-1.539 6.403-2.405 8.91-.91.168.101.32.223.45.368a1.492 1.492 0 0 1-.126 2.134.998.998 0 0 1-.427.24c.12-.014.235-.03.345-.047.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.887 1.887 0 0 1 2.22 0c.573.433.749 1.146.386 1.728-.423.678-1.019 1.545-1.591 2.075-.573.53-1.426 1.004-2.122 1.34-.772.373-1.624.587-2.491.728-1.758.284-3.59.24-5.33-.118a15.031 15.031 0 0 0-3.017-.308ZM6.586 2.586c-.367.367-.504.873-.555 1.664A2.25 2.25 0 0 0 8.25 2.03c-.79.052-1.297.189-1.664.556ZM17.414 2.586c-.367-.367-.873-.504-1.664-.555a2.25 2.25 0 0 0 2.22 2.219c-.052-.79-.189-1.297-.556-1.664ZM17.414 9.414c-.367.367-.873.504-1.664.555a2.25 2.25 0 0 1 2.22-2.219c-.052.79-.189 1.297-.556 1.664ZM6.586 9.414c.367.367.873.504 1.664.555A2.25 2.25 0 0 0 6.03 7.75c.052.79.189 1.297.556 1.664Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 5.75A3.75 3.75 0 0 0 9.75 2h4.5A3.75 3.75 0 0 0 18 5.75v.5A3.75 3.75 0 0 0 14.25 10h-4.5A3.75 3.75 0 0 0 6 6.25v-.5ZM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHandMoney;