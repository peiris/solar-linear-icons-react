import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartHome = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.485 12.25a.75.75 0 0 1 .75-.75c5.39 0 9.758 4.365 9.758 9.75a.75.75 0 0 1-1.501 0c0-4.556-3.697-8.25-8.257-8.25a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 1 0 0 1.5 5.252 5.252 0 0 1 5.254 5.25.75.75 0 0 0 1.502 0 6.753 6.753 0 0 0-6.756-6.75Zm-.75 3.75a.75.75 0 0 1 .75-.75 3.751 3.751 0 0 1 3.753 3.75.75.75 0 0 1-1.501 0A2.25 2.25 0 0 0 3.235 19a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 10.369c.355-.233.78-.369 1.235-.369 6.218 0 11.26 5.037 11.26 11.25 0 .263-.046.515-.129.75 3.527-.001 5.328-.04 6.462-1.212C22 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.52-.949-1.468-1.537-3.367-2.715L16.11 3.867C14.104 2.622 13.101 2 11.992 2s-2.112.622-4.12 1.867l-2 1.241c-1.9 1.178-2.849 1.766-3.368 2.715-.358.653-.47 1.398-.504 2.545Z"
      />
    </svg>
  );
};
export default SvgSmartHome;
