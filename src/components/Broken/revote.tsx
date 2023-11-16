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
        d="m19.682 19.662.534.526-.534-.526Zm0-15.597-.534.526.534-.526Zm-14.83.526a.75.75 0 0 0-1.068-1.053l1.068 1.053ZM8.4 2.777l-.534-.526a.75.75 0 0 0 0 1.052l.534-.526ZM9.616 5.08a.75.75 0 1 0 1.069-1.052L9.616 5.08Zm1.069-3.554A.75.75 0 1 0 9.616.474l1.069 1.052ZM21.75 12a.75.75 0 0 0-1.5 0h1.5Zm-1.56-3.957a.75.75 0 0 0 1.498-.086l-1.497.086ZM12 20.25c-2.143 0-3.673-.002-4.836-.16-1.14-.156-1.815-.45-2.312-.954l-1.068 1.052c.82.834 1.866 1.209 3.177 1.388 1.288.175 2.94.174 5.039.174v-1.5Zm-9.75-8.387c0 2.133-.002 3.807.171 5.111.176 1.325.543 2.382 1.363 3.214l1.068-1.052c-.498-.506-.79-1.196-.944-2.358-.156-1.184-.158-2.74-.158-4.915h-1.5ZM12 21.75c2.1 0 3.751.002 5.04-.174 1.31-.18 2.355-.554 3.176-1.388l-1.068-1.052c-.497.504-1.171.798-2.312.954-1.163.158-2.693.16-4.836.16v1.5Zm0-18.273c2.143 0 3.673.001 4.836.16 1.14.156 1.815.45 2.312.954l1.068-1.053c-.82-.833-1.866-1.208-3.177-1.387-1.288-.176-2.94-.174-5.039-.174v1.5Zm-8.25 8.386c0-2.174.002-3.73.158-4.914.154-1.163.446-1.852.944-2.358L3.784 3.538c-.82.832-1.187 1.89-1.363 3.214-.173 1.305-.171 2.979-.171 5.111h1.5ZM12 1.977c-1.415 0-2.62 0-3.638.051l.076 1.498c.972-.049 2.134-.05 3.562-.05v-1.5ZM7.866 3.303l1.75 1.777 1.069-1.052-1.75-1.777-1.07 1.052Zm1.068 0 1.75-1.777L9.617.474 7.866 2.25l1.068 1.052ZM20.25 12c0 2.127-.005 3.653-.163 4.814-.155 1.14-.446 1.82-.94 2.322l1.07 1.052c.81-.823 1.178-1.866 1.356-3.171.175-1.285.177-2.929.177-5.017h-1.5Zm1.438-4.043c-.11-1.913-.422-3.353-1.472-4.419l-1.068 1.053c.64.65.936 1.6 1.043 3.452l1.497-.086Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.5 12.5 2 2 5-5"
      />
    </svg>
  );
};
export default SvgRevote;
