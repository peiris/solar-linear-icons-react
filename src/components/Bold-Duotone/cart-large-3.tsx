import * as React from "react";
import type { SVGProps } from "react";
const SvgCartLarge3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
      <path
        fill="currentColor"
        d="M3.04 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549.303.149.437.27.525.398.09.132.16.314.2.677.04.38.041.875.041 1.615V9.64c0 2.942.064 3.912.93 4.826.735.776 1.85.893 3.875.91l1.524.004h4.954c1.56 0 2.341 0 2.893-.45.552-.45.71-1.214 1.024-2.742l.5-2.425c.347-1.74.52-2.609.077-3.186-.425-.552-1.83-.576-3.427-.577H6.492a9.029 9.029 0 0 0-.044-.738c-.053-.497-.17-.95-.452-1.362-.284-.416-.662-.682-1.102-.899-.412-.202-.936-.386-1.553-.603l-.301-.106Z"
        opacity={0.6}
      />
      <path
        fill="currentColor"
        d="m8.15 6 1.654 9.377 1.524.003L9.673 6H8.149ZM15.826 6l-1.655 9.38h1.524L17.35 6h-1.524Z"
      />
    </svg>
  );
};
export default SvgCartLarge3;
