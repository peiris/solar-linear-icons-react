import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNote4 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19.85 4.7c-.398-1.124-1.497-1.821-2.656-1.682a2.695 2.695 0 0 0-.77.24c-.256.114-.567.273-.95.47L13 4.995c-.284.146-.507.26-.698.41a2.59 2.59 0 0 0-.942 1.563c-.045.242-.045.497-.045.823v6.506a4.27 4.27 0 0 0-2.971-1.206C5.944 13.093 4 15.087 4 17.547 4 20.006 5.944 22 8.343 22c2.398 0 4.343-1.994 4.343-4.454v-6.363c.43.226.926.325 1.434.265.261-.032.514-.125.771-.24.255-.114.566-.274.949-.47l2.475-1.27c.285-.145.507-.259.698-.408.49-.385.826-.942.942-1.564C20 7.254 20 7 20 6.673v-.077c0-.439 0-.796-.015-1.08a2.884 2.884 0 0 0-.135-.815Z"
      />
    </svg>
  );
};
export default SvgMusicNote4;
