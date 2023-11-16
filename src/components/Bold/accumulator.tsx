import * as React from "react";
import type { SVGProps } from "react";
const SvgAccumulator = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 14v-2.025c0-1.846 0-2.768-.392-3.458a3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a1 1 0 0 1-.725-.448 2.223 2.223 0 0 1-.113-.213c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C13.878 5 13.755 5 13.509 5h-3.018c-.246 0-.37 0-.482.013a2 2 0 0 0-1.448.895c-.063.095-.118.205-.228.425-.055.11-.082.165-.113.213a1 1 0 0 1-.724.447C7.439 7 7.378 7 7.255 7h-.28c-1.846 0-2.768 0-3.458.392a3 3 0 0 0-1.125 1.125C2 9.207 2 10.129 2 11.975V14c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14Z"
      />
      <path
        fill="currentColor"
        d="M5.045 3.25c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04l.008.066c.034.299-.056.595-.197.86a.505.505 0 0 1-.443.27L6.93 6c-.885 0-1.614 0-2.207.053-.616.055-1.18.174-1.7.47a4 4 0 0 0-.773.572v-1.14c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043h.09ZM19.045 3.25c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152v1.14a4.003 4.003 0 0 0-.773-.572c-.52-.296-1.084-.415-1.7-.47C18.684 6 17.954 6 17.07 6l-.153-.001a.501.501 0 0 1-.437-.27c-.14-.265-.229-.56-.195-.858a3.26 3.26 0 0 1 .008-.068c.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043h.09Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16.5 11.25a.75.75 0 0 1 .75.75v.75H18a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H15a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75ZM5.25 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAccumulator;