import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVertical = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.419 8c0-2.828 0-4.243.817-5.121C8.053 2 9.369 2 12 2c2.631 0 3.947 0 4.764.879.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121C15.947 22 14.631 22 12 22c-2.631 0-3.947 0-4.764-.879-.817-.878-.817-2.293-.817-5.121V8ZM5.023 7.901V16.1c0 .982 0 1.865.046 2.629.017.27.039.524.069.764.013.107.029.214.046.32.036.217-.131.42-.35.401-.43-.037-.82-.118-1.183-.317a3.146 3.146 0 0 1-1.321-1.42c-.186-.391-.26-.81-.296-1.273C2 16.756 2 16.205 2 15.531V8.47c0-.674 0-1.224.034-1.672.035-.463.11-.882.296-1.272a3.146 3.146 0 0 1 1.32-1.42c.364-.2.753-.28 1.184-.318.219-.02.386.184.35.4a8.396 8.396 0 0 0-.046.321c-.03.24-.052.495-.069.764-.046.764-.046 1.646-.046 2.63ZM18.977 16.099V7.9c0-.983 0-1.865-.047-2.629-.016-.27-.038-.524-.068-.764a8.297 8.297 0 0 0-.046-.32c-.036-.217.131-.42.35-.401.43.037.82.118 1.183.317a3.147 3.147 0 0 1 1.322 1.42c.185.391.26.81.295 1.273.034.448.034.998.034 1.672v7.062c0 .674 0 1.225-.034 1.672-.035.463-.11.882-.296 1.273a3.147 3.147 0 0 1-1.32 1.42c-.364.199-.753.28-1.184.317-.219.02-.386-.184-.35-.4a11.99 11.99 0 0 0 .115-1.085c.046-.764.046-1.647.046-2.63Z"
      />
    </svg>
  );
};
export default SvgSliderVertical;