import * as React from "react";
import type { SVGProps } from "react";
const SvgMirrorRight = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9 3.75c-.436 0-.835 0-1.202.003a.75.75 0 0 1-.013-1.5c.374-.003.779-.003 1.213-.003h.911a.75.75 0 0 1 0 1.5H9Zm-3.371-.695a.75.75 0 0 1-.494.938c-.321.1-.545.235-.726.416-.181.181-.316.405-.416.726a.75.75 0 0 1-1.432-.445c.16-.515.408-.962.787-1.342.38-.38.827-.627 1.342-.787a.75.75 0 0 1 .939.494ZM3.009 7.04a.75.75 0 0 1 .744.757C3.75 8.165 3.75 8.564 3.75 9v1.364a.75.75 0 1 1-1.5 0V8.998c0-.434 0-.839.003-1.213a.75.75 0 0 1 .757-.744ZM3 12.886a.75.75 0 0 1 .75.75V15c0 .436 0 .835.003 1.202a.75.75 0 0 1-1.5.013c-.003-.374-.003-.78-.003-1.213v-1.366a.75.75 0 0 1 .75-.75Zm.055 5.485a.75.75 0 0 1 .938.494c.1.321.235.545.416.726.181.181.405.316.726.416a.75.75 0 1 1-.445 1.432 3.176 3.176 0 0 1-1.342-.787 3.176 3.176 0 0 1-.787-1.342.75.75 0 0 1 .494-.939Zm3.986 2.62a.75.75 0 0 1 .757-.744c.367.003.766.003 1.202.003h.91a.75.75 0 0 1 0 1.5h-.912c-.434 0-.839 0-1.213-.003a.75.75 0 0 1-.744-.757ZM12 1.25a.75.75 0 0 1 .75.75v.25h.306c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-.306V22a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm.75 2.5v16.5H13c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMirrorRight;
