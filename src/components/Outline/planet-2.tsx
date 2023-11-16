import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanet2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.815 16.25a.75.75 0 1 0-1.43-.456c-.191.602-.211 1.263.15 1.84.453.724 1.307 1.007 2.154 1.088a.75.75 0 0 0 .143-1.493c-.694-.066-.948-.267-1.025-.39-.05-.08-.102-.244.008-.59ZM6.485 18.509a19.627 19.627 0 0 0 1.615-.396 7.284 7.284 0 0 1-1.414-1.181c-.168.039-.332.074-.492.105a.75.75 0 0 0-.572.953c.164.176.336.344.515.505.11.031.229.037.348.014Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.082 10.444c-.583.53-1.269 1.08-2.043 1.631a.75.75 0 1 0 .87 1.222c.474-.338.92-.677 1.335-1.016a7.281 7.281 0 0 0-.162-1.838ZM8.1 18.113c.637-.183 1.3-.404 1.983-.66a.75.75 0 0 0-.527-1.405 22.97 22.97 0 0 1-2.87.884c.418.45.894.848 1.414 1.181Zm7.65-3.41a.75.75 0 0 0-.77-1.287 34.978 34.978 0 0 1-3.092 1.645.75.75 0 1 0 .638 1.358 36.726 36.726 0 0 0 3.224-1.715Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.75 12a7.25 7.25 0 0 1 14.332-1.556c.201-.183.39-.363.565-.54a.75.75 0 0 1 .807-.17 8.716 8.716 0 0 0-1.43-2.952.75.75 0 0 0-.153-1.492c-.344.032-.705.082-1.081.15a8.75 8.75 0 0 0-14.478 7.576c-.335.335-.636.668-.897.995a.75.75 0 0 0 1.172.936 8.64 8.64 0 0 1 .12-.147 8.746 8.746 0 0 0 1.915 3.19.75.75 0 0 1 .572-.953c.16-.031.324-.066.492-.105A7.224 7.224 0 0 1 4.75 12ZM12 20.75a8.75 8.75 0 0 0 8.691-9.768c-.425.426-.91.862-1.447 1.299A7.25 7.25 0 0 1 8.1 18.113c-.562.162-1.102.294-1.615.396a.747.747 0 0 1-.348-.014A8.718 8.718 0 0 0 12 20.75Z"
      />
      <path
        fill="currentColor"
        d="M19.647 9.904a15.27 15.27 0 0 1-.565.54 7.282 7.282 0 0 1 .162 1.837 18.959 18.959 0 0 0 1.447-1.3 8.714 8.714 0 0 0-.237-1.247.75.75 0 0 0-.807.17ZM20.937 5.379a.75.75 0 1 0-.346 1.46c.394.093.546.232.602.322.063.101.133.366-.157.948a.75.75 0 0 0 1.343.669c.378-.758.563-1.65.086-2.413-.344-.55-.923-.843-1.528-.986Z"
      />
      <path
        fill="currentColor"
        d="M20.712 10.96a.75.75 0 0 0-.258-1.226c.108.405.188.822.237 1.248l.02-.021Z"
      />
    </svg>
  );
};
export default SvgPlanet2;
