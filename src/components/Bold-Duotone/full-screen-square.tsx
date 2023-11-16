import * as React from "react";
import type { SVGProps } from "react";
const SvgFullScreenSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M10.004 6.75a.75.75 0 0 0-.013-1.5c-.85.007-1.577.034-2.179.152-.623.122-1.167.351-1.613.797-.446.446-.675.99-.797 1.613-.118.602-.145 1.328-.152 2.179a.75.75 0 0 0 1.5.013c.007-.856.035-1.454.124-1.904.084-.428.212-.666.386-.84.174-.174.412-.302.84-.386.45-.088 1.048-.117 1.904-.124ZM14.007 5.25a.75.75 0 1 0-.013 1.5c.856.007 1.454.035 1.903.124.429.084.666.212.84.386.175.174.303.412.387.84.088.45.116 1.048.124 1.904a.75.75 0 0 0 1.5-.013c-.008-.85-.034-1.577-.152-2.179-.122-.623-.352-1.167-.798-1.613-.446-.446-.99-.675-1.612-.797-.603-.118-1.329-.145-2.18-.152ZM6.75 13.994a.75.75 0 0 0-1.5.013c.007.85.034 1.577.152 2.179.122.623.351 1.167.797 1.613.446.446.99.675 1.613.797.602.119 1.328.145 2.179.152a.75.75 0 0 0 .013-1.5c-.856-.007-1.454-.036-1.904-.123-.428-.084-.666-.213-.84-.387-.174-.174-.302-.412-.386-.84-.088-.45-.117-1.048-.124-1.904ZM18.748 14.007a.75.75 0 1 0-1.5-.013c-.008.856-.036 1.454-.124 1.904-.084.428-.212.666-.386.84-.175.174-.412.303-.84.387-.45.087-1.048.116-1.904.123a.75.75 0 1 0 .013 1.5c.85-.007 1.576-.034 2.179-.152.623-.122 1.166-.351 1.612-.797.446-.446.676-.99.798-1.613.118-.602.144-1.328.151-2.179Z"
      />
    </svg>
  );
};
export default SvgFullScreenSquare;