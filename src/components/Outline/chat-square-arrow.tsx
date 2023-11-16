import * as React from "react";
import type { SVGProps } from "react";
const SvgChatSquareArrow = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.784 1.473a.75.75 0 0 1-.007 1.06l-.956.945c.832.009 1.632.029 2.354.078.621.042 1.203.106 1.71.207.496.099.975.243 1.355.472a5.223 5.223 0 0 1 1.734 1.714c.418.673.601 1.433.69 2.35.086.897.086 2.018.086 3.44v.039a.75.75 0 0 1-1.5 0c0-1.47 0-2.519-.08-3.335-.077-.806-.225-1.307-.47-1.703a3.723 3.723 0 0 0-1.237-1.221c-.161-.098-.442-.2-.87-.285-.42-.083-.93-.142-1.519-.182a40.109 40.109 0 0 0-2.241-.074l.944.933a.75.75 0 1 1-1.054 1.067l-2.25-2.222a.75.75 0 0 1 0-1.067l2.25-2.223a.75.75 0 0 1 1.06.007ZM10.05 4.221a.75.75 0 0 1-.748.752c-2.305.007-3.007.087-3.765.546A3.723 3.723 0 0 0 4.3 6.739c-.245.397-.393.898-.47 1.704-.08.816-.08 1.865-.08 3.335v.889c0 1.046 0 1.792.041 2.38.04.58.117.952.243 1.253a3.722 3.722 0 0 0 2.028 2c.45.185 1.031.257 2.161.276h.031c.356.006.673.012.937.04.285.032.57.096.845.254.273.156.47.366.638.594.154.21.312.473.487.766l.504.84c.068.113.19.18.335.18a.378.378 0 0 0 .335-.18l.503-.84c.176-.293.334-.557.488-.766a2.07 2.07 0 0 1 .638-.594c.275-.159.56-.222.845-.253.264-.03.58-.035.937-.04l.03-.001c1.13-.02 1.711-.09 2.162-.275a3.722 3.722 0 0 0 2.028-2.001c.169-.404.245-.92.271-1.876a.75.75 0 0 1 1.5.04c-.027.982-.104 1.738-.388 2.416a5.222 5.222 0 0 1-2.843 2.81c-.738.301-1.574.366-2.704.386-.396.006-.643.011-.83.032-.174.019-.232.046-.261.062-.03.018-.081.054-.178.185a9.32 9.32 0 0 0-.424.672l-.488.814c-.726 1.212-2.516 1.212-3.242 0l-.488-.814a9.325 9.325 0 0 0-.424-.672c-.097-.131-.147-.167-.178-.185-.029-.016-.087-.043-.26-.062-.188-.02-.435-.026-.831-.032-1.13-.02-1.966-.085-2.704-.387a5.222 5.222 0 0 1-2.843-2.81c-.216-.515-.31-1.07-.356-1.729-.045-.646-.045-1.444-.045-2.455v-.957c0-1.421 0-2.542.086-3.44.089-.916.272-1.676.69-2.349A5.223 5.223 0 0 1 4.76 4.235c1.17-.708 2.302-.755 4.538-.762a.75.75 0 0 1 .752.748Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChatSquareArrow;
