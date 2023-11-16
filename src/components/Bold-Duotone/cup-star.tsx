import * as React from "react";
import type { SVGProps } from "react";
const SvgCupStar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 16c-5.76 0-6.78-5.74-6.96-10.294-.05-1.266-.076-1.9.4-2.485.476-.586 1.045-.682 2.184-.874A26.374 26.374 0 0 1 12 2c1.783 0 3.253.157 4.377.347 1.138.192 1.708.288 2.183.874.476.586.451 1.219.4 2.485-.18 4.553-1.2 10.294-6.96 10.294Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m17.64 12.422 2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085c-.005.189-.013.395-.022.621-.088 2.225-.377 4.733-1.32 6.716ZM5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979C2 9.526 2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087c.005.188.013.394.022.62Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.458 21.25H8.543l.297-1.75a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .981.804l.297 1.75Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M12 16c-.26 0-.51-.011-.75-.034v2.73h1.5v-2.73A7.98 7.98 0 0 1 12 16ZM11.146 6.023C11.526 5.34 11.716 5 12 5c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z"
      />
    </svg>
  );
};
export default SvgCupStar;
