import * as React from "react";
import type { SVGProps } from "react";
const SvgUploadTrack = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22a9.971 9.971 0 0 0 3.75-.727v-1.537a2.25 2.25 0 0 1-1.841-3.827l2.5-2.5a2.25 2.25 0 0 1 3.182 0l1.862 1.862A9.985 9.985 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.47 14.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.75 11.214.99.495c.203.101.38.19.529.255.15.066.33.133.528.156a1.75 1.75 0 0 0 1.848-1.142 1.87 1.87 0 0 0 .096-.542c.009-.162.009-.361.009-.588v-.06c0-.161 0-.333-.031-.499a1.75 1.75 0 0 0-.656-1.061 2.642 2.642 0 0 0-.433-.251l-1.37-.685c-.203-.102-.38-.19-.529-.255a1.867 1.867 0 0 0-.528-.157 1.75 1.75 0 0 0-1.848 1.142 1.87 1.87 0 0 0-.097.543A8.912 8.912 0 0 0 11.25 9v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.786Z"
      />
    </svg>
  );
};
export default SvgUploadTrack;
