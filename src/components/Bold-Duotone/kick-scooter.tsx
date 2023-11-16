import * as React from "react";
import type { SVGProps } from "react";
const SvgKickScooter = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.631 4.769a15.284 15.284 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023.32.024.622.075.918.206.456.202.846.529 1.124.942.181.269.283.558.36.867.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.128 3.128 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103 0-1.722 1.41-3.103 3.131-3.103 1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991-.055-.222-.103-.324-.148-.391a1.149 1.149 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.488 17.647c0-1.722 1.41-3.103 3.131-3.103 1.721 0 3.131 1.38 3.131 3.103 0 1.722-1.41 3.103-3.13 3.103-1.722 0-3.132-1.381-3.132-3.103Z"
        clipRule="evenodd"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgKickScooter;
