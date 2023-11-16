import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudBoltMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M12 22c-1.886 0-2.828 0-3.414-.586C8 20.828 8 19.886 8 18c0-1.886 0-2.828.586-3.414C9.172 14 10.114 14 12 14c1.886 0 2.828 0 3.414.586C16 15.172 16 16.114 16 18c0 1.886 0 2.828-.586 3.414C14.828 22 13.886 22 12 22Zm.916-5.75a.667.667 0 0 0-.943-.944L9.751 17.53a.667.667 0 0 0 .471 1.138h1.946l-1.084 1.084a.667.667 0 1 0 .943.943l2.222-2.223a.667.667 0 0 0-.471-1.138h-1.946l1.084-1.084Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.5 17.91V18h-.214C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52 0-.852-.001-1.631-.087-2.267-.095-.711-.32-1.463-.938-2.08-.618-.619-1.37-.844-2.08-.94-.646-.086-1.44-.086-2.306-.086h-.179c-.865 0-1.659 0-2.304.087-.711.095-1.463.32-2.08.938-.619.618-.844 1.37-.94 2.08-.086.646-.086 1.44-.086 2.305Z"
      />
    </svg>
  );
};
export default SvgCloudBoltMinimalistic;