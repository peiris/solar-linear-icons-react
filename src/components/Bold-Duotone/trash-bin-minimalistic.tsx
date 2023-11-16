import * as React from "react";
import type { SVGProps } from "react";
const SvgTrashBinMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.722.722 0 0 1-.73.714H3.73A.722.722 0 0 1 3 6.524Z"
      />
      <path
        fill="currentColor"
        d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5-.454.5-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245.905.886 2.296.886 5.079.886Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.425 11.482c.413-.044.78.273.821.707l.5 5.263c.041.433-.26.82-.671.864-.412.043-.78-.273-.821-.707l-.5-5.263c-.041-.434.26-.821.671-.864ZM14.575 11.482c.412.043.713.43.671.864l-.5 5.263c-.04.434-.408.75-.82.707-.413-.044-.713-.43-.672-.864l.5-5.264c.041-.433.409-.75.82-.707Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTrashBinMinimalistic;
