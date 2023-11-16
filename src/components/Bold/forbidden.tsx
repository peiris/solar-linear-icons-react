import * as React from "react";
import type { SVGProps } from "react";
const SvgForbidden = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 13.151V10.85c0-1.226 0-1.84-.228-2.39-.229-.552-.662-.986-1.53-1.853l-.893-.894L5.712 19.348l.894.895c.867.867 1.3 1.3 1.852 1.529.552.228 1.165.228 2.39.228h2.303c1.226 0 1.84 0 2.39-.228.552-.229.986-.662 1.853-1.53l2.849-2.848c.867-.867 1.3-1.3 1.529-1.852.228-.551.228-1.165.228-2.39ZM4.651 18.288l-.894-.894c-.867-.867-1.3-1.3-1.529-1.852C2 14.99 2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529C9.01 2 9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228.552.229.986.662 1.853 1.53l.894.893L4.65 18.288Z"
      />
    </svg>
  );
};
export default SvgForbidden;
