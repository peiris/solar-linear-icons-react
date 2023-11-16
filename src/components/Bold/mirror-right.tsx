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
        d="M11.66 2.75a.75.75 0 0 1-.75.75H10c-.436 0-.835 0-1.202.003a.75.75 0 0 1-.013-1.5C9.159 2 9.564 2 9.998 2h.911a.75.75 0 0 1 .75.75Zm0 18a.75.75 0 0 1-.75.75h-.912c-.434 0-.839 0-1.213-.003a.75.75 0 0 1 .013-1.5C9.165 20 9.564 20 10 20h.91a.75.75 0 0 1 .75.75ZM6.628 2.805a.75.75 0 0 1-.494.938c-.321.1-.545.235-.726.416-.181.181-.316.405-.416.726a.75.75 0 0 1-1.432-.445c.16-.515.408-.962.787-1.342.38-.38.827-.627 1.342-.787a.75.75 0 0 1 .939.494Zm0 17.89a.75.75 0 0 1-.939.494 3.176 3.176 0 0 1-1.342-.787 3.176 3.176 0 0 1-.787-1.342.75.75 0 1 1 1.432-.445c.1.321.235.545.416.726.181.181.405.316.726.416a.75.75 0 0 1 .494.938ZM4.009 6.791a.75.75 0 0 1 .744.757c-.003.367-.003.766-.003 1.202v1.364a.75.75 0 0 1-1.5 0V8.748c0-.434 0-.839.003-1.213a.75.75 0 0 1 .757-.744Zm0 9.918a.75.75 0 0 1-.756-.744c-.003-.374-.003-.779-.003-1.213v-1.366a.75.75 0 0 1 1.5 0v1.364c0 .436 0 .835.003 1.202a.75.75 0 0 1-.743.757Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22 12.75v-2c0-3.771 0-5.657-1.172-6.828-1.092-1.093-3.676-1.167-7.078-1.172a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0c3.402-.005 5.986-.079 7.078-1.172C22 18.407 22 16.521 22 12.75Z"
      />
    </svg>
  );
};
export default SvgMirrorRight;
