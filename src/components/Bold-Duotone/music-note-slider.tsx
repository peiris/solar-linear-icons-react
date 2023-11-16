import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNoteSlider = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.5}>
        <path d="M6.724 3.762H5.268a8.29 8.29 0 0 0-.434.025c-.43.038-.82.119-1.183.318a3.146 3.146 0 0 0-1.321 1.42c-.186.39-.26.809-.296 1.272C2 7.245 2 7.796 2 8.47v7.063c0 .673 0 1.224.034 1.671.035.464.11.882.296 1.273.29.611.752 1.108 1.32 1.42.364.2.753.28 1.184.318.135.012.279.02.434.025h1.456C6.42 19.341 6.42 18.037 6.42 16V8c0-2.037 0-3.34.305-4.238ZM17.276 20.239c.306-.898.306-2.202.306-4.239V8c0-2.037 0-3.34-.305-4.238h1.455c.155.005.3.013.434.025.43.038.82.119 1.183.318a3.147 3.147 0 0 1 1.322 1.42c.185.39.26.809.295 1.272.034.448.034.999.034 1.672v7.063c0 .673 0 1.224-.034 1.671-.035.464-.11.882-.296 1.273a3.146 3.146 0 0 1-1.32 1.42c-.364.2-.753.28-1.184.318a8.28 8.28 0 0 1-.434.025h-1.456Z" />
      </g>
      <path
        fill="currentColor"
        d="M11 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.419 8c0-2.828 0-4.243.817-5.121C8.054 2 9.37 2 12 2c2.631 0 3.947 0 4.764.879.818.878.818 2.293.818 5.121v8c0 2.828 0 4.243-.818 5.121C15.947 22 14.631 22 12 22c-2.63 0-3.946 0-4.764-.879-.817-.878-.817-2.293-.817-5.121V8Zm7.331 0a.75.75 0 1 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 1 0 0-1.5c-.69 0-1.25-.56-1.25-1.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMusicNoteSlider;
