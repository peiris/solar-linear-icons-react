import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartUnlock = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.501 7.014c.164-.997.554-1.74 1.093-2.27.739-.726 1.85-1.144 3.302-1.144 1.833 0 3.119.661 3.816 1.791.224.362.665.451.985.198.32-.252.4-.751.176-1.114C15.82 2.772 14.009 2 11.896 2c-1.674 0-3.157.481-4.23 1.538-.945.929-1.504 2.234-1.636 3.839.46-.197.955-.323 1.471-.363Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.496 20.037C5.968 18.152 3 15.937 3 12.099c0-4.237 4.95-7.242 9-3.168 4.05-4.074 9-1.069 9 3.168 0 3.839-2.968 6.053-5.496 7.938-.262.196-.52.388-.77.578C13.8 21.328 12.9 22 12 22c-.9 0-1.8-.672-2.734-1.385-.25-.19-.508-.382-.77-.578Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
};
export default SvgHeartUnlock;
