import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperBin = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.034 8.89c-.48-3.204-.72-4.805.177-5.848C4.109 2 5.728 2 8.968 2h6.066c3.239 0 4.859 0 5.756 1.042.898 1.043.658 2.644.177 5.848l-1.2 8c-.366 2.438-.548 3.656-1.392 4.383-.844.727-2.077.727-4.541.727h-3.666c-2.465 0-3.698 0-4.541-.727-.844-.727-1.027-1.945-1.393-4.383l-1.2-8Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.517 12.115-.29-1.933 1.845-2.05L3.689 6.75h-.96a15.1 15.1 0 0 1-.123-1.5h18.788c-.01.437-.054.933-.124 1.5h-.96l-1.382 1.382 1.845 2.05-.29 1.933-1.6 1.707 1.168 1.169-.276 1.845-1.92-1.92-1.876 2.003 1.332 1.331h2.245c-.098.59-.195 1.083-.314 1.5H4.758c-.12-.417-.216-.91-.314-1.5h2.245l1.332-1.331-1.877-2.002-1.919 1.918-.276-1.844 1.168-1.17-1.6-1.706Zm2.56-5.099L5.81 6.75h.506l-.24.266Zm1.062 1.062L8.334 6.75h1.355L10.94 8 9 9.94 7.14 8.077Zm4.86-1.139-.189-.189h.38l-.19.19ZM13.06 8l1.25-1.25h1.356l1.195 1.328L15 9.94 13.06 8Zm4.863-.984-.24-.266h.506l-.266.266ZM16.061 11l1.805-1.805 1.616 1.795-1.66 1.77L16.06 11ZM15 12.06l1.795 1.795-1.877 2.002L13.06 14 15 12.06Zm-3 3 1.892 1.892-1.217 1.298h-1.35l-1.217-1.298L12 15.061Zm3.19 3.19h-.459l.222-.236.236.236Zm-6.143-.236.222.236H8.81l.237-.236ZM10.939 14l-1.857 1.857-1.877-2.001L9 12.06 10.94 14Zm-3-3-1.76 1.76-1.66-1.77 1.615-1.795L7.939 11ZM12 12.94 10.06 11 12 9.06 13.94 11 12 12.94Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPaperBin;
