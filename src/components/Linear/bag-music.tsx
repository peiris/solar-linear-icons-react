import * as React from "react";
import type { SVGProps } from "react";
const SvgBagMusic = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        
        d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 6V5a3 3 0 1 1 6 0v1"
      />
      <path
        stroke="currentColor"
        
        d="M12 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0v-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m14.058 9.97-1.316.66a2.247 2.247 0 0 0-.35.194 1 1 0 0 0-.374.606c-.018.093-.018.195-.018.4 0 .485 0 .727.06.893a1 1 0 0 0 1.056.652c.174-.02.391-.129.826-.346l1.316-.658c.183-.091.274-.137.35-.195a1 1 0 0 0 .374-.606c.018-.093.018-.195.018-.4 0-.485 0-.727-.06-.893a1 1 0 0 0-1.056-.652c-.174.02-.391.129-.826.346Z"
      />
    </svg>
  );
};
export default SvgBagMusic;
