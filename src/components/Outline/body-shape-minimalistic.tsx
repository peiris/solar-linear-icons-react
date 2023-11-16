import * as React from "react";
import type { SVGProps } from "react";
const SvgBodyShapeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.706 1.31a.75.75 0 0 1 .984.396L4 2l.69-.294v.002l.002.003.005.012.018.043.067.163a33.872 33.872 0 0 1 .936 2.684c.507 1.682 1.032 3.908 1.032 5.959 0 .6-.087 1.156-.233 1.678h10.966a6.192 6.192 0 0 1-.233-1.678c0-2.051.525-4.277 1.032-5.959a33.816 33.816 0 0 1 .936-2.684l.067-.163.018-.043.005-.012.001-.003v-.001S19.31 1.706 20 2l-.69-.293a.75.75 0 0 1 1.38.587v.002l-.005.009-.015.036-.06.148a32.437 32.437 0 0 0-.892 2.557c-.493 1.633-.968 3.694-.968 5.526 0 1.059.358 1.967.906 2.956.189.34.41.704.644 1.09.514.845 1.093 1.798 1.536 2.844.534 1.259.914 2.723.914 4.538a.75.75 0 0 1-1.5 0c0-1.49-.29-2.695-.709-3.744-5.394.147-7.46 2.871-7.83 3.981a.75.75 0 0 1-1.422 0c-.37-1.11-2.436-3.834-7.83-3.98A9.847 9.847 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.815.38-3.28.914-4.538.443-1.046 1.022-1.999 1.536-2.844.234-.386.456-.75.644-1.09.548-.989.906-1.898.906-2.956 0-1.832-.475-3.893-.968-5.526A32.381 32.381 0 0 0 3.39 2.49a15.026 15.026 0 0 0-.06-.148l-.016-.036-.003-.009v-.001a.75.75 0 0 1 .395-.985Zm.455 15.478c4.21.279 6.67 2.054 7.839 3.65 1.17-1.596 3.628-3.371 7.839-3.65-.24-.435-.491-.846-.744-1.261a34.79 34.79 0 0 1-.751-1.272 13.793 13.793 0 0 1-.269-.509.778.778 0 0 1-.075.004H6a.778.778 0 0 1-.075-.004 13.84 13.84 0 0 1-.269.509c-.246.444-.5.86-.75 1.271-.254.416-.505.827-.745 1.262Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBodyShapeMinimalistic;
