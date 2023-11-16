import * as React from "react";
import type { SVGProps } from "react";
const SvgSkirt = (props: SVGProps<SVGSVGElement>) => {
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
        d="m2.08 17.953-.717-.217.718.217Zm19.84 0 .717-.217-.718.217ZM2.734 19.829l.385-.643-.385.643Zm18.53 0-.385-.643.386.643ZM10.744 5.598a.75.75 0 0 0-1.488-.196l1.488.196ZM7.148 21.402a.75.75 0 1 0 1.487.196l-1.487-.196Zm7.596-16a.75.75 0 0 0-1.488.196l1.488-.196Zm.62 16.196a.75.75 0 0 0 1.488-.196l-1.487.196ZM7.893 2.75h8.216v-1.5H7.892v1.5ZM17.412 4v1.5h1.5V4h-1.5Zm.75.75H5.838v1.5h12.324v-1.5ZM6.588 5.5V4h-1.5v1.5h1.5Zm9.52-2.75c.505 0 .81.002 1.03.03a.773.773 0 0 1 .198.048l.002.002 1.047-1.074c-.314-.306-.693-.416-1.052-.463-.34-.045-.761-.043-1.225-.043v1.5ZM18.912 4c0-.45.002-.864-.044-1.2-.05-.36-.167-.736-.483-1.044L17.338 2.83h.001l.001.003.005.01a.68.68 0 0 1 .037.162c.029.21.03.502.03.995h1.5ZM7.892 1.25c-.464 0-.885-.002-1.225.043-.359.047-.738.157-1.052.463L6.662 2.83a.775.775 0 0 1 .2-.05c.22-.028.525-.03 1.03-.03v-1.5ZM6.588 4c0-.493.001-.786.03-.995a.676.676 0 0 1 .043-.174L5.616 1.755c-.316.308-.433.685-.483 1.044-.046.336-.044.75-.044 1.2h1.5ZM5.12 5.283 1.363 17.736l1.436.433L6.556 5.717 5.12 5.283Zm17.517 12.453L18.881 5.283l-1.437.434 3.757 12.453 1.436-.434ZM2.35 20.472c1.532.92 4.648 2.278 9.651 2.278v-1.5c-4.717 0-7.567-1.276-8.88-2.064l-.771 1.286ZM12 22.75c5.003 0 8.119-1.358 9.651-2.278l-.771-1.286c-1.313.788-4.163 2.064-8.88 2.064v1.5Zm9.201-4.58c.136.45-.017.833-.321 1.016l.771 1.286c1-.6 1.282-1.755.986-2.736l-1.436.433Zm-19.838-.434c-.296.982-.014 2.136.986 2.736l.771-1.286c-.304-.183-.457-.566-.321-1.017l-1.436-.433ZM9.256 5.402l-2.108 16 1.487.196 2.109-16-1.488-.196Zm4 .196 2.109 16 1.487-.196-2.108-16-1.488.196Z"
      />
    </svg>
  );
};
export default SvgSkirt;
