import * as React from "react";
import type { SVGProps } from "react";
const SvgTextCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.952 6.25c-.43 0-.832 0-1.16.049-.371.055-.752.186-1.057.525-.294.327-.398.717-.443 1.089-.042.348-.042.78-.042 1.267v.57a.75.75 0 0 0 1.5 0v-.528c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.033.02-.043.023-.046h.001c.001-.002.002-.003.011-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032h1.25v8.5H9.5a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5h-2.25v-8.5H14c.495 0 .782.002.986.032.092.014.135.03.152.037l.011.007v.001a.13.13 0 0 1 .024.045c.014.038.032.105.046.221.03.247.031.586.031 1.13v.527a.75.75 0 0 0 1.5 0v-.57c0-.488 0-.919-.042-1.267-.045-.372-.149-.762-.443-1.09-.305-.338-.686-.469-1.057-.524-.328-.05-.73-.05-1.16-.049H9.952Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextCircle;