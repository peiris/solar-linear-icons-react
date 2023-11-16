import * as React from "react";
import type { SVGProps } from "react";
const SvgNotebookSquare = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        fillRule="evenodd"
        d="M3.172 2.172C2 3.343 2 5.229 2 9v4c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13V9c0-3.771 0-5.657-1.172-6.828C19.657 1 17.771 1 14 1h-4C6.229 1 4.343 1 3.172 2.172Zm9.335 13.55-.007.004V7.283l.022-.013c.553-.32 1.447-.796 2.178-1 .54-.149 1.24-.218 1.857-.248.805-.04 1.443.623 1.443 1.43v5.459c0 .833-.68 1.504-1.51 1.566-.506.038-1.052.101-1.49.208-.837.205-1.883.716-2.493 1.037ZM6 7.496v5.415c0 .833.68 1.504 1.51 1.566.506.038 1.052.101 1.49.208.837.205 1.883.716 2.493 1.037l.007.004V7.311a1.044 1.044 0 0 1-.035-.018C10.85 6.971 9.824 6.473 9 6.271c-.444-.109-1-.173-1.513-.21C6.665 6 6 6.673 6 7.496Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgNotebookSquare;
