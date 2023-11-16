import * as React from "react";
import type { SVGProps } from "react";
const SvgPenNewRound = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.5} />
      <path
        fill="currentColor"
        d="M13.926 14.302c.245-.191.467-.413.912-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.066 6.066 0 0 1-2.3-1.449 6.066 6.066 0 0 1-1.45-2.3c-.061-.18-.292-.24-.426-.106l-5.54 5.54c-.445.444-.667.667-.858.912a5.045 5.045 0 0 0-.577.932c-.133.28-.233.579-.431 1.175l-.257.77-.409 1.226-.382 1.148a.817.817 0 0 0 1.032 1.033l1.15-.383 1.224-.408.77-.257c.597-.199.895-.298 1.175-.432.331-.158.644-.35.933-.576ZM22.113 6.17a3.028 3.028 0 0 0-4.282-4.283l-.179.178a.734.734 0 0 0-.206.651c.027.15.077.37.168.633a4.911 4.911 0 0 0 1.174 1.863 4.91 4.91 0 0 0 1.862 1.174c.263.09.483.141.633.168.24.043.48-.035.652-.207l.178-.178Z"
      />
    </svg>
  );
};
export default SvgPenNewRound;
