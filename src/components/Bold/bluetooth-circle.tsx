import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.75 16.376v-2.874l2 1.504c.135.102.243.184.333.255l.026.021-.026.02c-.09.073-.198.154-.334.256l-1.454 1.094c-.227.171-.4.3-.539.397-.005-.17-.006-.387-.006-.673ZM11.41 17.257h.004-.004ZM11.798 17.45l-.001-.003.001.004ZM11.75 7.623v2.874l2-1.504c.135-.102.243-.183.333-.255l.026-.02-.026-.021a16.67 16.67 0 0 0-.334-.256l-1.454-1.094c-.227-.17-.4-.3-.539-.397-.005.17-.006.387-.006.673ZM11.797 6.553a.02.02 0 0 0 .001-.004v.001l-.001.003Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.155-15.883c-.345-.26-.668-.502-.945-.653-.283-.155-.75-.343-1.245-.095-.493.248-.623.734-.67 1.053-.045.312-.045.717-.045 1.15v2.827L8.48 8.924a.75.75 0 0 0-.96 1.152L9.828 12 7.52 13.924a.75.75 0 1 0 .96 1.152l1.77-1.475v2.827c0 .432 0 .837.046 1.15.046.319.176.805.67 1.052.494.248.96.06 1.244-.094.277-.151.6-.394.945-.654l1.53-1.151c.237-.178.475-.357.648-.531.194-.196.417-.494.417-.918 0-.423-.223-.722-.417-.918a6.207 6.207 0 0 0-.648-.53L12.248 12l2.437-1.834c.237-.178.475-.357.648-.53.194-.197.417-.495.417-.919 0-.423-.223-.722-.417-.917a6.196 6.196 0 0 0-.648-.531l-1.53-1.152Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBluetoothCircle;