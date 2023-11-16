import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.3}>
        <path d="M22 5.887v12.227c0 1.702 0 2.553-.542 2.832-.543.28-1.235-.215-2.62-1.205l-1.582-1.13c-.616-.439-.924-.659-1.09-.982C16 17.306 16 16.927 16 16.171V7.83c0-.757 0-1.135.166-1.458.166-.324.474-.543 1.09-.983l1.581-1.13c1.386-.99 2.078-1.484 2.62-1.205.543.28.543 1.13.543 2.833ZM2 5.887v12.227c0 1.702 0 2.553.542 2.832.543.28 1.235-.215 2.62-1.205l1.582-1.13c.616-.439.924-.659 1.09-.982C8 17.306 8 16.927 8 16.171V7.83c0-.757 0-1.135-.166-1.458-.166-.324-.474-.543-1.09-.983l-1.582-1.13c-1.385-.99-2.077-1.484-2.62-1.205C2 3.334 2 4.184 2 5.887Z" />
      </g>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75Zm0-8a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75Zm0-8a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFlipHorizontal;
