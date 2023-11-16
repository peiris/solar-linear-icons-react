import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.914 11.25H2v1.5h8.163A3.251 3.251 0 0 1 7 15.25a.75.75 0 0 0 0 1.5 4.75 4.75 0 0 0 4.25-2.626V22h1.5v-7.876A4.75 4.75 0 0 0 17 16.75a.75.75 0 0 0 0-1.5 3.251 3.251 0 0 1-3.163-2.5H22v-1.5h-4.913c.35-.438.613-.955.756-1.527.538-2.153-1.413-4.103-3.565-3.565a3.987 3.987 0 0 0-1.528.756V2h-1.5v4.914a3.987 3.987 0 0 0-1.527-.756C7.57 5.62 5.62 7.57 6.158 9.723c.143.572.405 1.089.756 1.527Zm4.336 0H9.997a2.497 2.497 0 0 1-2.384-1.891A1.44 1.44 0 0 1 9.36 7.613a2.497 2.497 0 0 1 1.891 2.384v1.253Zm2.753 0H12.75v-1.245a2.497 2.497 0 0 1 1.891-2.392 1.44 1.44 0 0 1 1.746 1.746 2.497 2.497 0 0 1-2.384 1.891Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGift;
