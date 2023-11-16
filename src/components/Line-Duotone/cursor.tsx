import * as React from "react";
import type { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="m12.636 15.262-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702-.662-.146-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.232 4.39 4.392c.84-.84 2.47-.24 5.73.962L15.57 7.36c1.633.602 2.45.903 2.596 1.565.145.662-.47 1.277-1.702 2.508l-1.202 1.203"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m12.636 15.262 3.938 3.938c.408.408.612.612.84.706.303.126.643.126.947 0 .227-.094.431-.298.839-.706s.611-.612.706-.84a1.238 1.238 0 0 0 0-.946c-.095-.228-.298-.432-.706-.84l-3.938-3.938"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCursor;
