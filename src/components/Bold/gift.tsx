import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.25 2c-4.219.004-6.401.08-7.786 1.464C2.08 4.85 2.004 7.031 2 11.25h4.914a3.987 3.987 0 0 1-.757-1.528C5.62 7.57 7.57 5.62 9.722 6.157c.572.143 1.09.406 1.528.757V2ZM2 12.75c.004 4.218.08 6.4 1.464 7.785C4.85 21.92 7.031 21.995 11.25 22v-7.877A4.75 4.75 0 0 1 7 16.75a.75.75 0 0 1 0-1.5 3.251 3.251 0 0 0 3.163-2.5H2ZM12.75 22c4.218-.005 6.4-.08 7.785-1.465 1.385-1.384 1.46-3.567 1.465-7.785h-8.163A3.251 3.251 0 0 0 17 15.25a.75.75 0 0 1 0 1.5 4.75 4.75 0 0 1-4.25-2.627V22ZM22 11.25c-.005-4.219-.08-6.401-1.465-7.786C19.151 2.08 16.968 2.004 12.75 2v4.914a3.988 3.988 0 0 1 1.527-.757c2.153-.538 4.104 1.412 3.565 3.565a3.987 3.987 0 0 1-.756 1.528H22Z"
      />
      <path
        fill="currentColor"
        d="M9.358 7.613a2.497 2.497 0 0 1 1.892 2.422v1.215h-1.215a2.497 2.497 0 0 1-2.422-1.892 1.44 1.44 0 0 1 1.745-1.745ZM12.75 10.035v1.215h1.215c1.145 0 2.144-.78 2.422-1.892a1.44 1.44 0 0 0-1.746-1.745 2.497 2.497 0 0 0-1.891 2.422Z"
      />
    </svg>
  );
};
export default SvgGift;
