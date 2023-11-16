import * as React from "react";
import type { SVGProps } from "react";
const SvgUserPlus = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5c0-1.65 0-2.475.513-2.987C14.025 15 14.85 15 16.5 15c1.65 0 2.475 0 2.987.513C20 16.025 20 16.85 20 18.5c0 1.65 0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22Zm.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973v-.973Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.678 13.503c-.473.005-.914.023-1.298.074-.643.087-1.347.293-1.928.875-.582.581-.788 1.285-.874 1.928-.078.578-.078 1.284-.078 2.034v.172c0 .75 0 1.456.078 2.034.06.451.18.932.447 1.38H12c-8 0-8-2.015-8-4.5S7.582 13 12 13c1.326 0 2.577.181 3.678.503Z"
      />
    </svg>
  );
};
export default SvgUserPlus;
