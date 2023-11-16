import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadphonesSquareSound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 15.187c0-.578 0-.867-.069-1.097a1.529 1.529 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015-.956.079-1.435.118-1.825.27-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.102 3.102 0 0 0 1.588 1.944c.392.195.878.275 1.85.436.645.106.968.16 1.229.106a1.521 1.521 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693v-4.506ZM16 15.187c0-.578 0-.867.069-1.097.16-.531.576-.934 1.095-1.059.225-.054.5-.03 1.051.015.957.079 1.436.118 1.826.27.899.347 1.585 1.123 1.846 2.088.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.103 3.103 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436-.645.106-.968.16-1.229.106a1.521 1.521 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693v-4.506Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 17v-5c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 6.5v5M15 8v2M9 8v2"
      />
    </svg>
  );
};
export default SvgHeadphonesSquareSound;
