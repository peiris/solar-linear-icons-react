import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073a3.196 3.196 0 0 0-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801.598 1.015 1.674 1.58 3.825 2.709l2 1.05Z"
      />
      <path
        fill="currentColor"
        d="m17.577 4.432-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641Z"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        d="M21.403 7.14a3.153 3.153 0 0 0-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708C22 15.846 22 14.583 22 12.06v-.117c0-2.525 0-3.788-.597-4.802Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBoxMinimalistic;