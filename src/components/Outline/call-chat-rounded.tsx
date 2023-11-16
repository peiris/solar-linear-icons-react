import * as React from "react";
import type { SVGProps } from "react";
const SvgCallChatRounded = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22.75 7a5.75 5.75 0 1 0-10.9 2.56.129.129 0 0 1 .013.04v.007l-.297 1.113a1.4 1.4 0 0 0 1.714 1.714l1.113-.298c-.002 0-.001 0 0 0h.007a.126.126 0 0 1 .04.014A5.75 5.75 0 0 0 22.75 7Zm-8.356 5.136h-.002.002ZM17 2.75a4.25 4.25 0 1 1-1.892 8.057 1.567 1.567 0 0 0-1.102-.12l-.946.253.253-.946a1.566 1.566 0 0 0-.12-1.102A4.25 4.25 0 0 1 17 2.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.007 6.407c1.68-1.68 4.516-1.552 5.685.544l.65 1.163c.763 1.368.438 3.095-.68 4.227a.63.63 0 0 0-.104.337c-.013.256.078.849.997 1.767.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.104c1.131-1.118 2.859-1.443 4.227-.68l1.163.65c2.096 1.17 2.224 4.005.544 5.685-.899.898-2.094 1.697-3.498 1.75-2.08.079-5.536-.459-8.958-3.88-3.421-3.422-3.959-6.877-3.88-8.958.053-1.405.852-2.6 1.75-3.498Zm4.376 1.275c-.6-1.074-2.21-1.32-3.315-.214-.775.775-1.28 1.63-1.312 2.493-.066 1.736.363 4.762 3.442 7.841 3.08 3.08 6.105 3.508 7.84 3.442.863-.033 1.72-.537 2.494-1.312 1.106-1.106.86-2.716-.214-3.315l-1.163-.649c-.723-.403-1.74-.266-2.452.448-.07.07-.517.486-1.308.524-.81.04-1.791-.324-2.9-1.434-1.111-1.11-1.475-2.091-1.435-2.902.038-.791.455-1.237.524-1.306.714-.714.851-1.73.448-2.453l-.65-1.163Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCallChatRounded;
