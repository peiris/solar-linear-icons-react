import * as React from "react";
import type { SVGProps } from "react";
const SvgCourseDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.668 18c0 .414.336.75.75.75H22a.75.75 0 0 0 .75-.75v-5.546a.75.75 0 1 0-1.5 0v4.796h-4.832a.75.75 0 0 0-.75.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m20.187 17.25-6.095-6.053c-.514-.51-.847-.84-1.125-1.05-.26-.197-.381-.219-.462-.219-.08 0-.202.022-.462.22-.277.21-.61.539-1.124 1.05l-.274.272c-.47.467-.874.87-1.241 1.148-.394.299-.831.525-1.37.525-.539 0-.976-.227-1.37-.526-.367-.279-.77-.682-1.24-1.149L1.471 7.532A.75.75 0 0 1 2.529 6.47l3.919 3.902c.514.511.847.84 1.124 1.052.26.197.382.22.462.22.081 0 .203-.022.463-.22.278-.21.61-.54 1.125-1.051l.274-.273c.47-.466.873-.868 1.24-1.146.394-.299.83-.525 1.369-.525.538 0 .975.226 1.369.524.367.279.771.68 1.24 1.147l6.136 6.092v1.059h-1.063Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgCourseDown;
