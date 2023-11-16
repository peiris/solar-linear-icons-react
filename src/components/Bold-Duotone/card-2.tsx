import * as React from "react";
import type { SVGProps } from "react";
const SvgCard2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-.442-.002-1.608-.004-2H2c-.002.392 0 1.558 0 2 0 3.771 0 5.657 1.171 6.828C4.343 20 6.23 20 10 20Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M5.25 13.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM5.25 16.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.197 12.293c-.323-.043-.72-.043-1.152-.043h-.09c-.433 0-.83 0-1.152.043-.356.048-.731.16-1.04.47-.31.309-.422.684-.47 1.04-.043.323-.043.72-.043 1.152v.09c0 .433 0 .83.043 1.152.048.356.16.731.47 1.04.309.31.684.422 1.04.47.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043.356-.048.731-.16 1.04-.47.31-.309.422-.684.47-1.04.043-.323.043-.72.043-1.152v-.09c0-.433 0-.83-.043-1.152-.048-.356-.16-.731-.47-1.04-.309-.31-.684-.422-1.04-.47Zm-2.371 1.529-.003.001-.001.003a.703.703 0 0 0-.042.177c-.028.21-.03.504-.03.997s.002.787.03.997a.702.702 0 0 0 .042.177l.001.003.003.001a.702.702 0 0 0 .177.042c.21.028.504.03.997.03s.787-.002.997-.03a.702.702 0 0 0 .177-.042l.003-.001.001-.003a.702.702 0 0 0 .042-.177c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.703.703 0 0 0-.042-.177l-.001-.003-.003-.001a.702.702 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.702.702 0 0 0-.177.042Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4Z"
      />
    </svg>
  );
};
export default SvgCard2;