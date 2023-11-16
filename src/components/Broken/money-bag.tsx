import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyBag = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3.172 20.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14c0-1.17 0-2.158-.035-3m-1.137-3.828C19.657 6 17.771 6 14 6h-4C6.229 6 4.343 6 3.172 7.172 2 8.343 2 10.229 2 14c0 1.17 0 2.158.035 3M12 2c1.886 0 2.828 0 3.414.586C16 3.172 16 4.114 16 6M8.586 2.586C8 3.172 8 4.114 8 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 17.333c1.105 0 2-.746 2-1.666 0-.92-.895-1.667-2-1.667s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666"
      />
    </svg>
  );
};
export default SvgMoneyBag;
