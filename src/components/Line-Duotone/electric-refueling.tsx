import * as React from "react";
import type { SVGProps } from "react";
const SvgElectricRefueling = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M16 22V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 10 8 12.5h3L9.5 15"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 22H2"
      />
      <path
        fill="currentColor"
        d="M19.969 3.414a.75.75 0 1 0-.937 1.172l.936-1.172Zm.764 1.572.469-.585-.469.585ZM16 16.25a.75.75 0 0 0 0 1.5v-1.5Zm5.003-11.042-.501.559.5-.559Zm.992 2.066.75-.042-.75.042ZM22 8.75a.75.75 0 0 0 0-1.5v1.5Zm-1.974 4.592-.238.711.238-.711Zm1.737 1.37a.75.75 0 0 0 .474-1.423l-.474 1.422ZM19.03 4.586l1.234.986.937-1.171-1.234-.987-.936 1.172Zm2.219 3.036V18.5h1.5V7.622h-1.5ZM19.75 18.5v-.071h-1.5v.071h1.5Zm-2.179-2.25H16v1.5h1.571v-1.5Zm2.179 2.179a2.179 2.179 0 0 0-2.179-2.179v1.5c.375 0 .679.304.679.679h1.5Zm.75.821a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.985-12.928c.144.116.194.156.237.195l1.001-1.117c-.082-.074-.17-.144-.301-.25l-.937 1.172Zm2.485 2.05c0-.168 0-.28-.006-.39l-1.497.084a6.1 6.1 0 0 1 .003.306h1.5Zm-2.248-1.855c.443.397.711.954.745 1.549l1.497-.084a3.75 3.75 0 0 0-1.24-2.582l-1.002 1.117ZM22 7.25h-1.5v1.5H22v-1.5ZM18.25 9.5v2.419h1.5V9.5h-1.5Zm1.538 4.553 1.975.658.474-1.422-1.974-.659-.475 1.423ZM18.25 11.92c0 .968.62 1.828 1.538 2.134l.475-1.423a.75.75 0 0 1-.513-.711h-1.5ZM20.5 7.25a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75v-1.5Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgElectricRefueling;
