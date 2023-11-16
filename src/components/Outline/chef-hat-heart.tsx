import * as React from "react";
import type { SVGProps } from "react";
const SvgChefHatHeart = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.253 4.255a5.25 5.25 0 0 1 9.494 0A5.75 5.75 0 0 1 19.75 15.05v3.002c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.343-.08-2.242v-3.001A5.75 5.75 0 0 1 7.253 4.256Zm-.45 1.5A4.25 4.25 0 0 0 5.3 13.897c.273.119.45.389.45.687v2.666h12.5v-2.666a.75.75 0 0 1 .45-.687 4.251 4.251 0 0 0-1.503-8.142c.035.243.053.492.053.745V7a.75.75 0 0 1-1.5 0v-.5A3.746 3.746 0 0 0 12 2.75 3.752 3.752 0 0 0 8.25 6.5V7a.75.75 0 0 1-1.5 0v-.5c0-.253.018-.502.053-.745ZM18.248 18.75H5.752c.004.57.018 1 .065 1.345.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.046-.346.06-.776.064-1.345ZM14.254 8.678c.934.327 1.496 1.225 1.496 2.322 0 .77-.441 1.451-.875 1.953-.453.524-1.014.983-1.474 1.32l-.07.053c-.352.26-.752.555-1.331.555-.58 0-.98-.296-1.33-.555a15.508 15.508 0 0 0-.07-.052c-.46-.338-1.022-.797-1.475-1.321C8.69 12.45 8.25 11.77 8.25 11c0-1.097.562-1.995 1.496-2.322.729-.256 1.538-.112 2.254.36.716-.472 1.525-.616 2.254-.36Zm-.496 1.415c-.25-.088-.714-.06-1.24.444a.75.75 0 0 1-1.037 0c-.525-.504-.989-.532-1.24-.444-.228.08-.491.331-.491.907 0 .215.141.546.51.972.348.403.809.786 1.226 1.092a4 4 0 0 0 .42.288c.054.029.07.03.094.03.024 0 .04-.001.094-.03a4 4 0 0 0 .42-.288c.417-.306.878-.69 1.227-1.092.368-.426.509-.757.509-.972 0-.576-.263-.826-.492-.907Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChefHatHeart;
