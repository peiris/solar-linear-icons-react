import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraAdd = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697 0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21ZM16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2-3.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-3.25-2a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V15a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25V11Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18 9.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Z"
      />
    </svg>
  );
};
export default SvgCameraAdd;
