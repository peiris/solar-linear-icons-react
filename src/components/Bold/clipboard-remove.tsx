import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardRemove = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.879 4.877c.569-.57 1.363-.77 2.621-.84V4.5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-.463c1.258.07 2.052.27 2.621.84C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121ZM12 13.439l-1.97-1.97a.75.75 0 1 0-1.06 1.061l1.97 1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 15.56l1.97 1.97a.75.75 0 0 0 1.06-1.06l-1.97-1.97 1.97-1.97a.75.75 0 1 0-1.06-1.06L12 13.44Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgClipboardRemove;
