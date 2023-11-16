import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChair = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.936 2.995a17.745 17.745 0 0 0-5.872 0l-.398.066c-1.857.312-3.113 1.987-2.89 3.784l.018.145c.017.136.14.26.313.26H17.893a.308.308 0 0 0 .313-.26l.018-.145.745.093-.745-.093c.223-1.797-1.033-3.472-2.89-3.784l-.398-.066Zm.992 5.755h1.965c.905 0 1.689-.664 1.802-1.575l-.744-.092.744.092.018-.145c.325-2.621-1.508-5.008-4.13-5.448l-.398-.067a19.245 19.245 0 0 0-6.37 0l-.397.067c-2.623.44-4.456 2.827-4.13 5.448l.017.145A1.808 1.808 0 0 0 6.107 8.75h1.965l-1.67 7.798a.746.746 0 0 0-.133.619l-1.002 4.676a.75.75 0 1 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314l-1.003-4.676a.752.752 0 0 0-.132-.619L15.928 8.75Zm-1.534 0H9.606L8 16.25h8.002l-1.607-7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBarChair;
