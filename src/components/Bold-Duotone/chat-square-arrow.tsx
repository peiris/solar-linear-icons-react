import * as React from "react";
import type { SVGProps } from "react";
const SvgChatSquareArrow = (props: SVGProps<SVGSVGElement>) => {
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
        d="m12.984 22.495.537-.907c.416-.703.625-1.055.96-1.25.334-.194.755-.201 1.598-.216 1.243-.021 2.023-.097 2.678-.368a4.952 4.952 0 0 0 2.68-2.68c.186-.446.28-.951.328-1.623.025-.355.038-.533-.057-.675-.095-.143-.275-.203-.636-.324-1.511-.507-5.014-1.796-6.972-3.451-2.207-1.867-4.182-5.66-4.889-7.115-.14-.289-.21-.433-.334-.51-.123-.076-.28-.074-.592-.071-2.035.021-2.956.134-3.92.724A4.952 4.952 0 0 0 2.73 5.663C2 6.853 2 8.474 2 11.715v.99c0 2.307 0 3.46.377 4.37a4.952 4.952 0 0 0 2.681 2.679c.654.27 1.434.347 2.678.368.842.015 1.264.022 1.598.216.335.195.543.547.96 1.25l.537.907c.478.808 1.674.808 2.153 0Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.872.24a.766.766 0 0 1-.008 1.137l-1.102 1.014c.959.009 1.881.03 2.714.083.715.045 1.386.114 1.97.222.572.106 1.123.26 1.56.507a5.837 5.837 0 0 1 2 1.839c.48.721.693 1.537.794 2.52.1.963.1 2.166.1 3.691v.042c0 .445-.387.805-.864.805-.478 0-.865-.36-.865-.805 0-1.576 0-2.702-.091-3.578-.09-.864-.26-1.402-.543-1.827a4.16 4.16 0 0 0-1.425-1.31c-.186-.105-.509-.214-1.004-.305a15.098 15.098 0 0 0-1.75-.195c-.782-.05-1.655-.07-2.582-.08l1.088 1c.34.313.343.822.008 1.139a.91.91 0 0 1-1.222.007L11.057 3.76a.778.778 0 0 1-.257-.572c0-.215.092-.421.257-.573L13.65.232a.91.91 0 0 1 1.222.007Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChatSquareArrow;