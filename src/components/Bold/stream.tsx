import * as React from "react";
import type { SVGProps } from "react";
const SvgStream = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12.5v-1c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554c.702.855.861 2.031.897 4.038l.67-.33c1.945-.972 2.918-1.459 3.63-1.019.711.44.711 1.528.711 3.703v.292c0 2.175 0 3.263-.711 3.703-.712.44-1.685-.047-3.63-1.02l-.67-.329c-.036 2.007-.195 3.183-.897 4.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5Zm8.076-4.48a.75.75 0 0 0-1.152 0l-2.5 3a.75.75 0 1 0 1.152.96l1.174-1.408V15.5a.75.75 0 0 0 1.5 0v-4.928l1.174 1.408a.75.75 0 0 0 1.152-.96l-2.5-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStream;