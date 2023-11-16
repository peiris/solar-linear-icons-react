import * as React from "react";
import type { SVGProps } from "react";
const SvgVideocameraRecord = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="m17 9.5.658-.329c1.946-.973 2.92-1.46 3.63-1.02.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703-.712.44-1.685-.047-3.63-1.02L17 14.5v-5ZM13.56 7.44a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Z"
      />
    </svg>
  );
};
export default SvgVideocameraRecord;
