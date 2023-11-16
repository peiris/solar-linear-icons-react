import * as React from "react";
import type { SVGProps } from "react";
const SvgUserHandUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M1.818 5.272a.75.75 0 0 1 .91.546l.382 1.528a6.709 6.709 0 0 0 4.975 4.904H16a4.124 4.124 0 0 1 4.096 3.642l.649 5.52a.75.75 0 1 1-1.49.176l-.65-5.52A2.624 2.624 0 0 0 16 13.75H7.918l-.08-.018A8.209 8.209 0 0 1 1.654 7.71l-.382-1.528a.75.75 0 0 1 .545-.91Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 13.75V18c0 1.886 0 2.828.586 3.414C9.172 22 10.114 22 12 22c1.886 0 2.828 0 3.414-.586C16 20.828 16 19.886 16 18v-4.25H8Z"
        opacity={0.5}
      />
      <circle cx={12} cy={6} r={4} fill="currentColor" />
    </svg>
  );
};
export default SvgUserHandUp;
