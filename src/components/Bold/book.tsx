import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.271 2.112c-.81.106-1.238.301-1.544.6-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.172 4.172 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451-.109-.793-.308-1.213-.613-1.513-.306-.299-.734-.494-1.544-.6-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112Zm.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81Zm.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81.82.82 0 0 0-.828-.811H7.586Z"
        clipRule="evenodd"
      />
      <path
        fill="#1C274D"
        d="M7.473 17.135H20c-.003 1.13-.021 1.974-.113 2.64-.109.793-.308 1.213-.613 1.513-.306.299-.734.494-1.544.6-.834.11-1.938.112-3.522.112H9.793c-1.584 0-2.688-.002-3.522-.111-.81-.107-1.238-.302-1.544-.601-.305-.3-.504-.72-.613-1.513-.041-.3-.068-.637-.084-1.02a2.464 2.464 0 0 1 1.697-1.537c.29-.076.667-.083 1.746-.083Z"
      />
    </svg>
  );
};
export default SvgBook;
