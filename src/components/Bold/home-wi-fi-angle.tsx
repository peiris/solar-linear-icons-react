import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeWiFiAngle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093C5.724 22 7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012 1.175-1.012 1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083-.54-1.127-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2c-1.154 0-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183ZM13.45 16.51c-.808-.872-2.092-.872-2.9 0a.75.75 0 1 1-1.1-1.02c1.401-1.513 3.699-1.513 5.1 0a.75.75 0 0 1-1.1 1.02Zm-4.9-2.16c1.913-2.064 4.988-2.064 6.9 0a.75.75 0 1 0 1.1-1.019c-2.506-2.705-6.594-2.705-9.1 0a.75.75 0 1 0 1.1 1.02Zm8.9-2.158c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHomeWiFiAngle;
