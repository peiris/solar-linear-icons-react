import * as React from "react";
import type { SVGProps } from "react";
const SvgHandHeart = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 4.83c0 1.547 1.726 3.178 3.15 4.26.799.606 1.198.91 1.85.91.652 0 1.051-.304 1.85-.91C15.274 8.007 17 6.376 17 4.83c0-2.79-2.75-3.833-5-1.677C9.75.997 7 2.039 7 4.829Z"
      />
      <path
        fill="currentColor"
        d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009.133-.231.334-.348.736-.582 2.646-1.539 6.403-2.405 8.91-.91.168.101.32.223.45.368a1.492 1.492 0 0 1-.126 2.134.998.998 0 0 1-.427.24c.12-.014.235-.03.345-.047.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.887 1.887 0 0 1 2.22 0c.573.433.749 1.146.386 1.728-.423.678-1.019 1.545-1.591 2.075-.573.53-1.426 1.004-2.122 1.34-.772.373-1.624.587-2.491.728-1.758.284-3.59.24-5.33-.118a15.031 15.031 0 0 0-3.017-.308Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgHandHeart;
