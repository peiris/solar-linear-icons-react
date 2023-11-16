import * as React from "react";
import type { SVGProps } from "react";
const SvgJarOfPills = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.5 18h15M4.5 10h3.75m11.25 0H12M20 10.908A4 4 0 0 0 18.517 7.8L16.16 5.891c-.545-.441-.818-.662-1.142-.776C14.694 5 14.344 5 13.643 5h-3.24c-.695 0-1.042 0-1.363.113-.322.112-.593.33-1.136.764L5.501 7.799A4 4 0 0 0 4 10.922V12.5M20 15v2.565a4 4 0 0 1-.912 2.543l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 4 17.552V16.5M12 12v4m-2-2h4"
      />
    </svg>
  );
};
export default SvgJarOfPills;
