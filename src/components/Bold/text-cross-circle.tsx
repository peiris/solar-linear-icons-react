import * as React from "react";
import type { SVGProps } from "react";
const SvgTextCrossCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM9.952 6.25c-.43 0-.832 0-1.16.049-.371.055-.752.186-1.057.525-.294.327-.398.717-.443 1.089-.042.348-.042.78-.042 1.267v.042a.75.75 0 1 0 1.5 0c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.033.02-.043.023-.046h.001c.001-.002.002-.003.011-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032h1.25V9.5a.75.75 0 0 0 1.5 0V7.75H14c.495 0 .782.002.986.032.092.014.135.03.152.037l.011.007v.001a.13.13 0 0 1 .024.045c.014.038.032.105.046.221.03.247.031.586.031 1.13a.75.75 0 0 0 1.5 0V9.18c0-.488 0-.919-.042-1.267-.045-.372-.149-.762-.443-1.09-.305-.338-.686-.469-1.057-.524-.328-.05-.73-.05-1.16-.049H9.952ZM8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Zm4.75 3.25a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75V14.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextCrossCircle;
