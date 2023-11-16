import * as React from "react";
import type { SVGProps } from "react";
const SvgMuted = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.224 6.807c1.2-.835 2.036-1.415 2.694-1.753.658-.337.96-.336 1.156-.266.12.044.24.107.346.186.187.139.37.417.5 1.156a.75.75 0 0 0 1.478-.26c-.15-.856-.427-1.613-1.084-2.1a2.861 2.861 0 0 0-.731-.393c-.795-.286-1.579-.053-2.35.342-.759.39-1.678 1.03-2.818 1.823l-.251.176c-.418.29-.556.384-.698.45a1.926 1.926 0 0 1-.475.15c-.15.027-.311.03-.812.03h-.16c-1.12-.001-1.925-.002-2.64.348-.66.322-1.284.947-1.621 1.607-.364.712-.406 1.455-.467 2.518l-.007.128c-.021.36-.034.717-.034 1.051 0 .335.013.691.034 1.052l.007.128c.06 1.062.103 1.805.467 2.518.337.66.962 1.285 1.621 1.607.715.35 1.52.349 2.64.348h.16c.5 0 .662.003.812.03.163.028.323.079.475.15.142.066.28.159.698.45l.251.175c1.14.794 2.06 1.434 2.819 1.823.77.396 1.554.629 2.349.343a2.86 2.86 0 0 0 .73-.393c.658-.488.934-1.245 1.085-2.1a.75.75 0 1 0-1.478-.26c-.13.74-.313 1.017-.5 1.155a1.361 1.361 0 0 1-.346.186c-.196.071-.498.072-1.156-.265-.658-.338-1.495-.918-2.694-1.753l-.252-.176c-.35-.244-.599-.417-.872-.544a3.43 3.43 0 0 0-.846-.268c-.297-.053-.598-.053-1.016-.053h-.06c-1.348 0-1.776-.018-2.14-.196-.358-.174-.75-.56-.944-.941-.204-.4-.241-.811-.313-2.05A16.99 16.99 0 0 1 4.75 12c0-.298.011-.624.031-.965.072-1.239.109-1.65.313-2.05.194-.381.586-.767.944-.941.364-.178.792-.196 2.14-.196h.06c.418 0 .72 0 1.016-.053.292-.052.576-.142.846-.268.273-.127.522-.3.872-.544l.252-.176Z"
      />
      <path
        fill="currentColor"
        d="M14.53 8.47a.75.75 0 0 0-1.06 1.06L15.94 12l-2.47 2.47a.75.75 0 0 0 1.06 1.06L17 13.062l2.47 2.47a.75.75 0 0 0 1.06-1.061L18.06 12l2.47-2.47a.75.75 0 1 0-1.06-1.06L17 10.94l-2.47-2.47Z"
      />
    </svg>
  );
};
export default SvgMuted;
