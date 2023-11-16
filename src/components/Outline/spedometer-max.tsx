import * as React from "react";
import type { SVGProps } from "react";
const SvgSpedometerMax = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.78 11.25H4a.75.75 0 0 1 0 1.5H2.78a9.21 9.21 0 0 0 2.17 5.239l1.02-1.02a.75.75 0 0 1 1.06 1.061l-1.019 1.02A9.213 9.213 0 0 0 12 21.25a9.213 9.213 0 0 0 5.989-2.2l-1.02-1.02a.75.75 0 1 1 1.061-1.06l1.02 1.019a9.21 9.21 0 0 0 2.17-5.239H20a.75.75 0 0 1 0-1.5h1.22a9.21 9.21 0 0 0-2.17-5.239l-1.02 1.02a.75.75 0 1 1-1.06-1.061l1.019-1.02a9.21 9.21 0 0 0-5.239-2.17V4a.75.75 0 0 1-1.5 0V2.78a9.21 9.21 0 0 0-5.239 2.17l1.02 1.02A.75.75 0 0 1 5.97 7.03L4.95 6.011a9.21 9.21 0 0 0-2.17 5.239ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm12.584-1.348a2.25 2.25 0 0 0-3.182 3.182c.115.115.345.258.718.404.359.14.793.262 1.259.365.76.167 1.22.265 1.565.27.281.006.395-.051.512-.167.116-.117.173-.231.168-.512-.006-.345-.104-.805-.271-1.565a8.6 8.6 0 0 0-.365-1.26c-.146-.372-.29-.602-.404-.717ZM9.59 9.59a3.75 3.75 0 0 1 5.303 0c.33.33.566.785.74 1.23.18.46.322.976.434 1.485l.014.066c.148.672.283 1.283.292 1.796.01.593-.143 1.134-.608 1.598-.464.465-1.005.618-1.598.608-.513-.01-1.123-.144-1.796-.292l-.066-.014a10.074 10.074 0 0 1-1.484-.434c-.446-.174-.9-.41-1.231-.74a3.75 3.75 0 0 1 0-5.303Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSpedometerMax;