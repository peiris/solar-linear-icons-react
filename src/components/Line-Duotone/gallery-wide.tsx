import * as React from "react";
import type { SVGProps } from "react";
const SvgGalleryWide = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 13.438C2 9.666 2 7.78 3.172 6.609 4.343 5.438 6.229 5.438 10 5.438h4c3.771 0 5.657 0 6.828 1.171C22 7.781 22 9.666 22 13.438c0 3.77 0 5.656-1.172 6.828-1.171 1.172-3.057 1.172-6.828 1.172h-4c-3.771 0-5.657 0-6.828-1.172C2 19.094 2 17.209 2 13.438Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.988 6c.112-.931.347-1.574.837-2.063C5.765 3 7.279 3 10.307 3h3.211c3.028 0 4.541 0 5.482.937.49.489.725 1.132.837 2.063"
        opacity={0.5}
      />
      <circle
        cx={17.5}
        cy={9.938}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m2 13.938 1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.221l.299-.21a3 3 0 0 1 3.731.226l3.224 2.9"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgGalleryWide;
