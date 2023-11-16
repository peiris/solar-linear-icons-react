import * as React from "react";
import type { SVGProps } from "react";
const SvgSuitcaseTag = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.06.44.075.964.079 1.57.648.021 1.226.06 1.74.128 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238.514-.069 1.092-.107 1.74-.128.004-.606.02-1.13.079-1.57.084-.627.27-1.194.725-1.65.456-.455 1.023-.64 1.65-.725.595-.08 1.345-.08 2.243-.08ZM8.752 5.252c.378-.002.775-.002 1.192-.002h4.112c.417 0 .814 0 1.192.002-.004-.57-.018-1-.064-1.347-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.046.346-.06.776-.064 1.347ZM5.25 6.966c-.73.147-1.194.382-1.548.736-.423.423-.677 1.003-.812 2.009-.138 1.027-.14 2.382-.14 4.289 0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.354.354.817.59 1.548.736v-2.326a1.195 1.195 0 0 1-.634-.324 1.239 1.239 0 0 1-.341-.735c-.025-.188-.025-.41-.025-.615v-1.068c0-.206 0-.427.025-.615.03-.219.105-.5.341-.735.2-.2.434-.285.634-.324V6.966Zm1.5-.168v7.452h3.284c.206 0 .427 0 .615.025.219.03.5.105.735.341.236.236.311.516.341.735.025.188.025.41.025.615v1.068c0 .206 0 .427-.025.615-.03.219-.105.5-.341.735a1.239 1.239 0 0 1-.735.341 4.845 4.845 0 0 1-.615.025H6.75v2.452c.867.047 1.925.048 3.25.048h4c1.325 0 2.383 0 3.25-.048V6.798c-.867-.047-1.925-.048-3.25-.048h-4c-1.325 0-2.383 0-3.25.048Zm12 .168v14.068c.73-.147 1.194-.382 1.548-.736.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289 0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.354-.354-.817-.59-1.548-.736ZM5.751 15.75 5.75 16v1l.001.249.249.001h4l.249-.001.001-.249v-1l-.001-.249L10 15.75H6l-.249.001Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSuitcaseTag;