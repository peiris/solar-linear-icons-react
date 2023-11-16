import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardHeart = (props: SVGProps<SVGSVGElement>) => {
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
        d="m12 11.691-.519.542a.75.75 0 0 0 1.038 0L12 11.691Zm0 4.137v-.75.75Zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952.453.525 1.014.984 1.474 1.321l.887-1.21ZM9.75 12.697c0-.576.263-.827.492-.907.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776-.934.327-1.496 1.226-1.496 2.323h1.5Zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971-.348.403-.809.786-1.226 1.093l.887 1.21Zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443.228.08.491.33.491.907h1.5ZM10.6 15.97c.368.27.782.607 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287l-.887 1.21Zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608l-.886-1.21Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877-.769.768-.865 1.946-.877 4.121"
      />
    </svg>
  );
};
export default SvgClipboardHeart;
