import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.787 4.297c-.029.35-.035.761-.037 1.246-.533.157-1.002.405-1.402.805-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.4.4.869.648 1.402.805.002.485.008.897.037 1.246.037.463.118.882.317 1.273a3.25 3.25 0 0 0 1.42 1.42c.391.199.81.28 1.273.317.448.037.998.037 1.672.037h7.062c.674 0 1.225 0 1.672-.037.463-.037.882-.118 1.273-.317a3.25 3.25 0 0 0 1.42-1.42c.199-.391.28-.81.317-1.273.029-.35.035-.761.037-1.246.533-.157 1.002-.405 1.402-.805.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.4-.4-.869-.648-1.402-.805a16.543 16.543 0 0 0-.037-1.246c-.037-.463-.118-.882-.317-1.272a3.25 3.25 0 0 0-1.42-1.42c-.391-.2-.81-.28-1.273-.318-.447-.037-.998-.037-1.672-.037H8.47c-.674 0-1.225 0-1.672.037-.463.037-.882.118-1.272.317a3.25 3.25 0 0 0-1.42 1.42c-.2.391-.28.81-.318 1.273ZM17.08 2.782c-.38-.031-.869-.032-1.581-.032h-7c-.712 0-1.202 0-1.58.032-.371.03-.57.085-.714.159a1.75 1.75 0 0 0-.765.765c-.074.144-.13.343-.16.713-.02.24-.027.526-.03.884.751-.053 1.645-.053 2.694-.053h8.11c1.05 0 1.943 0 2.693.053a12.37 12.37 0 0 0-.03-.884c-.03-.37-.085-.57-.159-.713a1.75 1.75 0 0 0-.765-.765c-.144-.074-.343-.13-.713-.16Zm1.667 15.915c-.75.053-1.644.053-2.693.053h-8.11c-1.05 0-1.943 0-2.693-.053.002.358.01.643.03.884.03.37.085.57.159.713.168.33.435.598.765.765.144.074.343.13.713.16.38.03.869.031 1.581.031h7c.712 0 1.202 0 1.58-.032.371-.03.57-.085.715-.159a1.75 1.75 0 0 0 .764-.765c.074-.144.13-.343.16-.713.02-.24.026-.526.03-.884Zm.444-11.844c-.756-.101-1.757-.103-3.192-.103H8c-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.101.754-.103 1.756-.103 3.191 0 1.435.002 2.437.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191 0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSliderHorizontal;
