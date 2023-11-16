import * as React from "react";
import type { SVGProps } from "react";
const SvgWallpaper = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.25 15a.75.75 0 0 0 1.5 0h-1.5ZM11 2.75h2v-1.5h-2v1.5Zm2 18.5h-2v1.5h2v-1.5ZM5.75 16V8h-1.5v8h1.5ZM11 21.25c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983.878.118 1.998.116 3.391.116v-1.5ZM4.25 16c0 1.393-.002 2.513.117 3.392.12.9.38 1.658.981 2.26L6.41 20.59c-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191h-1.5ZM13 22.75c1.393 0 2.513.002 3.392-.116.9-.122 1.658-.38 2.26-.982L17.59 20.59c-.277.277-.665.457-1.4.556-.754.101-1.756.103-3.191.103v1.5Zm0-20c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556l1.06-1.06c-.601-.603-1.36-.861-2.26-.982-.878-.119-1.998-.117-3.391-.117v1.5ZM19.75 8c0-1.393.002-2.513-.116-3.392-.122-.9-.38-1.658-.982-2.26L17.59 3.41c.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191h1.5ZM11 1.25c-1.393 0-2.513-.002-3.392.117-.9.12-1.658.38-2.26.981L6.41 3.41c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103v-1.5ZM5.75 8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399l-1.06-1.06c-.603.601-.861 1.36-.982 2.26C4.248 5.486 4.25 6.606 4.25 8h1.5Zm12.422 10.984c-.092.87-.28 1.305-.581 1.607l1.06 1.06c.658-.657.906-1.5 1.012-2.51l-1.491-.157ZM18.25 8v7h1.5V8h-1.5Z"
      />
      <path
        stroke="currentColor"
        
        d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0 0 19.89 4.53C19.697 4.5 19.465 4.5 19 4.5M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 0 1 2.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53C4.303 4.5 4.535 4.5 5 4.5"
      />
      <circle
        cx={14.5}
        cy={6.5}
        r={1.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m5 14.816 1.29-1.324c.672-.69 1.684-.65 2.315.09l3.16 3.706c.507.594 1.304.675 1.89.192l.22-.18c.843-.695 1.984-.615 2.75.193L19 19.5"
      />
    </svg>
  );
};
export default SvgWallpaper;
