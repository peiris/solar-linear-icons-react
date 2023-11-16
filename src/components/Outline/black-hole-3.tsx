import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackHole3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.013 13.901a4.498 4.498 0 0 1-1.085-1.448c-.627-1.288-.812-2.946-.584-4.558.455-3.21 2.652-6.645 6.968-6.645a.75.75 0 0 1 0 1.5c-3.285 0-5.087 2.564-5.483 5.355a7.585 7.585 0 0 0 .002 2.204c.082-.105.172-.204.268-.296.39-.452.89-.814 1.448-1.085 1.288-.627 2.946-.812 4.558-.584 3.21.455 6.645 2.652 6.645 6.968a.75.75 0 0 1-1.5 0c0-3.285-2.564-5.087-5.355-5.483a7.677 7.677 0 0 0-1.991-.027c.64.415 1.134 1.033 1.48 1.745.626 1.288.812 2.946.584 4.558-.455 3.21-2.652 6.645-6.968 6.645a.75.75 0 0 1 0-1.5c3.284 0 5.087-2.564 5.482-5.355.121-.854.101-1.69-.041-2.432-.392.856-1.12 1.499-1.988 1.92-1.288.627-2.946.813-4.558.585C4.685 15.513 1.25 13.316 1.25 9a.75.75 0 0 1 1.5 0c0 3.284 2.564 5.087 5.355 5.482a7.4 7.4 0 0 0 2.573-.07 2.76 2.76 0 0 1-.665-.51Zm2.12-.658a1.954 1.954 0 0 1-1.08-.426 1.245 1.245 0 0 1-.296-.684c.033-.405.177-.766.426-1.08a1.25 1.25 0 1 1 .95 2.19Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBlackHole3;
