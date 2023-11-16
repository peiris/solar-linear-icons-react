import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNotes = (props: SVGProps<SVGSVGElement>) => {
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
        d="m12.75 12.508 8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a7.747 7.747 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.18 2.18 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644-.4.22-.743.48-1.001.868-.258.388-.366.805-.415 1.259-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74v-6.993Z"
      />
      <path
        fill="currentColor"
        d="M7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5 2.443 2.443 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMusicNotes;
