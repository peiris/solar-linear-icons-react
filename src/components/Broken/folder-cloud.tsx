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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12.952 11.885a2.447 2.447 0 0 1 1.51-.004m-4.415.972a1.86 1.86 0 0 0-.333-.03c-.946 0-1.714.712-1.714 1.589S8.768 16 9.714 16h4C14.977 16 16 15.052 16 13.882c0-.927-.643-1.714-1.538-2.001m-4.415.972a1.974 1.974 0 0 1-.142-.735c0-1.17 1.023-2.118 2.286-2.118 1.175 0 2.144.823 2.271 1.88m-4.415.973c.225.041.435.123.62.238"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 11.798c0-2.632 0-3.949-.77-4.804a2.984 2.984 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-3"
      />
    </svg>
  );
};
export default SvgFolderCloud;
