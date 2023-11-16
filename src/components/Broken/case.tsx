import * as React from "react";
import type { SVGProps } from "react";
const SvgCase = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        d="M12 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-7.682-.422.498-.56-.498.56Zm15.364 0-.498-.56.498.56ZM7.955 22.684a.75.75 0 1 0 .09-1.498l-.09 1.498ZM2.25 12c0 1.874 0 3.83.169 5.466.085.82.215 1.589.422 2.244.203.646.503 1.256.979 1.679l.996-1.121c-.183-.163-.377-.478-.545-1.008-.164-.52-.28-1.178-.36-1.948-.16-1.543-.161-3.415-.161-5.312h-1.5ZM12 22.75c2.102 0 3.746.001 5.027-.152 1.293-.154 2.33-.477 3.153-1.209l-.996-1.121c-.495.44-1.178.703-2.335.84-1.17.14-2.709.142-4.849.142v1.5Zm-3.955-1.564c-1.714-.103-2.613-.371-3.229-.918l-.996 1.121c1.016.903 2.363 1.188 4.135 1.295l.09-1.498Zm12.205-8.799c0 1.832-.013 3.616-.178 5.08-.082.731-.2 1.353-.36 1.845-.164.5-.352.799-.528.956l.996 1.121c.46-.409.755-.993.957-1.61.206-.628.338-1.362.426-2.144.176-1.562.186-3.432.187-5.247h-1.5Z"
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m14.66 14.202 3.004-.901m-8.324.9L3.332 12.4c-.595-.179-.893-.268-1.082-.482a1.002 1.002 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502.13-.16.275-.305.434-.434C3.934 5 5.159 5 7.609 5h8.782c2.45 0 3.675 0 4.502.673.16.13.305.275.434.434.673.827.673 2.052.673 4.502 0 .622 0 .932-.15 1.175a.996.996 0 0 1-.1.134c-.15.17-.369.26-.75.38"
      />
      <path
        stroke="#1C274D"
        strokeWidth={1.5}
        d="M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.116 1.3 1.939 1.32"
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
};
export default SvgCase;