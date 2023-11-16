import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z"
        opacity={0.3}
      />
      <path fill="currentColor" d="m12.448 16.774-.001-.003.001.004v-.001Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.788 6.196c.253.135.547.351.854.578L15.02 7.79c.211.155.428.315.587.471.179.177.393.455.393.852 0 .397-.214.674-.393.852a5.576 5.576 0 0 1-.587.471L12.898 12l2.122 1.564c.211.155.428.315.587.471.179.178.393.455.393.852 0 .397-.214.675-.393.852-.159.156-.376.316-.587.471l-1.378 1.016c-.307.227-.6.443-.854.578-.258.138-.701.316-1.172.084-.472-.232-.593-.686-.636-.972-.041-.28-.041-.64-.041-1.018V13.54l-1.734 1.42a.744.744 0 0 1-1.035-.093.713.713 0 0 1 .094-1.017L10.526 12l-2.262-1.851a.713.713 0 0 1-.094-1.017.744.744 0 0 1 1.035-.092l1.734 1.419V8.102c0-.378 0-.738.041-1.018.043-.286.164-.74.636-.972.471-.231.914-.054 1.172.084Zm-.38 9.654v-2.406l1.698 1.25c.103.076.187.138.259.193a19.24 19.24 0 0 1-.259.193l-1.306.962c-.156.115-.283.208-.39.283a27.047 27.047 0 0 1-.002-.475Zm.04.924-.001-.003.001.004v-.001Zm-.04-8.624v2.406l1.698-1.25c.103-.076.187-.138.259-.193a19.081 19.081 0 0 0-.259-.193L12.8 7.958a28.418 28.418 0 0 0-.39-.283 27.05 27.05 0 0 0-.002.475Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBluetoothSquare;
