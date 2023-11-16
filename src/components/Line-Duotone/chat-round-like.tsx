import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundLike = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z"
      />
      <path
        fill="currentColor"
        d="m10.029 14.943-.486.57.486-.57ZM12 9.5l-.536.524a.75.75 0 0 0 1.072 0L12 9.501Zm1.971 5.442-.486-.572.486.572ZM12 15.993v-.75.75Zm-1.485-1.622c-.582-.494-1.166-1.068-1.599-1.66-.441-.605-.666-1.149-.666-1.602h-1.5c0 .916.435 1.774.955 2.486.529.725 1.21 1.384 1.838 1.919l.972-1.143ZM8.25 11.11c0-1.107.495-1.69 1.003-1.881.518-.193 1.342-.09 2.211.797l1.072-1.049c-1.156-1.18-2.581-1.612-3.808-1.153-1.235.462-1.978 1.717-1.978 3.286h1.5Zm6.207 4.405c.628-.534 1.309-1.194 1.838-1.918.52-.713.955-1.571.955-2.487h-1.5c0 .453-.225.997-.666 1.602-.433.593-1.017 1.166-1.598 1.66l.971 1.143Zm2.793-4.405c0-1.57-.743-2.824-1.978-3.286-1.227-.459-2.652-.028-3.808 1.153l1.072 1.05c.869-.888 1.694-.991 2.21-.798.51.19 1.004.774 1.004 1.881h1.5Zm-7.707 4.405c.78.663 1.4 1.23 2.457 1.23v-1.5c-.414 0-.617-.134-1.485-.873l-.972 1.143Zm3.943-1.143c-.869.739-1.072.873-1.486.873v1.5c1.057 0 1.678-.567 2.457-1.23l-.972-1.143Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgChatRoundLike;
