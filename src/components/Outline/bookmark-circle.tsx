import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkCircle = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm10.692-5.75h.116c.893 0 1.648 0 2.25.092.647.099 1.22.318 1.67.829.437.497.612 1.108.694 1.794.078.664.078 1.505.078 2.536v2.585c0 .74 0 1.35-.044 1.814-.043.446-.137.958-.492 1.327a1.7 1.7 0 0 1-1.006.513c-.55.07-1.005-.231-1.331-.49-.344-.274-.752-.68-1.237-1.163l-.032-.032a8.195 8.195 0 0 0-.49-.467.678.678 0 0 0-.097-.07.13.13 0 0 0-.042 0 .678.678 0 0 0-.097.07 8.195 8.195 0 0 0-.49.467l-.032.032c-.485.482-.893.889-1.237 1.162-.326.26-.782.561-1.331.49a1.7 1.7 0 0 1-1.006-.512c-.355-.369-.45-.88-.492-1.327-.044-.465-.044-1.074-.044-1.814V11.5c0-1.031 0-1.872.078-2.536.082-.686.257-1.297.695-1.794.45-.511 1.022-.73 1.67-.83.6-.091 1.356-.091 2.25-.091Zm.043 9.264-.001.001h.001Zm.03 0 .001.001h-.001Zm-2.096-7.69c-.443.068-.634.183-.77.337-.148.17-.266.428-.331.98-.067.565-.068 1.317-.068 2.408v2.497c0 .79 0 1.327.037 1.713.032.33.082.424.086.433a.23.23 0 0 0 .072.05c.036-.018.113-.062.243-.166.27-.215.62-.562 1.146-1.085l.022-.021c.208-.207.4-.398.573-.54.187-.155.416-.307.71-.374a1.63 1.63 0 0 1 .722 0c.294.067.523.22.71.373.174.143.365.334.573.54l.022.022c.526.523.875.87 1.146 1.085.13.104.207.148.243.166a.23.23 0 0 0 .072-.05c.004-.01.054-.104.086-.433.036-.386.037-.923.037-1.713v-2.497c0-1.091-.001-1.843-.068-2.408-.065-.552-.183-.81-.331-.98-.136-.154-.327-.269-.77-.336-.475-.073-1.114-.075-2.081-.075-.967 0-1.606.002-2.081.075Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBookmarkCircle;
