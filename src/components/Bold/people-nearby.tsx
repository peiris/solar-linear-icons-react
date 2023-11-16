import * as React from "react";
import type { SVGProps } from "react";
const SvgPeopleNearby = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m8.223 11.574-2.175-.725a1.532 1.532 0 0 1 .805-2.952l1.898.407.21.044a15 15 0 0 0 6.288-.044l1.897-.407a1.532 1.532 0 0 1 .806 2.952l-2.175.725c-.263.088-.394.132-.493.193a1 1 0 0 0-.466.986c.016.115.066.244.165.503l1.247 3.242a1.473 1.473 0 0 1-2.654 1.26L12 15l-1.576 2.757a1.473 1.473 0 0 1-2.654-1.26l1.247-3.241c.1-.259.149-.388.165-.503a1 1 0 0 0-.466-.986c-.099-.061-.23-.105-.493-.193Z"
      />
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-2.015 10-4.5 0-1.722-2.15-3.218-5.306-3.975l.936 2.434c.749 1.948-.688 4.04-2.775 4.04a2.973 2.973 0 0 1-2.581-1.497l-.274-.48-.274.48A2.973 2.973 0 0 1 9.147 20c-2.087 0-3.525-2.093-2.776-4.041l.936-2.434C4.149 14.282 2 15.778 2 17.5 2 19.985 6.477 22 12 22Z"
      />
    </svg>
  );
};
export default SvgPeopleNearby;
