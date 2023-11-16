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
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M19.009 6.784a.75.75 0 0 0-.138-1.494c-.424.04-.874.106-1.345.2a.748.748 0 0 0-.472.309l1.117 1.097c.296-.05.576-.088.838-.112Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.937 5.38a.75.75 0 1 0-.346 1.459c.394.093.546.232.602.322.063.102.133.366-.157.948a.75.75 0 0 0 1.343.67c.378-.759.563-1.65.086-2.413-.344-.55-.923-.843-1.528-.987Zm-.225 5.581a.75.75 0 1 0-1.065-1.057c-.686.692-1.567 1.43-2.608 2.171a.75.75 0 0 0 .87 1.222c1.095-.78 2.044-1.572 2.803-2.336ZM3.587 14.947c.201-.252.437-.516.706-.79l-.238-1.33a.75.75 0 0 0-.744.189c-.334.336-.635.669-.896.995a.75.75 0 1 0 1.172.937Zm12.163-.243a.75.75 0 1 0-.77-1.287 35.086 35.086 0 0 1-3.092 1.645.75.75 0 0 0 .638 1.357 36.938 36.938 0 0 0 3.224-1.715ZM2.815 16.25a.75.75 0 0 0-1.43-.455c-.191.601-.211 1.262.15 1.84.453.724 1.307 1.006 2.154 1.087a.75.75 0 1 0 .143-1.493c-.694-.066-.948-.267-1.025-.39-.05-.08-.102-.244.008-.589Zm7.268 1.203a.75.75 0 0 0-.527-1.404c-1.225.46-2.365.791-3.362.989a.75.75 0 0 0 .291 1.471c1.093-.216 2.313-.574 3.598-1.056Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPlanet2;
