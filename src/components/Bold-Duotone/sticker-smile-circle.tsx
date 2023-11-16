import * as React from "react";
import type { SVGProps } from "react";
const SvgStickerSmileCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.791 13.343c.781-.274 1.752-.31 3.78-.315h1.426c-.007.097.01-.097 0 0a1.478 1.478 0 0 1-.424.908l-7.65 7.69a1.262 1.262 0 0 1-.895.37c-.097.01.097-.006 0 0v-1.424c.005-2.03.041-3 .314-3.78a5.621 5.621 0 0 1 3.45-3.45Z"
      />
      <path
        fill="currentColor"
        d="M13.028 21.948c-.338.034-.681.052-1.028.052-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .347-.018.69-.052 1.028h-1.376c-2.03.005-3 .041-3.78.314a5.621 5.621 0 0 0-3.45 3.45c-.273.78-.31 1.75-.314 3.78v1.376Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M14.898 11.224c.533-.143.792-.908.578-1.708-.215-.8-.821-1.333-1.355-1.19-.533.143-.792.907-.577 1.708.214.8.82 1.333 1.354 1.19ZM9.102 12.777c.534-.143.792-.908.578-1.708-.214-.8-.82-1.333-1.354-1.19-.534.143-.792.907-.578 1.708.215.8.82 1.333 1.354 1.19ZM9.095 15.206a.75.75 0 1 0-.365 1.455c1.387.347 2.944.344 4.5-.073l.052-.014.08.163a5.62 5.62 0 0 1 3.43-3.394c.092-.033.188-.062.287-.088a.75.75 0 0 0-.96.069c-.838.81-1.96 1.463-3.278 1.816s-2.616.35-3.746.066Z"
      />
    </svg>
  );
};
export default SvgStickerSmileCircle;
