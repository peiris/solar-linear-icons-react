import * as React from "react";
import type { SVGProps } from "react";
const SvgRevote = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.435.306A.75.75 0 0 1 10.9 1v.978l1.083-.001h.075c2.072 0 3.705 0 4.981.174 1.31.179 2.356.554 3.177 1.387.82.832 1.187 1.89 1.363 3.214.171 1.293.171 2.95.171 5.055v.113c0 2.105 0 3.761-.171 5.054-.176 1.326-.543 2.382-1.363 3.214-.82.834-1.866 1.209-3.177 1.388-1.276.174-2.909.174-4.981.174h-.116c-2.072 0-3.705 0-4.981-.174-1.31-.18-2.356-.554-3.177-1.388-.82-.832-1.187-1.888-1.363-3.214-.171-1.293-.171-2.949-.171-5.054v-.113c0-2.106 0-3.762.171-5.055.176-1.325.543-2.382 1.363-3.214a.75.75 0 1 1 1.068 1.053c-.498.506-.79 1.195-.944 2.358-.156 1.183-.158 2.74-.158 4.914 0 2.175.002 3.731.158 4.915.154 1.162.446 1.852.944 2.358.497.504 1.172.798 2.312.954 1.163.158 2.693.16 4.836.16 2.143 0 3.673-.002 4.836-.16 1.14-.156 1.815-.45 2.312-.954.498-.506.79-1.196.944-2.358.157-1.184.158-2.74.158-4.915 0-2.174-.002-3.73-.158-4.914-.154-1.163-.446-1.852-.944-2.358-.497-.504-1.171-.798-2.312-.954-1.163-.159-2.693-.16-4.836-.16h-1.1v1.077a.75.75 0 0 1-1.284.526l-1.75-1.777a.75.75 0 0 1 0-1.052L9.616.474a.75.75 0 0 1 .819-.168Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l5-5Z"
      />
    </svg>
  );
};
export default SvgRevote;
