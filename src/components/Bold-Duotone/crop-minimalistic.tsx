import * as React from "react";
import type { SVGProps } from "react";
const SvgCropMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M8.75 6a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v3.302c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h3.302V18a.75.75 0 0 0 1.5 0v-1.25H18a.75.75 0 0 0 0-1.5h-6c-.964 0-1.612-.002-2.095-.066-.461-.063-.659-.17-.789-.3-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094V6Z"
      />
      <path
        fill="currentColor"
        d="M12 8.75c.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095v1.47a.75.75 0 0 0 1.5 0v-1.522c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08h-1.523a.75.75 0 0 0 0 1.5H12Z"
      />
    </svg>
  );
};
export default SvgCropMinimalistic;
