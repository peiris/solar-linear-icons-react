import * as React from "react";
import type { SVGProps } from "react";
const SvgClouds = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486 0 1.916 1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985 0-2.705 2.17-4.893 4.864-4.983a6.366 6.366 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397 3.158 0 5.796 2.244 6.355 5.221 2.3.977 3.919 3.238 3.919 5.882a.75.75 0 1 1-1.5 0c0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416 6.517 6.517 0 0 1 3.024-.305 4.962 4.962 0 0 0-4.682-3.264Zm3.333 10c-1.673 0-2.964 1.28-2.964 2.78 0 .207.024.409.07.603.292.095.568.225.82.386a.75.75 0 0 1-.804 1.266 2.1 2.1 0 0 0-1.145-.33c-1.161 0-2.036.886-2.036 1.898s.875 1.897 2.036 1.897h6.5c1.673 0 2.964-1.28 2.964-2.78 0-1.19-.807-2.236-1.983-2.623a3.136 3.136 0 0 0-.981-.156c-.353 0-.689.058-1 .162a.75.75 0 1 1-.477-1.422 4.634 4.634 0 0 1 1.599-.238c-.499-.85-1.462-1.443-2.599-1.443Zm4.357 1.838c-.452-1.934-2.254-3.338-4.357-3.338-2.428 0-4.464 1.88-4.464 4.28 0 .151.008.301.025.45-1.73.196-3.12 1.601-3.12 3.373 0 1.912 1.62 3.397 3.536 3.397h6.5c2.429 0 4.464-1.88 4.464-4.28 0-1.737-1.074-3.208-2.584-3.882Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgClouds;
