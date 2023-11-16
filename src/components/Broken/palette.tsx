import * as React from "react";
import type { SVGProps } from "react";
const SvgPalette = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 8V6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18v-6M7 19H5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.314 4.929-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056-.99-.99-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"
      />
      <path
        fill="currentColor"
        d="M18 22v-.75.75Zm0-8v.75V14Zm4 4h-.75.75Zm-.273 2.635-.668-.34.668.34Zm-1.092 1.092-.34-.668.34.668Zm1.092-6.362-.668.34.668-.34Zm-1.092-1.092-.34.668.34-.668ZM13 22.75a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-1.5-6.5H18v-1.5h-2.5v1.5ZM21.25 18c0 .712 0 1.202-.032 1.58-.03.371-.085.57-.159.715l1.337.68c.199-.39.28-.809.317-1.272.038-.454.037-1.015.037-1.703h-1.5ZM18 22.75c.688 0 1.249 0 1.703-.037.463-.037.882-.118 1.273-.317l-.681-1.337c-.145.074-.344.13-.714.16-.38.03-.869.031-1.581.031v1.5Zm3.06-2.456a1.75 1.75 0 0 1-.765.765l.68 1.337a3.25 3.25 0 0 0 1.42-1.42l-1.336-.681ZM22.75 18c0-.688 0-1.249-.037-1.703-.037-.463-.118-.882-.317-1.273l-1.337.682c.074.144.13.343.16.713.03.38.031.869.031 1.581h1.5ZM18 14.75c.712 0 1.202 0 1.58.032.371.03.57.085.715.159l.68-1.337c-.39-.199-.809-.28-1.272-.317-.454-.038-1.015-.037-1.703-.037v1.5Zm4.396.274a3.25 3.25 0 0 0-1.42-1.42l-.681 1.337c.329.167.596.435.764.765l1.337-.681ZM13 21.25H6v1.5h7v-1.5Zm5 0h-1v1.5h1v-1.5Z"
      />
    </svg>
  );
};
export default SvgPalette;
