import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618l-1.05 1.048-1.072 1.073L9.98 6.787 8.91 7.86l-1.05 1.049L6.788 9.98 5.74 11.03l-1.073 1.073-1.048 1.049C2.539 14.24 2 14.862 2 15.616Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M13.238 3.691a.757.757 0 0 0-.086-.073l-1.049 1.048c.022.03.047.059.074.086l1.414 1.414a.75.75 0 0 0 1.06-1.06L13.239 3.69ZM11.116 5.813a.76.76 0 0 0-.086-.074L9.982 6.787c.022.03.046.059.074.086l2.121 2.122a.75.75 0 0 0 1.06-1.061l-2.12-2.121ZM8.995 7.934a.756.756 0 0 0-.086-.074L7.86 8.908c.022.03.047.06.074.087l1.415 1.414a.75.75 0 1 0 1.06-1.06L8.995 7.933ZM6.874 10.055a.757.757 0 0 0-.086-.074L5.739 11.03c.022.03.047.059.074.086l2.121 2.121a.75.75 0 1 0 1.061-1.06l-2.121-2.122ZM4.752 12.177a.751.751 0 0 0-.086-.075l-1.048 1.05c.022.03.047.058.074.085l1.414 1.414a.75.75 0 1 0 1.06-1.06l-1.414-1.414Z"
      />
    </svg>
  );
};
export default SvgRuler;
