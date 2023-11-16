import * as React from "react";
import type { SVGProps } from "react";
const SvgCartCross = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
      <path
        fill="currentColor"
        d="m2.261 3.092.249-.708-.249.708Zm-.012-.8a.75.75 0 1 0-.498 1.416l.498-1.416Zm2.337 2.031.62-.423-.62.423Zm1.302 10.263-.545.516.545-.516Zm14.77-4.703.734.151.001-.004-.735-.147Zm-.5 2.425.735.15-.735-.15Zm.576-5.61-.594.456.595-.457Zm-1.6 8.352-.474-.581.474.581ZM5.708 9.76V7.038h-1.5V9.76h1.5ZM2.51 2.384l-.261-.092-.498 1.416.261.091.498-1.415Zm8.428 13.866h5.302v-1.5h-5.302v1.5Zm-5.23-9.212c0-.707.001-1.297-.05-1.776-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677.041.38.042.875.042 1.615h1.5ZM2.012 3.8c.668.235 1.107.39 1.43.55.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899-.42-.206-.958-.394-1.592-.617L2.012 3.8ZM4.208 9.76c0 1.453.014 2.5.15 3.3.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047h-1.5Zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026.87.124 1.98.122 3.351.122v-1.5Zm-5.98-7.88h12.13v-1.5H4.959v1.5Zm14.965 2.861-.5 2.425 1.47.303.5-2.425-1.47-.303ZM17.09 6.87c.856 0 1.61.001 2.205.067.295.034.517.08.672.134.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.616 4.616 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076v1.5Zm4.304 3.16c.17-.848.313-1.56.348-2.13.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654-.027.444-.144 1.037-.322 1.928l1.471.294Zm-5.153 6.22c.762 0 1.401.001 1.917-.062.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23-.403.05-.934.051-1.734.051v1.5Zm3.184-4.094c-.162.783-.27 1.303-.4 1.688-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309.166-.492.294-1.118.448-1.864l-1.47-.303Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m11.5 12.5 3-3m0 3-3-3"
      />
    </svg>
  );
};
export default SvgCartCross;
