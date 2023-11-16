import * as React from "react";
import type { SVGProps } from "react";
const SvgRunning = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={18.5}
        cy={4.5}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m9 17-1 1.2c-.738.886-1.107 1.328-1.61 1.564C5.885 20 5.31 20 4.157 20H3"
      />
      <path
        fill="currentColor"
        d="m5.436 8.82-.37-.652.37.652Zm-1.807.164a.75.75 0 0 0 .742 1.304l-.742-1.304Zm12.121 1.141-.624.416.624-.416Zm.063.094.624-.417-.625.417Zm-4.844-3.566.077-.746-.077.746Zm-.23-.017-.033.75.034-.75Zm-.584.037-.103-.743.103.743ZM21 12.75a.75.75 0 0 0 0-1.5v1.5ZM5.065 8.168l-1.436.816.742 1.304 1.435-.816-.74-1.304Zm10.061 2.373.063.093 1.248-.832-.063-.093-1.248.832Zm-4.08-4.634a4.642 4.642 0 0 0-.273-.02l-.066 1.498c.049.002.11.007.184.014l.155-1.492Zm-5.24 3.565c2.319-1.317 3.386-1.909 4.451-2.056l-.205-1.486c-1.419.196-2.779.983-4.987 2.238l.741 1.304Zm13.335 3.278H21v-1.5h-1.86v1.5Zm-8.368-6.863a3.97 3.97 0 0 0-.72.043l.204 1.486c.178-.024.322-.037.45-.03l.066-1.5Zm4.416 4.748a4.75 4.75 0 0 0 3.952 2.115v-1.5a3.25 3.25 0 0 1-2.704-1.448l-1.249.832Zm1.185-.926c-1.177-1.766-2.945-3.554-5.328-3.802L10.891 7.4c1.703.177 3.134 1.49 4.235 3.142l1.248-.832Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m14 8.5-2.22 2.776c-.837 1.045-1.255 1.568-1.322 2.137a2 2 0 0 0 .118.945c.204.536.737.94 1.805 1.749.813.616 1.219.923 1.495 1.326.157.23.281.48.37.744.154.462.154.972.154 1.992V22"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgRunning;
