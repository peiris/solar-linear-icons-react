import * as React from "react";
import type { SVGProps } from "react";
const SvgFloorLamp = (props: SVGProps<SVGSVGElement>) => {
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
        d="m13.747 3.062-3.593-.019A2.036 2.036 0 0 1 11.947 2a2.078 2.078 0 0 1 1.8 1.062ZM12.75 7.034a3.052 3.052 0 0 0 2.123-1.96c.184-.534-.295-1.008-.862-1.011l-4.114-.021c-.568-.003-1.043.466-.855 1.003a3.126 3.126 0 0 0 2.208 1.999v6.363a4.828 4.828 0 0 0-.387-.334l-.011-.01-3.887-2.777-.076-.057a3.127 3.127 0 0 0-.26-2.836c-.305-.48-.968-.398-1.318.05L2.78 10.685c-.35.447-.274 1.117.26 1.304a3.052 3.052 0 0 0 2.97-.546l.07.053 3.876 2.77a3.39 3.39 0 0 1 1.295 2.637v4.347H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-4.313a3.39 3.39 0 0 1 1.295-2.67l3.876-2.77.131-.1c.835.736 1.995.951 3.022.592.534-.187.61-.857.26-1.305l-2.532-3.241c-.35-.448-1.013-.53-1.318-.05a3.127 3.127 0 0 0-.285 2.77l-.164.123-3.887 2.778-.012.009a4.867 4.867 0 0 0-.386.334V7.034ZM2.157 9.857l2.212-2.831a2.036 2.036 0 0 0-1.93.76 2.078 2.078 0 0 0-.282 2.07ZM19.745 7.026l2.211 2.83a2.078 2.078 0 0 0-.282-2.07 2.035 2.035 0 0 0-1.93-.76Z"
      />
    </svg>
  );
};
export default SvgFloorLamp;
