import * as React from "react";
import type { SVGProps } from "react";
const SvgSuitcaseLines = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.078c.457-.015.955-.021 1.5-.024V6c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3.483-.064 1.131-.066 2.095-.066.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095v.002a54.53 54.53 0 0 1 1.5.024v-.078c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08Z"
      />
      <path
        fill="currentColor"
        d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M2.079 17.75c-.036-.45-.056-.947-.066-1.5h19.974c-.01.553-.03 1.05-.066 1.5H2.079ZM21.92 10.25c.036.45.056.947.067 1.5H2.013c.01-.553.03-1.05.066-1.5h19.842Z"
      />
    </svg>
  );
};
export default SvgSuitcaseLines;
