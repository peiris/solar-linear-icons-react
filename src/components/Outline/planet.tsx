import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanet = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 4.75a7.25 7.25 0 0 0-5.314 12.182c1.942-.448 4.336-1.359 6.792-2.667 2.294-1.223 4.23-2.572 5.605-3.822A7.253 7.253 0 0 0 12 4.75Zm7.245 7.531c-1.382 1.126-3.112 2.269-5.062 3.307-2.12 1.13-4.224 1.99-6.083 2.525a7.25 7.25 0 0 0 11.144-5.832ZM6.21 18.561a8.75 8.75 0 0 0 14.481-7.58l.09-.09c.754-.77 1.342-1.54 1.672-2.268.324-.716.458-1.544.012-2.258-.42-.67-1.185-.96-1.956-1.064-.771-.104-1.702-.044-2.72.138a8.75 8.75 0 0 0-14.481 7.58c-.758.761-1.354 1.52-1.703 2.236-.366.75-.54 1.627-.07 2.38.433.691 1.232.979 2.032 1.074.754.09 1.657.029 2.643-.148Zm-1.235-1.343A8.727 8.727 0 0 1 3.708 14.8c-.344.41-.595.785-.756 1.114-.277.567-.208.825-.145.925.072.116.305.305.937.38.343.041.755.042 1.231-.001Zm14.05-10.436a5.879 5.879 0 0 1 1.285.005c.594.08.813.262.883.374.06.095.126.33-.107.844-.156.344-.42.748-.794 1.195a8.724 8.724 0 0 0-1.267-2.418Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPlanet;
