import * as React from "react";
import type { SVGProps } from "react";
const SvgMeditationRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21 17-1.158-.39a2.682 2.682 0 0 1-.642-.317l-.101-.069A2.5 2.5 0 0 1 18 14.15c0-.363-.039-.718-.112-1.06M3 17l1.158-.39c.227-.076.443-.183.642-.317l.101-.069A2.5 2.5 0 0 0 6 14.15c0-2.437 1.744-4.517 4.123-4.918l.89-.15C11.5 9 12.5 9 12.987 9.082l.891.15c.393.067.77.179 1.123.33M9.5 16l-.925 1.233c-.147.196-.22.295-.304.381a2 2 0 0 1-.732.486c-.112.043-.23.073-.47.133l-1.793.448A1.685 1.685 0 0 0 5.685 22h.683c1.709 0 3.37-.554 4.737-1.579L13 19m1.5-3 .727.969c.343.458.515.687.738.856.067.05.137.098.21.14.242.14.52.209 1.075.348l1.474.368A1.685 1.685 0 0 1 18.315 22h-.937c-.563 0-.844 0-1.123-.016a9.997 9.997 0 0 1-2.425-.44c-.267-.083-.53-.181-1.056-.379L11 20.5"
      />
    </svg>
  );
};
export default SvgMeditationRound;
