import * as React from "react";
import type { SVGProps } from "react";
const SvgWashingMachine = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.125.928.148 2.067.152 3.45a.698.698 0 0 1 0 .073l.001.91v3.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.46.459-.994.761-1.609.963V22a.75.75 0 0 1-1.5 0v-.374c-1.102.124-2.482.124-4.194.124h-2.112c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-.678c-.615-.202-1.15-.504-1.609-.963-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.034a.768.768 0 0 1 .001-.072c.004-1.384.027-2.523.152-3.451.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153ZM3.75 9.75V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289V9.75H3.75Zm16.494-1.5H3.756c.01-1.034.042-1.858.134-2.54.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h2c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.092.68.123 1.505.134 2.539ZM5.75 5.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM12 12.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 15a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgWashingMachine;
