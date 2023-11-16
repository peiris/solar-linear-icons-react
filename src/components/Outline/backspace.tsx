import * as React from "react";
import type { SVGProps } from "react";
const SvgBackspace = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.03 8.97a.75.75 0 0 0-1.06 1.06L11.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L13 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L14.06 12l1.97-1.97a.75.75 0 0 0-1.06-1.06L13 10.94l-1.97-1.97Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.32 4.634c-.766-.745-1.735-1.074-2.933-1.231-1.168-.153-2.662-.153-4.553-.153h-2.728c-1.083 0-1.948 0-2.656.066-.73.068-1.35.21-1.935.525-.586.316-1.04.754-1.49 1.324-.433.551-.892 1.266-1.465 2.158L2.837 8.45c-.478.744-.869 1.352-1.135 1.882-.278.553-.452 1.08-.452 1.669s.174 1.116.452 1.67c.266.53.657 1.137 1.135 1.881l.723 1.126c.573.892 1.032 1.607 1.466 2.158.449.57.903 1.008 1.49 1.324.584.315 1.203.457 1.934.525.708.066 1.573.066 2.656.066h2.728c1.891 0 3.385 0 4.553-.153 1.198-.157 2.167-.486 2.932-1.231.768-.747 1.11-1.698 1.273-2.874.158-1.14.158-2.598.158-4.434v-.116c0-1.836 0-3.293-.158-4.434-.162-1.176-.505-2.126-1.273-2.874Zm-7.541.116c1.958 0 3.354.002 4.413.14 1.04.136 1.642.392 2.081.82.436.423.695 1.001.834 2.004.141 1.026.143 2.379.143 4.286 0 1.907-.002 3.26-.143 4.286-.139 1.003-.398 1.58-.834 2.005-.439.427-1.041.683-2.081.819-1.06.139-2.455.14-4.413.14h-2.637c-1.127 0-1.922 0-2.553-.06-.615-.057-1.017-.165-1.362-.352-.344-.185-.65-.457-1.023-.932-.384-.487-.804-1.14-1.402-2.071l-.681-1.06c-.505-.787-.852-1.328-1.078-1.779-.219-.435-.293-.725-.293-.996s.074-.561.293-.996c.226-.45.573-.992 1.078-1.779l.68-1.06c.599-.93 1.02-1.584 1.403-2.071.374-.475.68-.747 1.023-.932.345-.187.747-.295 1.362-.353.63-.058 1.426-.059 2.553-.059h2.637Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBackspace;
