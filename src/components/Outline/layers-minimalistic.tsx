import * as React from "react";
import type { SVGProps } from "react";
const SvgLayersMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 4.75c-1.06 0-1.91.328-3.934 1.138L5.257 7.01c-1.01.404-1.71.686-2.164.924a4.11 4.11 0 0 0-.12.065l.12.065c.454.238 1.154.52 2.164.924l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123c1.01-.404 1.71-.686 2.164-.924l.12-.065a4.086 4.086 0 0 0-.12-.065c-.454-.238-1.154-.52-2.164-.924l-2.809-1.123C13.91 5.078 13.06 4.75 12 4.75Zm-4.376-.301C9.501 3.698 10.621 3.25 12 3.25c1.38 0 2.499.448 4.376 1.199l.115.046 2.854 1.142c.955.382 1.728.69 2.259.969.268.14.528.3.729.493.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493-.53.278-1.303.587-2.258.97l-2.854 1.14-.115.047c-1.877.751-2.997 1.199-4.376 1.199-1.38 0-2.499-.448-4.376-1.199l-.115-.046-2.854-1.142c-.955-.382-1.728-.69-2.259-.969a3.21 3.21 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493.53-.278 1.303-.587 2.258-.97l2.854-1.14.115-.047ZM2.5 11.44l.004.003.024.021a7.568 7.568 0 0 0 .626.451c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12.23 12.23 0 0 0 2.104-1.074 7.557 7.557 0 0 0 .65-.472l.003-.002.001-.001a.75.75 0 0 1 1 1.118L22 12l.5.558v.002l-.002.001-.005.004-.014.012c-.01.01-.026.023-.045.039a9.109 9.109 0 0 1-.77.558A13.72 13.72 0 0 1 19.3 14.38l-2.809 1.124-.115.046c-1.877.751-2.997 1.199-4.376 1.199-1.38 0-2.499-.448-4.376-1.199l-.115-.046L4.7 14.38a13.72 13.72 0 0 1-2.363-1.207 9.088 9.088 0 0 1-.771-.558 2.962 2.962 0 0 1-.045-.039l-.014-.012-.005-.004-.001-.002H1.5L2 12l-.5.559a.75.75 0 0 1 .999-1.119Zm19 4.001.002-.001a.75.75 0 0 1 1 1.118L22 16l.5.558v.002l-.002.001-.005.004-.014.012a5.337 5.337 0 0 1-.207.168c-.14.108-.342.256-.609.429A13.72 13.72 0 0 1 19.3 18.38l-2.809 1.124-.115.046c-1.877.751-2.997 1.199-4.376 1.199-1.38 0-2.499-.448-4.376-1.199l-.115-.046L4.7 18.38a13.72 13.72 0 0 1-2.363-1.207 9.088 9.088 0 0 1-.771-.558 2.962 2.962 0 0 1-.045-.039l-.014-.012-.005-.004-.001-.002H1.5L2 16l-.5.559a.75.75 0 0 1 1-1.118l.003.002.024.021a7.568 7.568 0 0 0 .626.451c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12.23 12.23 0 0 0 2.104-1.074 7.557 7.557 0 0 0 .65-.472l.003-.002Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLayersMinimalistic;
