import * as React from "react";
import type { SVGProps } from "react";
const SvgBoombox = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.06.44.075.964.079 1.57.648.021 1.226.06 1.74.128 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238.514-.069 1.092-.107 1.74-.128.004-.606.02-1.13.079-1.57.084-.627.27-1.194.725-1.65.456-.455 1.023-.64 1.65-.725.595-.08 1.345-.08 2.243-.08ZM8.752 5.252c.378-.002.775-.002 1.192-.002h4.112c.417 0 .814 0 1.192.002-.004-.57-.018-1-.064-1.347-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.046.346-.06.776-.064 1.347ZM5.71 6.89c-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.027-.14 2.382-.14 4.289 0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289 0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14ZM5.25 9.5A.75.75 0 0 1 6 8.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm2 4.378a2.251 2.251 0 1 0 1.5 0V15a.75.75 0 0 1-1.5 0v-1.122ZM4.25 16a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm12.72-2.03a2.251 2.251 0 1 0 1.06 1.06l-.793.793a.75.75 0 1 1-1.06-1.06l.793-.794Zm-3.622-.622a3.75 3.75 0 1 1 5.304 5.304 3.75 3.75 0 0 1-5.304-5.304Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBoombox;