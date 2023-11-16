import * as React from "react";
import type { SVGProps } from "react";
const SvgTornado = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.313 4.5c.367-.112.852-.222 1.446-.32 1.577-.264 3.784-.43 6.241-.43a.75.75 0 0 0 0-1.5c-2.513 0-4.807.17-6.487.45-.835.139-1.553.31-2.08.518-.26.103-.518.23-.724.398-.196.16-.459.453-.459.884s.263.724.46.884c.205.167.462.295.722.398.528.207 1.246.38 2.08.518 1.681.28 3.975.45 6.488.45 2.514 0 4.807-.17 6.487-.45.835-.139 1.553-.31 2.08-.518.26-.103.518-.23.724-.398.196-.16.459-.453.459-.884 0-.535-.397-.857-.63-1.007-.27-.175-.62-.313-.997-.428-.762-.233-1.814-.421-3.04-.558a.75.75 0 0 0-.166 1.491c1.186.132 2.134.308 2.768.502h.002c-.367.112-.852.222-1.446.32-1.577.264-3.784.43-6.241.43s-4.664-.166-6.24-.43c-.595-.098-1.08-.208-1.447-.32Zm16.045.291-.013-.011.013.011ZM6.591 10.538a.75.75 0 0 0-1.258.806L6 11c-.667.344-.666.345-.666.345l.001.002.002.004.004.007.009.016a.9.9 0 0 0 .065.098c.035.046.077.094.128.142.102.097.237.196.418.295.357.194.914.394 1.8.55a.75.75 0 1 0 .261-1.476c-.787-.14-1.175-.3-1.346-.393a.79.79 0 0 1-.085-.052Zm11.752-.205a.75.75 0 0 1 .324 1.01L18 11c.667.344.665.346.665.346l-.001.003-.003.006-.007.012a.905.905 0 0 1-.131.18 1.537 1.537 0 0 1-.26.224c-.214.15-.525.304-.986.446-.916.281-2.5.533-5.277.533a.75.75 0 0 1 0-1.5c2.707 0 4.124-.248 4.837-.467.353-.108.513-.204.567-.241l.005-.004a.75.75 0 0 1 .934-.205ZM16.71 16.258a.75.75 0 0 1-.468.952 9.43 9.43 0 0 1-3.242.54c-1.397 0-2.434-.125-3.138-.258a.75.75 0 1 1 .276-1.474c.61.115 1.556.232 2.862.232a7.938 7.938 0 0 0 2.758-.46.75.75 0 0 1 .952.468ZM12.25 22a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.24 19.266a.75.75 0 0 1-.62.86c-.474.077-1.007.124-1.62.124-.486 0-.928-.015-1.329-.04a.75.75 0 0 1 .095-1.497c.368.023.78.037 1.234.037.535 0 .987-.04 1.38-.105a.75.75 0 0 1 .86.621ZM7.303 13.723a.75.75 0 0 1 .97-.421h.003a3.308 3.308 0 0 0 .174.056c.137.04.357.097.662.155.61.116 1.563.237 2.888.237 1.326 0 2.279-.12 2.889-.237a7.175 7.175 0 0 0 .808-.2l.028-.01.001-.001a.75.75 0 0 1 .551 1.395L16 14c.277.697.276.698.276.698h-.001l-.003.001-.007.003-.019.007a3.234 3.234 0 0 1-.275.09 8.66 8.66 0 0 1-.802.188c-.705.134-1.752.263-3.169.263s-2.464-.129-3.168-.263a8.663 8.663 0 0 1-.802-.189 4.687 4.687 0 0 1-.276-.089l-.019-.007-.007-.003-.003-.001h-.002a.75.75 0 0 1-.42-.975ZM20.706 7.747a.75.75 0 0 1-.453.96h-.002l-.003.001-.01.004-.032.01a10.773 10.773 0 0 1-.533.158c-.367.1-.908.23-1.62.358-1.427.258-3.54.512-6.329.512-2.788 0-4.768-.254-6.066-.514a13.833 13.833 0 0 1-1.449-.365 7.001 7.001 0 0 1-.469-.166l-.03-.013-.01-.004-.003-.002h-.001S3.694 8.685 4 8l-.306.685a.75.75 0 0 1 .609-1.371l.01.004.06.024c.06.022.155.057.29.1.269.085.693.203 1.29.323 1.193.24 3.075.485 5.771.485 2.697 0 4.721-.246 6.062-.488.67-.121 1.17-.241 1.497-.33a9.328 9.328 0 0 0 .445-.131l.02-.007a.75.75 0 0 1 .958.453Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTornado;