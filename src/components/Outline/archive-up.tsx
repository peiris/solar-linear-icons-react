import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.955 2.25H20.045c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152-.048.356-.16.731-.47 1.04-.293.294-.647.41-.987.462v5.357c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-1.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V7.7c-.34-.052-.694-.168-.987-.462-.31-.309-.422-.684-.47-1.04-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043Zm.295 5.5V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812.982.132 2.263.14 4.039.14v-6.296l-1.693 1.881a.75.75 0 0 1-1.114-1.003l3-3.334a.75.75 0 0 1 1.114 0l3 3.334a.75.75 0 0 1-1.114 1.003l-1.693-1.88v6.295c1.776 0 3.057-.008 4.04-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289V7.75H4.25ZM2.823 3.823l.003-.001a.706.706 0 0 1 .177-.042c.21-.028.504-.03.997-.03h16c.493 0 .787.002.997.03a.704.704 0 0 1 .177.042l.003.001.001.003a.703.703 0 0 1 .042.177c.028.21.03.504.03.997s-.002.787-.03.997a.703.703 0 0 1-.042.177l-.001.003-.003.001a.704.704 0 0 1-.177.042c-.21.028-.504.03-.997.03H4c-.493 0-.787-.002-.997-.03a.706.706 0 0 1-.177-.042l-.003-.001-.001-.003a.706.706 0 0 1-.042-.177c-.028-.21-.03-.504-.03-.997s.002-.787.03-.997a.706.706 0 0 1 .042-.177l.001-.003Zm0 2.354Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArchiveUp;
