import * as React from "react";
import type { SVGProps } from "react";
const SvgPlugCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75c-5.103 0-9.25 4.173-9.25 9.333 0 4.524 3.188 8.29 7.412 9.15.508.102 1.088-.324 1.088-1.083v-4.475a3.751 3.751 0 0 1-3-3.675v-.2c0-.84.667-1.523 1.5-1.55V9a.75.75 0 0 1 1.5 0v1.25h1.5V9a.75.75 0 0 1 1.5 0v1.25c.833.027 1.5.71 1.5 1.55v.2a3.751 3.751 0 0 1-3 3.675v4.475c0 1.468-1.229 2.89-2.887 2.552-4.917-1-8.613-5.377-8.613-10.619C1.25 6.106 6.057 1.25 12 1.25s10.75 4.856 10.75 10.833a10.84 10.84 0 0 1-6.056 9.749.75.75 0 0 1-.66-1.347 9.341 9.341 0 0 0 5.216-8.402c0-5.16-4.147-9.333-9.25-9.333Zm-2.2 9a.05.05 0 0 0-.05.05v.2a2.25 2.25 0 0 0 4.5 0v-.2a.05.05 0 0 0-.05-.05H9.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPlugCircle;
