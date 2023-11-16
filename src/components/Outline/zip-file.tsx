import * as React from "react";
import type { SVGProps } from "react";
const SvgZipFile = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.466 1.25h2.59c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.008-.135 2.264-.151 3.813-.153h.142ZM8.75 2.763c-.805.016-1.473.05-2.04.127-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-.25V3.751l.216-.001H13.534c.206 0 .427 0 .615.025.219.03.5.105.735.341.236.236.311.516.341.735.025.188.025.41.025.615V6.034c0 .206 0 .427-.025.615-.03.219-.105.5-.341.735a1.239 1.239 0 0 1-.735.341c-.188.025-.41.025-.615.025h-.785l.001.216v.785l.216-.001H13.534c.206 0 .427 0 .615.025.219.03.5.105.735.341.236.236.311.516.341.735.025.188.025.41.025.615V11.034c0 .206 0 .427-.025.615-.03.219-.105.5-.341.735a1.239 1.239 0 0 1-.735.341 4.845 4.845 0 0 1-.615.025H12.966c-.206 0-.427 0-.615-.025-.219-.03-.5-.105-.735-.341a1.239 1.239 0 0 1-.341-.735 4.844 4.844 0 0 1-.025-.614v-.786l-.216.001H10.466c-.206 0-.427 0-.615-.025-.219-.03-.5-.105-.735-.341a1.239 1.239 0 0 1-.341-.735c-.025-.188-.025-.41-.025-.615V7.966c0-.206 0-.427.025-.615.03-.219.105-.5.341-.735.236-.236.516-.311.735-.341.188-.025.41-.025.615-.025H11.034l.217.001-.001-.217V5.25a15.14 15.14 0 0 1-.216.001H10.466c-.206 0-.427 0-.615-.025-.219-.03-.5-.105-.735-.341a1.239 1.239 0 0 1-.341-.735c-.025-.188-.025-.41-.025-.615V2.763Zm1.581-.013a499.872 499.872 0 0 1 .917.001L11.25 3v.5l-.001.249L11 3.75h-.5l-.249-.001-.001-.249V3l.001-.249h.081Zm2.42 2.501c-.002.07-.002.15-.002.249V6l.001.249.249.001h.5l.249-.001L13.75 6v-.5l-.001-.249a16.28 16.28 0 0 0-.249-.001H13l-.249.001Zm-2.5 2.5c-.002.07-.002.15-.002.249v.5l.001.249.249.001h.5l.249-.001.001-.249V8l-.001-.249A16.28 16.28 0 0 0 11 7.75h-.5l-.249.001Zm2.5 2.5c-.002.07-.002.15-.002.249v.5l.001.249.249.001h.5l.249-.001.001-.249v-.5l-.001-.249-.249-.001H13l-.249.001Zm-2.377 4.999a.125.125 0 0 0-.125.125v.125a1.75 1.75 0 1 0 3.5 0v-.125a.125.125 0 0 0-.125-.125h-3.25Zm-1.625.125c0-.897.728-1.625 1.625-1.625h3.25c.898 0 1.625.728 1.625 1.625v.125a3.25 3.25 0 0 1-6.5 0v-.125Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgZipFile;
