import * as React from "react";
import type { SVGProps } from "react";
const SvgRollingPin = (props: SVGProps<SVGSVGElement>) => {
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
        d="m13.157 17.013 3.855-3.856c1.454-1.454 2.182-2.181 2.182-3.085 0-.605-.327-1.131-.98-1.85a38.28 38.28 0 0 0-1.202-1.234c-.48-.48-.88-.881-1.234-1.203-.719-.652-1.245-.979-1.85-.979-.904 0-1.63.727-3.085 2.182l-3.856 3.855c-1.454 1.454-2.18 2.182-2.18 3.085 0 .605.326 1.131.978 1.85.322.354.722.755 1.202 1.235.48.48.88.88 1.235 1.202.718.652 1.245.979 1.85.979.903 0 1.63-.727 3.085-2.181ZM21.066 2.562c.041.037.09.086.188.184s.147.147.184.188a2.181 2.181 0 0 1-.262 3.17c-.044.034-.1.074-.213.155l-1.52 1.086-.118-.132c-.346-.38-.768-.803-1.232-1.266l-.04-.04a38.913 38.913 0 0 0-1.267-1.232l-.13-.118 1.085-1.52c.08-.113.12-.169.155-.213a2.181 2.181 0 0 1 3.17-.262ZM4.557 16.655l.118.131c.346.381.768.803 1.231 1.267l.041.04c.463.464.886.886 1.266 1.232l.132.118-1.086 1.52c-.08.113-.12.169-.156.213a2.181 2.181 0 0 1-3.169.262 5.725 5.725 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.181 2.181 0 0 1 .262-3.17c.044-.034.1-.075.213-.155l1.52-1.086Z"
      />
    </svg>
  );
};
export default SvgRollingPin;
