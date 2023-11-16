import * as React from "react";
import type { SVGProps } from "react";
const SvgWirelessCharge = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.117 20.924a.76.76 0 0 0 .133.04V22a.75.75 0 0 0 1.5 0v-1.035a.76.76 0 0 0 .133-.04 1 1 0 0 0 .54-.542c.077-.184.077-.417.077-.883v-.604a9.025 9.025 0 0 1-3-.043v.647c0 .466 0 .7.076.883a1 1 0 0 0 .541.541Z"
      />
      <path
        fill="currentColor"
        d="M21 10.073A8.826 8.826 0 0 1 12.073 19C7.103 18.96 3.04 14.898 3 9.927A8.826 8.826 0 0 1 11.927 1c4.97.04 9.033 4.102 9.073 9.073Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M13.374 6.457c.3.286.312.76.026 1.06L11.75 9.25H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026Z"
      />
    </svg>
  );
};
export default SvgWirelessCharge;
