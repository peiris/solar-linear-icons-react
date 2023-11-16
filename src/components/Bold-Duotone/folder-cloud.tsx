import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderCloud = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a2.984 2.984 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M16 13.882C16 15.052 14.977 16 13.714 16h-4C8.768 16 8 15.289 8 14.412c0-.877.768-1.589 1.714-1.589.114 0 .225.01.332.03a1.975 1.975 0 0 1-.141-.735c0-1.17 1.023-2.118 2.286-2.118 1.175 0 2.144.823 2.271 1.88.895.288 1.538 1.075 1.538 2.002Z"
      />
    </svg>
  );
};
export default SvgFolderCloud;
