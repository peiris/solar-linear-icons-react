import * as React from "react";
import type { SVGProps } from "react";
const SvgCrownLine = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        
        d="m21.609 13.562.23-2.436c.18-1.912.27-2.869-.058-3.264a.992.992 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998-.618.704-.927 1.055-1.271 1.11-.191.03-.386-.001-.562-.09-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2c-.61 0-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.925.925 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11-1.195-1.36-1.792-2.04-2.268-1.998a.992.992 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21 1.183-1.21 1.371-3.216 1.749-7.228Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 18h6"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCrownLine;
