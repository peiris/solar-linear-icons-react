import * as React from "react";
import type { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697 0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819h-1.11Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091 0 2.26 1.865 4.091 4.167 4.091 2.3 0 4.166-1.831 4.166-4.09 0-2.26-1.865-4.092-4.166-4.092Zm0 1.637c-1.38 0-2.5 1.099-2.5 2.454 0 1.356 1.12 2.455 2.5 2.455 1.381 0 2.5-1.099 2.5-2.455 0-1.355-1.119-2.454-2.5-2.454Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCamera;
