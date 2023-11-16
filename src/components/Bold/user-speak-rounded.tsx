import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSpeakRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={10} cy={6.75} r={4} fill="currentColor" />
      <ellipse cx={10} cy={17.75} fill="currentColor" rx={7} ry={4} />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.357 2.364a.75.75 0 0 1 1.029-.257L19 2.75l.386-.643h.001l.002.002.004.002.01.006a2.321 2.321 0 0 1 .113.076c.07.049.166.12.277.212.222.185.512.462.802.838.582.758 1.155 1.914 1.155 3.507 0 1.593-.573 2.75-1.155 3.507-.29.376-.58.653-.802.838a4.16 4.16 0 0 1-.363.27l-.028.018-.01.006-.003.002-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004a2.699 2.699 0 0 0 .217-.163c.153-.128.363-.326.574-.6.417-.542.844-1.386.844-2.593s-.427-2.05-.844-2.593a3.804 3.804 0 0 0-.573-.6 2.673 2.673 0 0 0-.218-.163l-.005-.003a.75.75 0 0 1-.253-1.027Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.33 4.415a.75.75 0 0 1 1.006-.336L17 4.75l.336-.67h.001l.002.001.004.002.008.004.022.012a1.666 1.666 0 0 1 .233.153c.136.102.31.254.48.467.349.436.664 1.099.664 2.031 0 .932-.316 1.595-.664 2.031a2.668 2.668 0 0 1-.654.586 1.649 1.649 0 0 1-.06.034l-.02.012-.01.004-.003.002-.002.001-.33-.657.329.658a.75.75 0 0 1-.685-1.335l.003-.001a1.167 1.167 0 0 0 .26-.24c.152-.19.336-.527.336-1.095s-.184-.905-.335-1.094a1.168 1.168 0 0 0-.261-.24l-.003-.002a.75.75 0 0 1-.322-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserSpeakRounded;
