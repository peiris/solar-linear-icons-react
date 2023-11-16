import * as React from "react";
import type { SVGProps } from "react";
const SvgCartPlus = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
      <path
        fill="currentColor"
        d="M2.084 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603.44.217.818.483 1.102.899.282.412.399.865.452 1.362.024.222.037.468.044.738H17.13c1.685 0 3.202 0 3.646.577.444.577.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.472 2.293-1.024 2.742-.552.45-1.332.45-2.893.45h-5.303c-2.79 0-4.184 0-5.05-.914-.866-.914-.93-1.884-.93-4.826V7.038c0-.74 0-1.235-.042-1.615-.04-.363-.109-.545-.2-.677-.087-.129-.22-.25-.524-.398-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25V9Z"
      />
    </svg>
  );
};
export default SvgCartPlus;
