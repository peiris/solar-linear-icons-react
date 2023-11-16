import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldMinus = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15 12.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25c-.937 0-1.833.307-3.277.801l-.727.25c-1.481.506-2.625.898-3.443 1.23-.412.167-.767.33-1.052.495-.275.16-.55.359-.737.626-.185.263-.281.587-.341.9-.063.324-.1.713-.125 1.16-.048.886-.048 2.102-.048 3.678v1.601c0 6.101 4.608 9.026 7.348 10.224l.027.011c.34.149.66.288 1.027.382.387.1.799.142 1.348.142.55 0 .96-.042 1.348-.142.367-.094.687-.233 1.026-.382l.028-.011c2.74-1.198 7.348-4.123 7.348-10.224V10.39c0-1.576 0-2.792-.048-3.679a8.85 8.85 0 0 0-.125-1.16c-.06-.312-.156-.636-.34-.9-.188-.266-.463-.465-.738-.625a8.554 8.554 0 0 0-1.052-.495c-.818-.332-1.962-.724-3.443-1.23l-.727-.25c-1.444-.494-2.34-.801-3.277-.801ZM9.08 3.514c1.615-.552 2.262-.764 2.92-.764.658 0 1.305.212 2.92.764l.572.196c1.513.518 2.616.896 3.39 1.21.387.158.667.29.864.404.097.056.164.102.208.139.038.03.053.048.055.05a.408.408 0 0 1 .032.074c.02.056.042.136.063.248.044.227.077.538.1.958.046.841.046 2.015.046 3.624v1.574c0 5.176-3.87 7.723-6.449 8.849-.371.162-.586.254-.825.315-.228.059-.506.095-.976.095s-.748-.036-.976-.095c-.24-.06-.454-.153-.825-.315-2.58-1.126-6.449-3.674-6.449-8.849v-1.574c0-1.609 0-2.783.046-3.624.023-.42.056-.731.1-.958.021-.112.043-.192.063-.248.018-.05.03-.07.032-.074a.386.386 0 0 1 .055-.05c.044-.037.111-.083.208-.14.197-.114.477-.245.864-.402.774-.315 1.877-.693 3.39-1.21l.573-.197Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShieldMinus;
