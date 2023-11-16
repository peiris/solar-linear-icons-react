import * as React from "react";
import type { SVGProps } from "react";
const SvgTelescope = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.3}>
        <path d="M17.976 2.602c.463-.26.766-.428 1.007-.524.226-.09.325-.085.393-.068.066.018.153.06.301.247.159.199.334.49.601.94l1.104 1.856c.268.45.44.742.539.974.092.218.085.308.07.366-.017.059-.058.142-.253.287-.205.154-.506.324-.97.584l-3.932 2.202c-.438.246-.722.404-.947.493-.21.084-.296.077-.35.062-.055-.014-.133-.05-.273-.227-.15-.188-.315-.465-.57-.894l-1.18-1.981c-.262-.441-.43-.727-.527-.953-.09-.213-.083-.3-.068-.354.014-.054.052-.133.238-.272.198-.15.489-.313.94-.566l3.877-2.172ZM6.627 10.196l-3.395 1.902c-.464.26-.765.43-.97.583-.195.146-.236.229-.252.287-.016.058-.023.148.069.366.098.232.271.525.539.975.268.45.442.741.6.94.149.187.236.23.302.247.068.018.167.022.394-.068.24-.096.543-.264 1.006-.524l3.377-1.892c-.158-.224-.321-.5-.505-.807l-.662-1.113c-.2-.336-.376-.633-.503-.896Z" />
      </g>
      <path
        fill="currentColor"
        d="m8.638 8.45 3.449-1.931c.127.263.304.56.504.896l1.214 2.04c.183.308.347.583.504.808l-1.547.866 4.176 9.79a.776.776 0 0 1-.42 1.02.793.793 0 0 1-1.035-.416L12 13.358l-3.483 8.165a.793.793 0 0 1-1.034.416.776.776 0 0 1-.42-1.02l3.696-8.668c-.402.225-.669.372-.883.457-.21.084-.296.077-.35.062-.055-.014-.133-.05-.273-.227-.149-.188-.315-.465-.57-.894l-.627-1.054c-.263-.44-.431-.726-.528-.953-.09-.213-.083-.3-.068-.353.015-.055.052-.133.238-.273.198-.149.49-.313.94-.565Z"
      />
    </svg>
  );
};
export default SvgTelescope;
