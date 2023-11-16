import * as React from "react";
import type { SVGProps } from "react";
const SvgBed = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.002 12.267a2 2 0 0 0-.85.968C2 13.602 2 14.068 2 15c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.252.104.55.137 1.015.147V20a.75.75 0 0 0 1.5 0v-2h12.5v2a.75.75 0 0 0 1.5 0v-2.005c.464-.01.763-.043 1.015-.147a2 2 0 0 0 1.083-1.083C22 16.398 22 15.932 22 15c0-.932 0-1.398-.152-1.765a2 2 0 0 0-.85-.968L19.25 12H4.75l-1.748.267Z"
      />
      <path
        fill="currentColor"
        d="M10.998 4h2c3.77 0 5.656 0 6.828 1.172 1.023 1.022 1.153 2.588 1.17 5.477v1.617L19.25 12H4.75l-1.748.267H3V10.65c.017-2.889.147-4.455 1.17-5.477C5.34 4 7.225 4 10.997 4Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M19 10.5c0-1.186-.002-1.983-.081-2.578-.076-.568-.206-.811-.365-.971-.158-.16-.399-.293-.96-.37-.589-.079-1.377-.081-2.55-.081h-2.131v4H19ZM11.087 10.5v-4h-2.13c-1.174 0-1.962.002-2.55.082-.562.076-.803.208-.961.369-.159.16-.29.403-.365.971C5.001 8.517 5 9.314 5 10.5h6.087Z"
      />
    </svg>
  );
};
export default SvgBed;
