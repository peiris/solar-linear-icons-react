import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSpeak = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.357 1.364a.75.75 0 0 1 1.029-.257L19 1.75l.386-.643h.001l.002.002.003.002.01.006a1.716 1.716 0 0 1 .114.076c.07.049.165.12.277.212.222.185.512.462.802.838.582.758 1.155 1.914 1.155 3.507 0 1.593-.573 2.75-1.155 3.507-.29.376-.58.653-.802.838a4.16 4.16 0 0 1-.378.28l-.013.008-.01.006-.003.002-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004.04-.027c.04-.028.101-.073.177-.136.153-.128.363-.326.573-.6.418-.542.845-1.386.845-2.593s-.427-2.05-.844-2.593a3.805 3.805 0 0 0-.574-.6 2.67 2.67 0 0 0-.217-.163l-.005-.003a.75.75 0 0 1-.253-1.027ZM10 9.75a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
      <path
        fill="currentColor"
        d="M17.386 3.107a.75.75 0 0 0-1.03.257l.25 1.024.007.005a1.525 1.525 0 0 1 .293.29 1.7 1.7 0 0 1 .344 1.067 1.7 1.7 0 0 1-.344 1.068 1.524 1.524 0 0 1-.293.29l-.008.004a.75.75 0 0 0 .78 1.281L17 7.75l.386.643h.001l.002-.001.003-.002.007-.005.02-.012a1.876 1.876 0 0 0 .217-.162c.129-.107.294-.265.459-.479a3.2 3.2 0 0 0 .655-1.982 3.2 3.2 0 0 0-.655-1.982 3.032 3.032 0 0 0-.622-.604 1.897 1.897 0 0 0-.054-.037l-.02-.012-.007-.004-.003-.002-.002-.001s-.001-.001-.387.642l.386-.643Z"
      />
      <path
        fill="currentColor"
        d="M2 17.25c0 2.485 0 4.5 8 4.5s8-2.015 8-4.5-3.582-4.5-8-4.5-8 2.015-8 4.5Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgUserSpeak;
