import * as React from "react";
import type { SVGProps } from "react";
const SvgSpedometerLow = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A9.992 9.992 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.964 9.964 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.964 9.964 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0 .75.75 0 0 1 0 1.062L5.46 19.578A9.997 9.997 0 0 0 12 22a9.997 9.997 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062.753.753 0 0 1 1.063 0l1.556 1.553A9.963 9.963 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.964 9.964 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A9.992 9.992 0 0 0 12.752 2v1.975Zm1.059 6.157a3.001 3.001 0 0 1 0 4.249c-.447.446-1.375.757-2.353.972-1.462.322-2.194.482-2.776-.1-.582-.58-.422-1.311-.1-2.772.215-.976.528-1.903.974-2.349a3.011 3.011 0 0 1 4.255 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSpedometerLow;
